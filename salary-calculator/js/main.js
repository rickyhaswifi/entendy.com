var salaryInput = document.getElementById('salaryInput');
var salaryOutput = document.getElementById('salaryOutput');
var salaryAOutput = document.getElementById('salaryAOutput');
var form = document.getElementById('salaryFormResult'); 
var mathBreakDown = document.getElementById('mathBreakDown');
var mathABreakDown = document.getElementById('mathABreakDown');

form.addEventListener('submit',function(event){
    // if (!salaryInput.value || "")
    // {alert("Please Enter A Number");} else {
    var x = parseFloat(salaryInput.value);
 
    var result = x * 40;
    var percent = result * 52;
    var adjustments = result * 49;

    salaryOutput.innerText = "$" + percent
    mathBreakDown.innerText = "$" +  x + "/hr -" + " 40 hours a week for 52 weeks of the year is your yearly salary"
    mathABreakDown.innerText = "$" +  x + "/hr - $" + adjustments + " Salary with Tacobell & Taxes"
    event.preventDefault();
    
});