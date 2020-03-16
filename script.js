/* Julie Rizzino
script.js
INFO 2134
Thoendel
3/15/20 */
window.addEventListener('load', function() {
    /* Write your solution between this comment */
var selectAge = document.getElementById("age");
//name variable selectAge to represent the age select option
var ages;
//name varaible ages to represent the ages to choose from 0-100
for (let i = 0; i <= 100; i++) {
  ages += "<option>" + i + "</option>";
}
//for loop to fill the ages from 0-100
selectAge.innerHTML = ages;
//populating the age select option with ages 0-100
//have not been able to figure out how to keep the please choose an option choice
});
window.getElementByType("submit").addEventListener('load', function() {
    var isValid = true;
        //validate if all fields are filled
        isValid = false;
        //validate if something is missing
        if (!isValid) {
            alert("Please check your fields!");
            return false;
        }
        //send you to error message
        else {
            return true;
        }
        //send you to success message with first and last name and age


    /* and this comment */
});