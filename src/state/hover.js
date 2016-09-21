export const state = {
  hover: false,
}

export function onMouseEnter() {
  return { hover: true }
}

export function onMouseLeave() {
  return { hover: false }
}
