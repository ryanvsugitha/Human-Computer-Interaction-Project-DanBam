function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var location = document.getElementById("location").value;
    var message = document.getElementById("message").value;
    
    if(name == "" || name == null){
        alert("Name cannot be empty");
        return false;
    }
    else if(name == 1){
        alert("Name too short");
        return false;
    }

    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
        alert("Please enter correct email ID")
        return false;
    }

    if(gender == "-1"){
        alert("Must pick gender");
        return false;
    }

    if(location == "-1"){
        alert("Must choose location");
        return false;
    }

    if(message.length <= 3){
        alert("Your message too short");
        return false;
    }
    else if(message.length >= 255){
        alert("Your message exceed the limit (255 characters)");
        return false;
    }
    
    return true;
}