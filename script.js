const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const balloon = document.querySelectorAll('.balloon');
const message = document.getElementById('message');

let counter = 0;

balloon.forEach((balloon) => {
  balloon.addEventListener('click', () => {
    counter++;
    bdayMessage(); 
    balloon.style.background = '#111';
    balloon.innerHTML = 'POP!';
    console.log('counter'); 
  });
});

function bdayMessage() {
  if (counter === 10) {
    balloon.forEach((balloon) => {
      balloon.innerHTML = 'HAPPY!';
    })
  } else if (counter === 20) {
    balloon.forEach((balloon) => {
      balloon.innerHTML = '50th';
    });
  } else if (counter === 30) {
    message.innerHTML = 'Happy Birthday!';
    message.style.color = 'turquoise';
    balloon.forEach((balloon) => {
      balloon.innerHTML = 'BIRTHDAY!';
    });
  } else if (counter > 31) {
    message.style.color = 'hotpink';
    message.innerHTML = 'Birthday 50th Birthday!';
    balloon.forEach((balloon) => {
      balloon.style.display = 'none';
    });
  }
};
