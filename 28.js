class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;
    const operations = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "/": (a, b) => a / b,
      "*": (a, b) => a * b,
      "%": (a, b) => a % b,
    };

    const confirmOperation = confirm(`Виконати операцію ${X} ${znak} ${Y}?`);

    if (confirmOperation) {
      const operation = operations[znak];
      if (operation) {
        const result = operation(X, Y);
        console.log(`Результат: ${X} ${znak} ${Y} = ${result}`);
      } else {
        console.log("Некоректний знак операції.");
        this.input();
      }
    } else {
      this.input();
    }
  }

  input() {
    const X = parseFloat(prompt("Введіть число X:"));
    const Y = parseFloat(prompt("Введіть число Y:"));
    const znak = prompt("Введіть знак операції (+, -, /, *, %):");

    if (isNaN(X) || isNaN(Y) || !this.isValidOperation(znak)) {
      console.log("Некоректні введені дані. Спробуйте ще раз.");
      this.input();
    } else {
      this.check({ X, Y, znak });
    }
  }

  isValidOperation(znak) {
    const validOperations = ["+", "-", "/", "*", "%"];
    return validOperations.includes(znak);
  }
}

const p = new SuperMath();
p.check({ X: 12, Y: 3, znak: "/" });