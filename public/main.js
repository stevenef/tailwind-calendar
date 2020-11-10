window.onload = function () {
    console.log('Dokument geladen');
    var days = getDaysArray(2021,2);
    viewDays(days);
}


var viewDays = function(days) {
    document.getElementById("calendarium").innerHTML = "";
    // for (var i=0; i<days.length; i++) {
    //     dayList = '<li>' + days[i] + '</li>';
    //     document.getElementById("calendarium").innerHTML += dayList;
    // }
    var a = 1;
    while(a < days.length) {
        dayList = '<li>' + a + ' -- ' + days[a] + '</li>';
        document.getElementById("calendarium").innerHTML += dayList;
        a++;
    }
}

var getDaysArray = function(year, month) {
    var monthIndex = month - 1; // 0..11 instead of 1..12
    var names = [ 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' ];
    var date = new Date(year, monthIndex, 1);
    var result = [];
    var days = [];
    while (date.getMonth() == monthIndex) {
      result.push(date.getDate() + '-' + names[date.getDay()]);
      days[date.getDate()] = names[date.getDay()];
      date.setDate(date.getDate() + 1);
      
    }
    console.log(days);
    return days;
  }