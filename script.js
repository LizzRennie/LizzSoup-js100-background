const balloon = document.querySelectorAll('.balloon');
const message = document.getElementById('message');
const name = document.getElementById('name');
const subBtn = document.getElementById('subBtn');

let counter = 0;

subBtn.addEventListener('click', submit);

function submit() {
  const container = document.querySelector('.container');
  const form = document.getElementById('form');
  container.classList.remove('hidden');
  form.classList.add('hidden');
  console.log('it worked' + form + container);
}

balloon.forEach((balloon) => {
  balloon.addEventListener('click', () => {
    bdayMessage(); 
    counter++;
    balloon.style.background = '#111';
    balloon.innerHTML = 'POP!';
    console.log('counter'); 
  });
});

function bdayMessage() {
  const hbd = document.querySelectorAll('.hbd');
  let bdayName = name.value;
  if (counter === 10) {
    balloon.forEach((balloon) => {
      balloon.innerHTML = 'HAPPY!';
    })
  } else if (counter === 20) {
    balloon.forEach((balloon) => {
      balloon.innerHTML = 'Birthday';
    });
  } else if (counter === 29) {
    message.innerHTML = `Happy Birthday ${bdayName}!`;
    message.style.color = 'turquoise';
    balloon.forEach((balloon) => {
      balloon.innerHTML = `🥳`;
    });
    hbd.forEach((hbd) => {
      hbd.innerHTML = 'HBD! 🎉';
    });
  } else if (counter === 30) {
    message.style.color = 'hotpink';
    message.innerHTML = `Time to celebrate! 🎉`;
    balloon.forEach((balloon) => {
      balloon.style.display = 'none';
    });
  }
};
