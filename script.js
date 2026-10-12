"use strict";
// A página e os links sociais funcionam também sem JavaScript.
for (const card of document.querySelectorAll("[data-project]")) {
  const value = window.PORTFOLIO_CONFIG?.projects?.[card.dataset.project];
  if (typeof value !== "string" || !value.trim()) continue;
  let url;
  try { url = new URL(value.trim()); } catch { continue; }
  if (!["https:", "http:"].includes(url.protocol)) continue;
  const link = document.createElement("a");
  for (const attribute of card.attributes) link.setAttribute(attribute.name, attribute.value);
  link.href = url.href;
  link.append(...card.childNodes);
  link.querySelector("[data-link-label]").textContent = "Conhecer projeto";
  card.replaceWith(link);
}
