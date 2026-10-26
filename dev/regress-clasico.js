/* Red de seguridad del modo Clásico (herramienta de desarrollo, no la usa la app).
   Recorre Inicio, Gramática (español y alemán), Producción y Vocabulario con
   respuestas fijas y azar controlado, y guarda una "huella" de cada pantalla.

   Uso (en la consola del navegador, con la app abierta y la página recién cargada):
     1) Antes de tocar nada:   regress('save')      -> guarda las huellas en localStorage
     2) Después del cambio:    recargar la página y  regress('compare')
        "distintos: 0" = el modo Clásico quedó idéntico.
   Hay que recargar la página antes de cada corrida, porque Vocabulario recuerda en
   memoria la última pestaña usada.
   Si un cambio es a propósito (ej: se agregan palabras), correr 'save' de nuevo. */
function regress(mode) {
  var seed = 42;
  var realRandom = Math.random;
  Math.random = function () { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16); }
  var out = [];
  function snap(label, el) { out.push(label + ':' + hash(el.innerHTML)); }
  function btn(txt) {
    var all = document.querySelectorAll('button');
    for (var i = 0; i < all.length; i++) if (all[i].textContent === txt && !all[i].classList.contains('hidden')) return all[i];
    throw new Error('no hay boton ' + txt);
  }
  function stripAccents(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function answerFill(host, ex, i) {
    var inp = host.querySelector('.text-input');
    var m = i % 4;
    inp.value = m === 1 ? 'zzz' : m === 2 ? stripAccents(ex.answer) : ex.answer;
    if (i % 3 === 0) inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    else btn('Corregir').click();
  }
  function runGrammar(data, prefix) {
    var host = document.querySelector('#view-gramatica .view-body');
    showView('gramatica');
    snap(prefix + '-list', host);
    for (var t = 0; t < data.length; t++) {
      showView('gramatica');
      document.querySelectorAll('.topic-card')[t].click();
      snap(prefix + t + '-topic', host);
      btn('Empezar ejercicios').click();
      var exs = data[t].exercises;
      for (var i = 0; i < exs.length; i++) {
        snap(prefix + t + '.' + i + '-q', host);
        if (host.querySelector('.text-input')) answerFill(host, exs[i], i);
        else { var opts = host.querySelectorAll('.btn.option'); opts[i % opts.length].click(); }
        snap(prefix + t + '.' + i + '-a', host);
        btn('Siguiente').click();
      }
      snap(prefix + t + '-fin', host);
    }
    showView('gramatica');
    snap(prefix + '-list2', host);
  }
  function runProd() {
    showView('produccion');
    var host = document.querySelector('#view-produccion .view-body');
    for (var round = 0; round < 2; round++) {
      for (var i = 0; i < PRODUCCION.length; i++) {
        snap('p' + round + '.' + i + '-q', host);
        if (i === 1) { btn('Ver respuesta').click(); snap('p' + round + '.' + i + '-rev', host); }
        answerFill(host, PRODUCCION[i], i + round);
        snap('p' + round + '.' + i + '-a', host);
        btn('Siguiente').click();
      }
      snap('p' + round + '-fin', host);
      if (round === 0) btn('De nuevo').click();
    }
  }
  function runVocab() {
    showView('vocabulario');
    var host = document.querySelector('#view-vocabulario .view-body');
    for (var step = 0; step < 40; step++) {
      if (step % 10 === 5) { host.querySelectorAll('.filter-tab')[((step / 10) | 0) % 3].click(); snap('v' + step + '-tab', host); }
      if (step % 13 === 12) { showView('home'); showView('vocabulario'); snap('v' + step + '-back', host); }
      if (!host.querySelector('.term')) continue;
      snap('v' + step + '-q', host);
      btn('Mostrar').click();
      snap('v' + step + '-r', host);
      btn(step % 3 === 0 ? 'Otra vez' : 'La sé').click();
    }
    snap('v-fin', host);
    out.push('store-srs:' + hash(JSON.stringify(Store.allSrs())));
    out.push('store-vsession:' + hash(JSON.stringify(Store.vocabSession())));
  }
  try {
    Store.reset();
    Store.updateSettings({ name: 'Kata', learningLang: 'es' });
    var hh = document.querySelector('#view-home .view-body');
    showView('home'); snap('home-0', hh);
    runGrammar(GRAMMAR, 'g');
    runProd();
    runVocab();
    showView('home'); snap('home-1', hh);
    out.push('store-grammar:' + hash(JSON.stringify(Store.state().grammar)));
    out.push('store-prod:' + hash(JSON.stringify(Store.state().produccion)));
    out.push('streak-count:' + Store.settings().streak.count);
    Store.updateSettings({ learningLang: 'de' });
    runGrammar(GRAMMAR_DE, 'de');
    out.push('store-grammar-de:' + hash(JSON.stringify(Store.state().grammar)));
    Store.updateSettings({ learningLang: 'es' });
  } catch (e) { out.push('ERROR:' + e.message); }
  Math.random = realRandom;
  var errores = out.filter(function (x) { return x.indexOf('ERROR') === 0; });
  if (mode === 'save') {
    localStorage.__regress_before = JSON.stringify(out);
    return { guardadas: out.length, errores: errores };
  }
  var before = JSON.parse(localStorage.__regress_before || '[]');
  var distintos = [];
  for (var k = 0; k < Math.max(before.length, out.length); k++) if (before[k] !== out[k]) distintos.push({ antes: before[k], ahora: out[k] });
  return { antes: before.length, ahora: out.length, distintos: distintos.length, primeros: distintos.slice(0, 6), errores: errores };
}
