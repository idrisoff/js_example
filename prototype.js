function calculator(string) {
    let arr = string.split(' ');
    let res;
    switch (arr[1]) {
            case '+':
                res = +arr[0] + +arr[2];
                break;
            case '-':
                res = +arr[0] - +arr[2];
                break;
            case '*':
                res = +arr[0] * +arr[2];
                break;
            case '/':
                res = +arr[0] / +arr[2];
                break;
    }
    
    return res;
}
var font_ar = [
    1,
    4,
    5,
    9,
    10,
    40,
    50,
    90,
    100,
  ];
  var font_rom = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
  ];

  function to_arab(text) {
    var text = text.toUpperCase();
    var rezult = 0;
    var posit = 0;
    var n = font_ar.length - 1;
    while (n >= 0 && posit < text.length) {
      if (text.substr(posit, font_rom[n].length) == font_rom[n]) {
        rezult += font_ar[n];
        posit += font_rom[n].length;
      } else n--;
    }
    return rezult;
  }