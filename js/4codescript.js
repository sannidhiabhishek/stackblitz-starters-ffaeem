jQuery(document).ready(function ($) {
  $(document).ready(function () {
    var enterCode = '';
    enterCode.toString();
    var getattemptnumberdata = localStorage.getItem('LockBaseAttemptNumber');
    var correctattempt = getattemptnumberdata;
    var attemptcounter = 0;

    $('#numbers button').click(function () {
      var clickedNumber = $(this).text().toString();
      var enteredNumberString = clickedNumber;
      switch (enteredNumberString) {
        case '2A B C':
          enterCode = enterCode + '2';
          break;
        case '3D E F':
          enterCode = enterCode + '3';
          break;
        case '4G H I':
          enterCode = enterCode + '4';
          break;
        case '5J K L':
          enterCode = enterCode + '5';
          break;
        case '6M N O':
          enterCode = enterCode + '6';
          break;
        case '7P Q R S':
          enterCode = enterCode + '7';
          break;
        case '8T U V':
          enterCode = enterCode + '8';
          break;
        case '9W X Y Z':
          enterCode = enterCode + '9';
          break;
        default:
          enterCode = enterCode + clickedNumber;
      }
      var lengthCode = parseInt(enterCode.length);
      lengthCode--;
      $('#fields .numberfield:eq(' + lengthCode + ')').addClass('active');

      if (lengthCode == 3) {
        // Check the PIN
        if (attemptcounter == correctattempt - 1) {
          // Right PIN!
          $('#fields .numberfield').addClass('right');
          $('#numbers').addClass('hide');
          //$('#anleitung p').html('Amazing!<br>You entered the correct Code!');
          attemptcounter++;
          console.log('exit');
        } else {
          // Wrong PIN!
          $('#fields').addClass('miss');
          enterCode = '';
          setTimeout(function () {
            $('#fields .numberfield').removeClass('active');
          }, 200);
          setTimeout(function () {
            $('#fields').removeClass('miss');
          }, 500);
          //$('#anleitung p').html(
          //  '<strong>Enter Passcode</strong><br /> <span style="color:red;">Wrong passcode</span>'
          //);
          attemptcounter++;
        }
      } else {
      }
    });
    $('#restartbtn').click(function () {
      enterCode = '';
      $('#fields .numberfield').removeClass('active');
      $('#fields .numberfield').removeClass('right');
      $('#numbers').removeClass('hide');
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
        halfweekday[currentDay] +
        ', ' +
        currentDate +
        ' ' +
        month[currentMonth];
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
      /*$('#anleitung p').html(
        '<strong>Please enter the correct PIN-Code.</strong><br> It is: 1234 / Also try a wrong code'
      );*/
      document.getElementById('locked').style.zIndex = '10000';
      //document.getElementById('locked').style.top = '0%';
    });
  });
});
