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
    var inputGender = $('input[name="gender"]:checked').val();
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

    if(inputGender == undefined){
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
	if(!isEmail(inputEmail)){
		toastShow(invalidEmailErrMsg);
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
    var actionUrl = form.attr('action');
    
    $.ajax({
        type: "POST",
        url: actionUrl,
        data: form.serialize(), // serializes the form's elements.
        success: function(data)
        {
          if(data =="SUCCESS"){
			toastShow(successMsgUser,'S');
			$("#formResetId").click();
		  }else{
			toastShow(successErrMsgUser);
		  }
        }
    });
    
});
}
function toastShow(msg,type){
	if(type == "S"){
		$('#toastId').removeClass("text-bg-danger");
		$('#toastId').addClass("text-bg-primary");
	}else{
		$('#toastId').addClass("text-bg-danger");
		$('#toastId').removeClass("text-bg-primary");
	}
    $("#toast-body").text(msg);
    $('.toast').toast("show");
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
