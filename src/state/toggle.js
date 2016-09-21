export const state = {
  toggled: false,
}

export function onClick(event, prevState) {
  return { toggled: !prevState.toggled }
}
