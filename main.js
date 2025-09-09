console.log('4', 5, true, c);

test(1);

let x = 1;
const y = x;
var c = 3;

if (true) {
  x = 2;
}

function test(arg1) {
  let x = 3;
  console.log(x, arg1);
}

const func = function (a, b) {
  console.log(a + b);
};

const arrow = (a, b) => console.log(a + b);

const arrow2 = (a, b) => {
  console.log(a + b);
};

function math2() {
  const btn = document.querySelector('#btn');
  const input = document.getElementById('text');
  const resNode = document.getElementById('result');
  const value = input.value;

  function handler() {
    resNode.textContent = value;
  }

  btn.addEventListener('click', handler);
}

function math() {
  const btn = document.querySelector('#btn');
  const input = document.getElementById('text');
  const resNode = document.getElementById('result');

  btn.addEventListener('click', function () {
    const value = input.value;
    console.log(value);

    resNode.textContent = value;
  });
}

math();
