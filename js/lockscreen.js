//Date and time
const d = new Date();
let currentDay = d.getDay();
let currentDate = d.getDate();
let currentMonth = d.getMonth();
let currentHour = d.getHours();
let currentMinute = d.getMinutes();
// Array of days.
let weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let halfweekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let formatedDate =
  halfweekday[currentDay] + ', ' + currentDate + ' ' + month[currentMonth];
switch (currentHour) {
  case 0:
    currentHour = '00';
    break;
  case 1:
    currentHour = '01';
    break;
  case 2:
    currentHour = '02';
    break;
  case 3:
    currentHour = '03';
    break;
  case 4:
    currentHour = '04';
    break;
  case 5:
    currentHour = '05';
    break;
  case 6:
    currentHour = '06';
    break;
  case 7:
    currentHour = '07';
    break;
  case 8:
    currentHour = '08';
    break;
  case 9:
    currentHour = '09';
    break;
  default:
    currentHour = currentHour;
}
switch (currentMinute) {
  case 0:
    currentMinute = '00';
    break;
  case 1:
    currentMinute = '01';
    break;
  case 2:
    currentMinute = '02';
    break;
  case 3:
    currentMinute = '03';
    break;
  case 4:
    currentMinute = '04';
    break;
  case 5:
    currentMinute = '05';
    break;
  case 6:
    currentMinute = '06';
    break;
  case 7:
    currentMinute = '07';
    break;
  case 8:
    currentMinute = '08';
    break;
  case 9:
    currentMinute = '09';
    break;
  default:
    currentMinute = currentMinute;
}
let formatedTime = currentHour + ':' + currentMinute;
document.getElementById('DateSection').innerHTML = formatedDate;
document.getElementById('TimeSection').innerHTML = formatedTime;

//Swipe Action
var gesture = {
    x: [],
    y: [],
    match: '',
  },
  tolerance = 100,
  output = document.getElementsByTagName('h1')[0];
window.addEventListener('touchstart', function (e) {
  e.preventDefault();
  for (var i = 0; i < e.touches.length; i++) {
    var dot = document.createElement('div');
    dot.id = i;
    dot.style.top = e.touches[i].clientY - 25 + 'px';
    dot.style.left = e.touches[i].clientX - 25 + 'px';
    document.body.appendChild(dot);
    gesture.x.push(e.touches[i].clientX);
    gesture.y.push(e.touches[i].clientY);
  }
});
window.addEventListener('touchmove', function (e) {
  e.preventDefault();
  for (var i = 0; i < e.touches.length; i++) {
    var dot = document.getElementById(i);
    dot.style.top = e.touches[i].clientY - 25 + 'px';
    dot.style.left = e.touches[i].clientX - 25 + 'px';
    gesture.x.push(e.touches[i].clientX);
    gesture.y.push(e.touches[i].clientY);
  }
});
window.addEventListener('touchend', function (e) {
  var dots = document.querySelectorAll('div'),
    xTravel = gesture.x[gesture.x.length - 1] - gesture.x[0],
    yTravel = gesture.y[gesture.y.length - 1] - gesture.y[0];
  if (xTravel < tolerance && xTravel > -tolerance && yTravel < -tolerance) {
    gesture.match = 'Swiped Up';
  }
  /* if (xTravel < tolerance && xTravel > -tolerance && yTravel > tolerance) {
    gesture.match = 'Swiped Down';
  }
  if (yTravel < tolerance && yTravel > -tolerance && xTravel < -tolerance) {
    gesture.match = 'Swiped Left';
  }
  if (yTravel < tolerance && yTravel > -tolerance && xTravel > tolerance) {
    gesture.match = 'Swiped Right';
  }*/
  if (gesture.match !== '') {
    //output.innerHTML = gesture.match;
    console.log(gesture.match);
    document.getElementById('locked').style.zIndex = '-1';
    //document.getElementById('locked').style.top = '-100%';
    output.style.opacity = 1;
  }
  setTimeout(function () {
    output.style.opacity = 0;
  }, 500);
  gesture.x = [];
  gesture.y = [];
  gesture.match = xTravel = yTravel = '';
  for (i = 0; i < dots.length; i++) {
    dots[i].id = '';
    dots[i].style.opacity = 0;
    setTimeout(function () {
      document.body.removeChild(dots[i]);
    }, 1000);
  }
});
