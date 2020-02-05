let colors: Array<string> = [
  "#00fca2",
  "#ff0f0f",
  "#fc6800",
  "#4d73f7",
  "#ffff57",
  "#09e7e7",
  "#56b8fd",
  "#1f9c79",
  "#9836d9",
  "#d20a82"
];

export function painter(target, action, initialColor) {
  if (window.innerWidth < 768) return;
  if (action === "mouseenter") {
    target.style.color = colors[Math.floor(Math.random() * colors.length)];
  } else if (action === "mouseleave") {
    target.style.color = initialColor;
  }
  return;
}
