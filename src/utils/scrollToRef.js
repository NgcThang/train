export function scrollToRef(ref) {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop - 80, // trừ header cao ~80px
      behavior: 'smooth'
    })
  }
}



