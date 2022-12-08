let arr = [1, 1, 1, 2, 4, 0, "z", "d", 0, 3, 6], x = 0, y = 0, z = 0;
function EvenOrOdd() { 
  for (let i = 0; i <= arr.length - 1; i +=1) {
    if (typeof(arr[i]) == 'number') {
      if (arr[i] % 2 === 0 && arr[i] !== 0) {
        x += 1;
      }
      else if (arr[i] === 0) {
        z += 1;
      }
    else {
      y += 1;
    }
  }
}
  console.log(`количество четных - ${x}, нечетных - ${y}, нулей - ${z}`);
}
EvenOrOdd()