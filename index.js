function produceDrivingRange(blockRange) {
  return function(first, second) {
    first = parseInt(first);
    second = parseInt(second);
    distance = second - first;
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return tip * fare
  }
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}



















// function produceDrivingRange(range) {
//   return function (beginning, end) {
//     let distance = Math.abs(Number(end.slice(0,2)) - Number(beginning.slice(0,2)))
//     if (range > distance) {
//       return `within range by ${range - distance}`
//     } else {
//       return `${distance - range} blocks out of range`
//     }
//   }
// }
//
// function produceTipCalculator(tipPercent) {
//   return function (fare) {
//     return fare * tipPercent
//   }
// }
