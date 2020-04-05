const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const balloon = document.querySelectorAll('.balloon');
const balloonHbd = document.querySelectorAll('.hbd');
const message = document.getElementById('message');

let counter = 0;

balloon.forEach((balloon) => {
  balloon.addEventListener('click', () => {
    counter++;
    balloon.style.background = '#111';
    balloon.innerHTML = 'POP!';
    bdayMessage(); 
  });
});

function bdayMessage() {
  if (counter === 10) {
    message.style.color = 'palegoldenrod';
    balloon.forEach((balloon) => {
      balloon.innerHTML = 'HAPPY!';
    })
  } else if (counter === 20) {
    message.style.color = 'lightblue';
    balloon.forEach((balloon) => {
      balloon.innerHTML = 'Fucking';
    });
  } else if (counter === 30) {
    message.style.color = 'lavender';
    message.innerHTML = 'Happy Birthday!';
    message.style.color = 'turquoise';
    balloon.forEach((balloon) => {
      balloon.innerHTML = 'BIRTHDAY!';
    });
  } else if (counter === 31) {
    message.style.color = 'pink';
    balloonHbd.forEach((balloonHbd) => {
      balloonHbd.innerHTML = '🎉';
    });
  } else if (counter > 31) {
    message.style.color = 'turquoise';
    balloon.forEach((balloon) => {
      balloon.style.display = 'none';
    });
  }
};
