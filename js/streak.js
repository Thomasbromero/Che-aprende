/* Racha de días seguidos practicando. Cuenta un día como "practicado"
   apenas se responde algo en cualquier módulo (vocabulario, gramática o producción). */
const Streak = (function () {
  function todayStr() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function addDays(dateStr, delta) {
    const [y, m, d] = dateStr.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setDate(dt.getDate() + delta);
    return dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
  }

  function raw() {
    return Store.settings().streak || { count: 0, lastActiveDate: null };
  }

  // Si se saltó un día entero (o más) sin practicar, la racha se pierde y vuelve a 0.
  function reconcile() {
    const st = raw();
    if (!st.lastActiveDate || st.count === 0) return st;
    const today = todayStr();
    const yesterday = addDays(today, -1);
    if (st.lastActiveDate !== today && st.lastActiveDate !== yesterday) {
      const reset = { count: 0, lastActiveDate: st.lastActiveDate };
      Store.updateSettings({ streak: reset });
      return reset;
    }
    return st;
  }

  function status() {
    const st = reconcile();
    return { count: st.count, doneToday: st.lastActiveDate === todayStr() };
  }

  function recordActivity() {
    const today = todayStr();
    const st = reconcile();
    if (st.lastActiveDate === today) return; // ya contaba por hoy
    const yesterday = addDays(today, -1);
    const count = st.lastActiveDate === yesterday ? st.count + 1 : 1;
    Store.updateSettings({ streak: { count, lastActiveDate: today } });
  }

  return { status, recordActivity };
})();
