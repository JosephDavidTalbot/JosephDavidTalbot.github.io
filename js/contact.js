"use strict";



 function validEmail(email) {
         var re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     return re.test(email);
 }

 function clearForm() {
     $("#name").val("");
     $("#emailFirst").val("");
     $("#emailSecond").val("");
     $("#subjectBox").val("");
     $("#messageBox").val("");
     $("#error-box").html("<br>");
 }

 function validate() {
     var errorMessage = "";


     var name = $("#name").val().trim();
     var email1 = $("#emailFirst").val().trim();
     var email2 = $("#emailSecond").val().trim();
     var subject = $("#subjectBox").val().trim();
     var message = $("#messageBox").val().trim();

     //put the trimmed versions back into the form for good UX
     $("#name").val(name);
     $("#emailFirst").val(email1);
     $("#emailSecond").val(email2)
     $("#subjectBox").val(subject);
     $("#messageBox").val(message);

     //test the strings from the form and store errors
     if (name === "") {
         errorMessage += "Name cannot be empty.<br>";
     }

     if (email1 === "") {
         errorMessage += "Initial email cannot be empty.<br>";
     }

     if (!validEmail(email1)){
         errorMessage += "Initial email is not a valid email address.<br>"
     }

     if (email2 === "") {
         errorMessage += "Confirmation email cannot be empty.<br>";
     }

     if (!validEmail(email2)){
         errorMessage += "Confirmation email is not a valid email address.<br>";
     }

     if (email1 != email2){
         errorMessage += "Email addresses do not match.<br>";
     }

     if (subject === "") {
         errorMessage += "Subject line cannot be empty.<br>";
     }

     if (message === "") {
         errorMessage += "Message cannot be empty.<br>";
     }

     //send the errors back or send an empty string if there is no error
     return errorMessage;

 }

$(document).ready(function () {

/*
 * put your event handlers here
 */
 // event handler for the clear button
 $("#names-clear").click(function (e) {
     clearForm();
     e.preventDefault();
 });

 // event handler for the send button
 $("#names-send").click(function (e) {
     // validate form and get back error messages (if any)
     var msg = validate();
     // report errors or submit the form
     if (msg === "") {
         clearForm();
         $("#error-box").html("Sent!");
     } else {
         $("#error-box").html(msg);
     }
     e.preventDefault();
 });

});
