export function noScrollBody(val) {
  val
    ? (document.querySelector('body').style.overflow = 'hidden')
    : (document.querySelector('body').style.overflow = 'initial');
}