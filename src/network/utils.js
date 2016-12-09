const projection = d => [d.x, d.y]

export const diagonal = (p0, p3) => {
  const m = (p0.y + p3.y) / 2
  const p = [p0, { x: p0.x, y: m }, { x: p3.x, y: m }, p3]
  const [x0, y0, x1, y1] = p.map(projection)

  return `M${x0}C${y0} ${x1} ${y1}`
}
