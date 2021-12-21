let calculator = {
  a: 0,
  b: 0,
  read: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function (a, b) {
    a = this.a;
    b = this.b
    return a + b},
  mul: function (a, b) {
    a = this.a;
    b = this.b
    return a * b},
};
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
