/* Helpers compartidos de UI. */

// Mini "hyperscript": crea un elemento. attrs especiales: class, text, html, onClick, etc.
function h(tag, attrs, children) {
  const node = document.createElement(tag);
  if (attrs) {
    for (const k in attrs) {
      const val = attrs[k];
      if (val == null || val === false) continue;
      if (k === "class") node.className = val;
      else if (k === "text") node.textContent = val;
      else if (k === "html") node.innerHTML = val;
      else if (k.slice(0, 2) === "on" && typeof val === "function")
        node.addEventListener(k.slice(2).toLowerCase(), val);
      else node.setAttribute(k, val);
    }
  }
  if (children != null) {
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c == null || c === false) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
  }
  return node;
}

function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

// Normaliza para comparar respuestas: ignora mayúsculas, espacios y acentos.
function norm(s) {
  return (s || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Convierte "texto con ___" en un nodo con el hueco resaltado.
function promptHtml(text) {
  const wrap = h("span");
  const parts = String(text).split("___");
  parts.forEach((p, idx) => {
    wrap.appendChild(document.createTextNode(p));
    if (idx < parts.length - 1) wrap.appendChild(h("span", { class: "blank" }, "____"));
  });
  return wrap;
}

function showFeedback(container, ok, answer, explain) {
  clear(container);
  container.className = "feedback " + (ok ? "ok" : "no");
  container.appendChild(
    h("div", { class: "fb-head" }, ok ? "✓ ¡Correcto!" : "✗ Casi… la respuesta es: " + answer)
  );
  if (explain) container.appendChild(h("div", { class: "fb-explain" }, explain));
}

function backBtn(onClick) {
  return h("button", { class: "back-link", onClick }, "← Volver");
}
