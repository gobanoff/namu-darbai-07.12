function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 0 Uzduotis

let i = 0;
let rez = "";
while (i < 400) {
  if (i % 50 === 0) rez += "\n";
  rez += "*";
  i++;
}
document.getElementById("sign").innerText = rez;

// 1 Uzduotis

let a = rand(1, 6);
console.log(a);

if (a === 1) {
  document.getElementById("one").innerText = a;
} else if (a === 2) {
  document.getElementById("two").innerText = a;
} else if (a === 3) {
  document.getElementById("three").innerText = a;
} else if (a === 4) {
  document.getElementById("four").innerText = a;
} else if (a === 5) {
  document.getElementById("five").innerText = a;
} else if (a === 6) {
  document.getElementById("six").innerText = a;
}

// 2 Uzduotis

let y = rand(-10, 10);
let x = rand(-10, 10);
let z = rand(-10, 10);
console.log(y, x, z);
document.getElementById("num1").innerText = y;
document.getElementById("num2").innerText = x;
document.getElementById("num3").innerText = z;

if (y < 0) {
  let num1 = document.getElementById("num1");
  num1.style.color = "green";
} else if (y === 0) {
  let num1 = document.getElementById("num1");
  num1.style.color = "red";
} else if (y > 0) {
  let num1 = document.getElementById("num1");
  num1.style.color = "blue";
}
if (x < 0) {
  let num2 = document.getElementById("num2");
  num2.style.color = "green";
} else if (x === 0) {
  let num2 = document.getElementById("num2");
  num2.style.color = "red";
} else if (x > 0) {
  let num2 = document.getElementById("num2");
  num2.style.color = "blue";
}
if (z < 0) {
  let num3 = document.getElementById("num3");
  num3.style.color = "green";
} else if (z === 0) {
  let num3 = document.getElementById("num3");
  num3.style.color = "red";
} else if (z > 0) {
  let num3 = document.getElementById("num3");
  num3.style.color = "blue";
}

// 3 Uzduotis

let b = "An American in Paris";
let c = "Breakfast at Tiffany's";
let d = "2001: A Space Odyssey";
let e = "It's a Wonderful Life";
const f = /[aouyei]/gi;

console.log(b.replaceAll(f, " "));
console.log(c.replaceAll(f, " "));
console.log(d.replaceAll(f, " "));
console.log(e.replaceAll(f, " "));

// 4 Uzduotis

i = 0;
let digit = "  ";
let nr;
let sum = 0;
while (i <= 300) {
  let nr = rand(0, 300);

  if (nr > 150) {
    sum++;
  }
  if (nr > 275) {
    digit += `<span style="color: red;">` + nr + `</span> `;
  } else {
    digit += nr + "  ";
  }

  i++;
}

console.log(digit);
console.log("kiekis", sum);
document.getElementById("numb").innerHTML = digit;

// 5 Uzduotis

i = 1;
let day = "";

while (i <= 3000) {
  if (i % 77 === 0) {
    day += i + ",";
  }
  i++;
}
day = day.slice(0, -1);
console.log(day);
document.getElementById("seven").innerText = day;
