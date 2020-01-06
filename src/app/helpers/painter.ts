let colors: Array<string> = [
  "#b8ffa2",
  "#f85a45",
  "#feaac7",
  "#587cf9",
  "#41907a",
  "#56b8fd",
  "#c995ff",
  "#ffffa2",
  "#a4c3f6"
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
