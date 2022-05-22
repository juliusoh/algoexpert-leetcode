function getNthFib(n) {
  if (n === 2 ) {
    return 1
  } else if ( n === 1) {
    return 0
  } else {
    const one = getNthFib(n - 1)
    const two = getNthFib(n - 2)
    return one + two
  }}

  getNthFib(3)