//Bài 1
function calculateFactorial(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(calculateFactorial(5));

//Bài 2
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("Hello"));

//Bài 3
function translate(str) {
  let result = "";
  switch (str) {
    case "EN":
      return "Hello!";
    case "FR":
      return "Bonjour!";
    case "DE":
      return "Guten Tag!";
    case "JP":
      return "こんにちは (Konnichiwa)";
    case "KR":
      return " 안녕하세요 (Annyeonghaseyo)";
    default:
      return "Xin chào!";
  }
}
console.log(translate("FR"));

//Bài 4
function subString(str) {
    if (str.length <= 15) {
        return "Chuỗi phải lớn hơn 15 ký tự";
    }
    else {
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += str[i];
        }
        return result + "...";
    }
}
console.log(subString('xinchaocacbandenvoiTechmaster'));