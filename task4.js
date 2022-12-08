function RowNumber(x, y) {
    setInterval(function () {
    if (x <= y) {
      console.log(x)
    }
    x += 1}, 1000, x, y)
                
  }
  RowNumber(5, 15)
  