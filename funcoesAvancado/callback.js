function rand(min = 1001, max = 3) {}

function f1(callback) {
  if (callback) callback();
}
function f2(callback) {
  setTimeout(function() {
    console.log("Olá mundo1!");
  }, 1000);
}

function f3(callback) {
  setTimeout(function() {
    console.log("Olá mundo2!");
  }, 500);
}
// o f1 é um função que possue outra função dentro.. função de callback.
f1(function() {
  f3();
});
f3();
f2();
