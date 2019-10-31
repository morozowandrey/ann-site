export function scrollTo(
  destinationNode
) {
  let destination = document.getElementById(destinationNode);
  if (!destination) return;

  let offsetTop = destination.offsetTop;
  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
}