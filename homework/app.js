document.write("Bilal Kuanysh Cs 2120<br \\/>");
let today = new Date();
document.write("Year : "+today.getFullYear()+"<br \\/>");
const days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
document.write( "Today is : "+days[today.getDay()]+"<br \\/>");
document.write( "Date : "+today.getDate()+"<br \\/>");
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.write( "Month : "+month[today.getMonth()]+"<br \\/>");
(function () {
    function time(i) {
        return (i < 10) ? "0" + i : i;
    }

    function Time() {
        let today = new Date(),
            hour = time(today.getHours()),
            minute = time(today.getMinutes()),
            second = time(today.getSeconds());
        document.write("Current time is : "+ hour + ":" + minute + ":" + second+"<br \\/>");
    }
    Time();
})();
let date = new Date("06/30/2024");
let timeDifference = date.getTime() - today.getTime();
let DaysBetween = timeDifference / (1000 * 60* 60 * 24);

document.write( DaysBetween  + " days left until the freedom! ");

function Multiply(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = num1 * num2;
}
function Divide(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = num1 / num2;
}
