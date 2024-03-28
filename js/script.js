// js untuk Portfolio Website 


// Fungsi untuk automatic slide
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

function validateForm() {
    let inputName = document.forms["contact-us"]["name"].value;
    let inputEmail = document.forms["contact-us"]["email"].value;
    if (inputName == "") {
        alert("Name must be filled out");
    } else if (inputEmail == "") {
        alert("Email must be filled out");
    } else {
        alert("Congrats your data has been sent! please check your email for more information")
    }
    return false;
}
