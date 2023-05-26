function operaciones() {
    let num1, num2, sum, res, mul, div
    num1 = parseInt(document.getElementById('numero1').value)
    num2 = parseInt(document.getElementById('numero2').value)
    sum = num1 + num2
    res = num1 - num2
    mul = num1 * num2

    if (num2 !== 0) {
        div = num1 / num2
        alert("La suma es: " + sum +
              "\nLa resta es: " + res +
              "\nLa multiplicación es: " + mul +
              "\nLa división es: " + div)
      } else {
        alert("No es posible dividir entre cero.")
      }
}
  