const directions = {
  right: 90,
  down: 180,
  left: -90,
}

export const rotate = (values, width, height) => {
  const target = Object.keys(values).filter(key => values[key]).shift()

  if (target) {
    return `rotate(${directions[target]} ${width / 2} ${height / 2})`
  }

  return null
}
