export function contentWidth(el) {
  const style = window.getComputedStyle(el, null)
  const pleft = Number(style.getPropertyValue('padding-left').replace('px', ''))
  const pright = Number(style.getPropertyValue('padding-right').replace('px', ''))

  return el.clientWidth - pleft - pright
}

export function contentHeight(el) {
  const style = window.getComputedStyle(el, null)
  const ptop = Number(style.getPropertyValue('padding-top').replace('px', ''))
  const pbot = Number(style.getPropertyValue('padding-bottom').replace('px', ''))

  return el.clientHeight - ptop - pbot
}

export function contentSize(el) {
  return { width: contentWidth(el), height: contentHeight(el) }
}
