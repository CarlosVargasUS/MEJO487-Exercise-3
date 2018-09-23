
function showDate(){

    // first button
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Tuesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = 'Today is ' + days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + ".";
    document.getElementById('date-text').innerHTML = date;

};

showDate();

function showWeek(){
    // second button
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Tuesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    if( days[d.getDay()] == (("Sunday") || ("Saturday")))
    {
        document.getElementById("week-div").innerHTML = "It's the weekend!";
        document.getElementById("week-div").style.color = "red";
    }
    else{
        document.getElementById("week-div").innerHTML = "I wish it was the weekend.";
        document.getElementById("week-div").style.color = "blue";
    }

};