
function showDate(){
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Tuesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = 'Today is ' + days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + ".";

    document.getElementById('date-text').innerHTML = date;

};

showDate();