function calcular() {
  const form = document.getElementById('main-form');
  const operation = document.getElementsByName('operation');

  let firstNumber = 0;
  let secondNumber = 0;
  let calculation = 0;

  form.addEventListener('submit', e => {
    e.preventDefault();

    firstNumber = Number(document.querySelector('input#firstNumber').value);
    secondNumber = Number(document.querySelector('input#secondNumber').value);

    if (operation[0].checked) {
      calculation = firstNumber + secondNumber
      document.querySelector(
        'span#result'
      ).innerHTML = `${firstNumber} + ${secondNumber} = ${calculation}`

    } else if (operation[1].checked) {
      calculation = firstNumber - secondNumber
      document.querySelector(
        'span#result'
      ).innerHTML = `${firstNumber} - ${secondNumber} = ${calculation}`

    } else if (operation[2].checked) {
      calculation = firstNumber * secondNumber
      document.querySelector(
        'span#result'
      ).innerHTML = `${firstNumber} * ${secondNumber} = ${calculation}`

    } else if (operation[3].checked) {
      calculation = Math.round((firstNumber / secondNumber))
      if (Number.isNaN(calculation)) {
        document.querySelector(
          'span#result'
        ).innerHTML = `${firstNumber} / ${secondNumber} = Indeterminacy`
      } else {
        document.querySelector(
          'span#result'
        ).innerHTML = `${firstNumber} / ${secondNumber} = ${calculation}`
      }
    }
  });
}


