/* Repaso espaciado (SM-2 simplificado).
   Notas de calidad (grade): 0 = otra vez, 1 = difícil, 2 = bien, 3 = fácil */
const SRS = (function () {
  const DAY = 86400000;

  function now() { return Date.now(); }

  function isDue(card) {
    return !card || !card.due || card.due <= now();
  }

  function schedule(prev, grade) {
    let ease = prev && prev.ease ? prev.ease : 2.5;
    let interval = prev && prev.interval ? prev.interval : 0; // en días
    let reps = prev && prev.reps ? prev.reps : 0;

    if (grade === 0) {
      // Otra vez: vuelve a la cola en ~10 minutos.
      ease = Math.max(1.3, ease - 0.2);
      return { ease, interval: 0, reps: 0, due: now() + 10 * 60000, last: now() };
    }

    reps += 1;
    if (grade === 1) ease = Math.max(1.3, ease - 0.15);
    if (grade === 3) ease = ease + 0.15;

    if (reps === 1) interval = grade === 3 ? 3 : 1;
    else if (reps === 2) interval = grade === 3 ? 6 : 3;
    else interval = Math.round(interval * ease * (grade === 1 ? 0.8 : 1));

    if (interval < 1) interval = 1;
    return { ease, interval, reps, due: now() + interval * DAY, last: now() };
  }

  function dueInLabel(card) {
    if (!card || !card.due) return "nuevo";
    const diff = card.due - now();
    if (diff <= 0) return "para repasar";
    const days = Math.ceil(diff / DAY);
    if (days <= 1) return "en 1 día";
    return "en " + days + " días";
  }

  return { isDue, schedule, dueInLabel, now };
})();
