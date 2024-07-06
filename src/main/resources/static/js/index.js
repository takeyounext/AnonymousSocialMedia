$(document).ready(function(){
    formSubmit();
});

function validateLoginForm(){
    var username = $("#inputUserId").val();
    var password = $("#inputPassword").val();

    if(username == ""){
        toastShow(userIdErrMsg);
        return false;
    }
    if(password == ""){
        toastShow(passwordIdErrMsg);
        return false;
    }
    return true;
}

function validateRegistrationForm(){

    var inputFirstName = $("#inputFirstName").val();
    var inputLastName = $("#inputLastName").val();
    var inputDOB = $("#inputDOB").val();
    var inputGender = $("#inputGender").val();
    var inputMobileNo = $("#inputMobileNo").val();
    var inputEmail = $("#inputEmail").val();
    var inputPassword = $("#inputPassword").val();
    var inputConfirmPassword = $("#inputConfirmPassword").val();
    var inputAddress = $("#inputAddress").val();
    var inputCity = $("#inputCity").val();
    var inputState = $("#inputState").val();
    var inputZipCode = $("#inputZipCode").val();

    if(inputFirstName == ""){
        toastShow(firstNameErrMsg);
        $("#inputFirstName").focus();
        return false;
    }
    if(inputLastName == ""){
        toastShow(lastNameErrMsg);
        $("#inputLastName").focus();
        return false;
    }
    if(inputDOB == ""){
        toastShow(DOBErrMsg);
        $("#inputDOB").focus();
        return false;
    }
    if(inputDOB != ""){
        var minDOB = new Date('01/01/1960');
        if(new Date(inputDOB) < minDOB  || new Date(inputDOB) > new Date()){
            toastShow(invalidDOBErrMsg);
            $("#inputDOB").focus();
            return false;
        }
    }

    if(inputGender == ""){
        toastShow(gendarErrMsg);
        $("#inputGender").focus();
        return false;
    }
    if(inputMobileNo == ""){
        toastShow(mobileErrMsg);
        $("#inputMobileNo").focus();
        return false;
    }
    if(inputEmail == ""){
        toastShow(emailErrMsg);
        $("#inputEmail").focus();
        return false;
    }
    if(inputPassword == ""){
        toastShow(passwordErrMsg);
        $("#inputPassword").focus();
        return false;
    }
    if(inputConfirmPassword == ""){
        toastShow(confirmPasswordErrMsg);
        $("#inputConfirmPassword").focus();
        return false;
    }

    if(inputPassword !== inputConfirmPassword){
        toastShow(mismatchedPassword);
        $("#inputConfirmPassword").focus();
        return false;
    }

    if(inputAddress == ""){
        toastShow(addressErrMsg);
        $("#inputAddress").focus();
        return false;
    }
    if(inputCity == ""){
        toastShow(cityErrMsg);
        $("#inputCity").focus();
        return false;
    }
    if(inputState == "-1"){
        toastShow(stateErrMsg);
        $("#inputState").focus();
        return false;
    }
    if(inputZipCode == ""){
        toastShow(zipCodeErrMsg);
        $("#inputZipCode").focus();
        return false;
    }

}
function formSubmit() { 
    $("#formRegistration").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    //var actionUrl = form.attr('action');
    var actionUrl = "http://localhost:8080/register";
    
    $.ajax({
        type: "POST",
        url: actionUrl,
        data: form.serialize(), // serializes the form's elements.
        success: function(data)
        {
          alert(data); // show response from the php script.
        }
    });
    
});
}
function toastShow(msg){
    $("#toast-body").text(msg);
    $('.toast').toast("show");
}

