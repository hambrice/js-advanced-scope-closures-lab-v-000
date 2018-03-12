function produceDrivingRange(range) {
  return function (beginning, end) {
    let distance = Math.abs(Number(end.slice(0,2)) - Number(beginning.slice(0,2)))
    if (range > distance) {
      return `within range by ${range - distance}`
    } else {
      return `${distance - range} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function (fare) {
    return fare * tipPercent
  }
}
