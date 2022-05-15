// const skills = document.querySelector('.our-skills');
// const stats = document.querySelector('.stats');
// const skillsSpans = document.querySelectorAll('.the-progress span');
// const statsSpans = document.querySelectorAll('.stats .number');
// let started = false;

// window.onscroll = () => {
//   if (window.scrollY >= skills.offsetTop - 200) {
//     skillsSpans.forEach((skillsSpan) => {
//       skillsSpan.style.width = skillsSpan.dataset.width;
//     });
//   }
//   if (window.scrollY >= stats.offsetTop - 350) {
//     if (!started) {
//       statsSpans.forEach((statSpan) => startCount(statSpan));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   const goal = el.dataset.goal;
//   const counter = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(counter);
//     }
//   }, 2000 / goal);
// }

// const daysLeft = document.querySelector('.events .days');
// const hoursLeft = document.querySelector('.events .hours');
// const minutesLeft = document.querySelector('.events .min');
// const secondsLeft = document.querySelector('.events .sec');
// // const time = Date.now();
// const Timer = setInterval(() => {
//   const destinationTime = new Date('6 30 2022 23:59:59').getTime();
//   const timeDiff = destinationTime - Date.now();
//   const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//   // const leftOfDays = timeDiff % (1000 * 60 * 60 * 24);
//   // const hours = Math.floor(leftOfDays / (1000 * 60 * 60));
//   const hours = Math.floor(
//     (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   // const leftOfHours = leftOfDays % (1000 * 60 * 60);
//   // const min = Math.floor(leftOfHours / (1000 * 60));
//   const min = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
//   // const leftOfMin = leftOfHours % (1000 * 60);
//   // const sec = Math.floor(leftOfMin / 1000);
//   const sec = Math.floor((timeDiff % (1000 * 60)) / 1000);

//   daysLeft.textContent = days <= 10 ? `0${days}` : days;
//   hoursLeft.textContent = hours <= 10 ? `0${hours}` : hours;
//   minutesLeft.textContent = min <= 10 ? `0${min}` : min;
//   secondsLeft.textContent = sec <= 10 ? `0${sec}` : sec;
// }, 1000);

// Getting Constants
// Our Skills const's
const ourSkills = document.querySelector('.our-skills');
const skillsSpans = document.querySelectorAll('.the-progress span');

// Stats Const's
const stats = document.querySelector('.stats');
const statsSpans = document.querySelectorAll('.stats .number');
// Checking Condition for countDown Function
let started = false;

// Events Const's
const daysSpan = document.querySelector('.events .days');
const hoursSpan = document.querySelector('.events .hours');
const minutesSpan = document.querySelector('.events .min');
const secondsSpan = document.querySelector('.events .sec');

// Starting Scroll Function
window.onscroll = () => {
  if (window.scrollY >= ourSkills.offsetTop - 150) {
    skillsSpans.forEach((skillSpan) => {
      skillSpan.style.width = skillSpan.dataset.width;
    });
  }
  if (window.scrollY >= stats.offsetTop - 200) {
    if (!started) {
      statsSpans.forEach((statSpan) => {
        countDown(statSpan);
      });
      started = true;
    }
  }
};

// Counting Function
const countDown = (el) => {
  let goal = el.dataset.goal;
  const counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 1500 / goal);
};

// Start Event Function
const eventCountDown = setInterval(() => {
  const destinationTime = new Date('6 30 2022 23:59:59').getTime();
  const diffTime = destinationTime - Date.now();
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  // Adding Days & Hours & MInutes & Seconds To HTML
  daysSpan.textContent = days < 10 ? `0${days}` : days;
  hoursSpan.textContent = hours < 10 ? `0${hours}` : hours;
  minutesSpan.textContent = minutes < 10 ? `0${minutes}` : minutes;
  secondsSpan.textContent = seconds < 10 ? `0${seconds}` : seconds;
}, 10);
