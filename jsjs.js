function myFunction() {
  var p = document.getElementById("mydata");

  p.innerHTML = getDateInCustomizedFormat();
}

function getDateInCustomizedFormat() {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var d = new Date();
  var dayOfWeek = d.getDay();
  var month = d.getMonth();
  var day = d.getDate();
  var year = d.getFullYear();
  var hour = d.getHours();
  var min = d.getMinutes();

  if(min <= 9) min = "0" + min;
  if(hour <= 9) hour = "0" + hour;

  var result = "It's " + hour + ":" + min + "." + "Today is " + days[dayOfWeek] + "(" + months[month] + ", "  + day + ", " + year + ")";
  return result;
}