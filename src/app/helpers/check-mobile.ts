export function checkMobile() {
  let isMobile: boolean = false;
  isMobile = window.innerWidth <= 768 ? true : false;
  return isMobile;
}