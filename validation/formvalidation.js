 
 var formValid  = {
     first_name:    false,
     last_name:     false,
     user_id:       false,
     password:      false,
     email:         false,
     dob_day:       false,
     dob_month:     false,
     dob_year:      false,
     gender:        false
 }
 
/// Name check ------

 $('#firstName').on('input',function() {
    
    var Name = $(this).val();
    var testName = new RegExp(/^[A-Za-z]+$/);
    if(!testName.test(Name)){
       $('#firstName').removeClass("form-control").addClass("form-control is-invalid");
       formValid.first_name = false;
       $('nameCheck').text('Please use only letters (a-z) and  (A-Z)');
    }    
    if(testName.test(Name)){
       $('#firstName').removeClass("form-control is-invalid").addClass("form-control is-valid");
       formValid.first_name = true;
    }  
    checkValid();
});

$('#lastName').on('input',function() {
    
    var lastName = $(this).val();
    var firstName = $('#firstName').val();
    var testlastName = new RegExp(/^[A-Za-z]+$/);
    if(firstName===''){
        $('#firstName').removeClass("form-control").addClass("form-control is-invalid");
        formValid.last_name = false;
        $('#nameCheck').text('Please fill the first Name');
    }
    if(!testlastName.test(lastName)){
       $('#lastName').removeClass("form-control").addClass("form-control is-invalid");
       formValid.last_name = false;
       $('#nameCheck').text('Please use only letters (a-z) and  (A-Z)');

    }    
    if(testlastName.test(lastName)){
       $('#lastName').removeClass("form-control is-invalid").addClass("form-control is-valid");
       formValid.last_name = true;
    } 
    checkValid();
});

// User id check ------

$('#userId').on('input',function(){
    var userId = $(this).val();
    var testUserId = new RegExp(/^[A-Za-z0-9]+$/);
    if(!testUserId.test(userId)){
        $('#userId').removeClass("form-control").addClass("form-control is-invalid");
        $('#userIdCheck').text('Please use only letters (a-z), (A-Z), numbers');
       formValid.user_id = false;
    }
    if(testUserId.test(userId)){
        $('#userId').removeClass("form-control is-invalid").addClass("form-control is-valid");
        formValid.user_id = true;
    }
    if(testUserId.test(userId) && (userId.length <4 || userId.length >8)){
        $('#userId').removeClass("form-control").addClass("form-control is-invalid");
        $('#userIdCheck').text('Please use between 4 and 8 characters. ');
        formValid.user_id = false;
    }
    checkValid();
});

// email Check -----------
$('#emailId').on('input',function() {
    var testEmailId = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    var email = $(this).val();
    if(testEmailId.test(email)){
        $('#emailId').removeClass("form-control is-invalid").addClass("form-control is-valid");
        $('#emailIdCheck').text();
        formValid.email = true;
    }
    if(!testEmailId.test(email)){
        $('#emailId').removeClass("form-control").addClass("form-control is-invalid");
        $('#emailIdCheck').text('please enter complete email Address');
        formValid.email = false;
    }
});

//password check --------


//Short passwords are easy to guess. Try one with at least 8 characters.
//These passwords don't match. Try again?

$('#password_one').on('input',function(){
    var pass_one = $(this).val();
    if(pass_one.length < 8){
        $('#password_one').removeClass("form-control").addClass("form-control is-invalid");
        $('#passwordCheck').text('Short passwords are easy to guess. Try one with at least 8 characters');
        formValid.password = false;
    }else{
        $('#password_one').removeClass("form-control is-invalid").addClass("form-control is-valid");
        $('#passwordCheck').text('');
    }
    checkValid();

});

$('#password_two').on('input',function(){
    var password2 = $(this).val();
    var password1 = $('#password_one').val();
    console.log(password1);
    console.log(password2);
    if(password1 ===''){
        $('#passwordCheck').text('These passwords don\'t match. Try again?');
        $('#password_two').removeClass("form-control").addClass("form-control is-invalid");
        formValid.password = false;
    }
    if(password2 !== password1){
        $('#password_two').removeClass("form-control").addClass("form-control is-invalid");
        $('#passwordCheck').text('These passwords don\'t match. Try again?');
        formValid.password = false;
    }else if(password1 === password2){
        $('#password_two').removeClass("form-control is-invalid").addClass("form-control is-valid");
        formValid.password = true;
    }
    checkValid();
   
});

// DOB -----------

$('#dayId').on('input',function(){
    var day = $(this).val();
    var testday = new RegExp(/^[A-Za-z]+$/);

    if(!testday.test(day)){
        if(day>0 && day<=31){
            $('#dayId').removeClass("form-control is-invalid").addClass("form-control is-valid");
            $('#dobCheck').text('');
            formValid.dob_day = true;
        }else{
            $('#dayId').removeClass("form-control").addClass("form-control is-invalid");
            $('#dobCheck').text('Invalid Day');
            formValid.dob_day = false;
        }
    }else{
        $('#dayId').removeClass("form-control").addClass("form-control is-invalid");
        $('#dobCheck').text('Invalid Day');
        formValid.dob_day = false;
    }
        
checkValid();
});

$('#monthId').on('change',function(){
    var month = $(this).val();
    console.log(month);
    if(month==0){
        $('#monthId').removeClass("form-control is-invalid").addClass("form-control is-invalid");
        $('#dobCheck').text('Invalid month');
        formValid.dob_month = false;
    }else{
        $('#monthId').removeClass("form-control is-invalid").addClass("form-control is-valid");
        $('#dobCheck').text('');
        formValid.dob_month = true;
    }
    checkValid();

});

$('#yearId').on('input',function(){
    
    var year = $(this).val();
    var testyear = new RegExp(/^[A-Za-z]+$/);

    if(!testyear.test(year)){
        if(year<=2000 && year>=1930){
            $('#yearId').removeClass("form-control is-invalid").addClass("form-control is-valid");
            $('#dobCheck').text('');
            formValid.dob_year = true;
        }else{
            $('#yearId').removeClass("form-control").addClass("form-control is-invalid");
            $('#dobCheck').text('Invalid Year');
            formValid.dob_year = false;
        }
    }else{
        $('#yearId').removeClass("form-control").addClass("form-control is-invalid");
        $('#dobCheck').text('Invalid Year');
        formValid.dob_year = false;
    }
    checkValid();

});




// gender -----

$('#genderSelect').on('change',function(){
    var _gender=$(this).val();
    console.log(_gender);
    if((_gender==='Male')||(_gender==='Female')){
        $('#genderSelect').removeClass("form-control is-invalid").addClass("form-control is-valid");   
        $('#genderCheck').text();
        formValid.gender = true;
    }
    if(_gender === 'I am ..'){
        $('#genderSelect').removeClass("form-control").addClass("form-control is-invalid");   
        $('#genderCheck').text('You can\'t leave this empty.');
        formValid.gender = false;
    }
});


// validation ----------

function checkValid(){
    if(formValid.first_name && formValid.last_name && formValid.user_id && formValid.password && formValid.email && formValid.dob_day && formValid.dob_month && formValid.dob_year && formValid._gender) {
        return true;
    }
    console.log(formValid);
}

// submit ---------

$('#button').on('click',function(){
    if(checkValid()){
        alert('SignUp completed Successfuly !! ');
    }else{
        alert('SignUp incompleted  ');
    }
})


