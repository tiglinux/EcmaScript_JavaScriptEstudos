//número é divísivel por  3 = fizz
//divisível por 5  = Buzz

var divisivel = num => {
  if (typeof num == "number") {
    console.log("é um número");
    if (num >= 0 && num <= 100) {
      if (num % 3 == 0) {
        console.log("fizz");
      }
      if (num % 5 == 0) {
        console.log("Buzz");
      } else {
        if (num % 3 == 0 || num % 5 == 0) {
          console.log("fizzBuzz");
        }
      }
    }
  } else {
    console.log("Não é um número!");
  }
};
divisivel();
