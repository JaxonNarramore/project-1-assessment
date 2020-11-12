// This only works from the number one, otherwise it adds the number on itself from the input WHYY!!!

const plus = document.querySelector('#plus');

const minus = document.querySelector('#minus');

const display = document.querySelector('#displaynumber');

const input = document.querySelector('#input');

let num = 1;

display.innerHTML = `${input.value}`

function displayNum() {
    if (num < 0) {
    display.classList.add();
    display.classList.remove();
    } else if (num > 0) {
    display.classList.add();
    display.classList.remove();
    } else {
    display.classList.remove();
    }
};

function addNum() {
    return parseInt(input.value);
};

plus.addEventListener("click", function() {
    num += addNum();
    display.innerHTML = num;
    displayNum();
  });
  
minus.addEventListener("click", function() {
    num -= addNum();
    display.innerHTML = num;
    displayNum();
});
