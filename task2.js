let num = +prompt('введите число не более 1000');
function IsPrimeNumber(num) {
  if (num <= 1000 && isNaN(num) === false && num !== 0 && num !== 1) {
    let count = 0, i = num;
    while (i > 0) {
      if (count === 3) {
        break;
      }
      if (num % i === 0) {
        count += 1;
      }
      i -= 1;
    }
    if (count === 2) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (num === 1) {
    return true;
  }
  else {
    return alert('введены неверные данные')
  }
}
let x = IsPrimeNumber(num)
if (x === true) {
  alert('число простное');
}
else if (x === false) {
  alert('число сложное');
}