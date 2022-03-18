export const pipe =
  (...fns) =>
  y =>
    fns.reduce((x, f) => f(x), y)

export const runAll =
  (...fns) =>
  x =>
    fns.forEach(f => f(x))
