console.log("This is about Form Validation");

const Name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
let validName = false;
let validemail = false;
let validphone = false;
$('#success').hide();
$('#failure').hide();

// console.log(Name,email,phone);
// blur means click on targeted element and then click outside

Name.addEventListener('blur', () => {

    console.log("Name is Blurred");
    //  Name validate here

    let regex = /^[a-zA-Z][0-9a-zA-Z]{2,10}$/
    let str = Name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is matched');
        Name.classList.remove('is-invalid')
        validName = true;
    }
    else {
        console.log("your name is not matched");
        Name.classList.add('is-invalid');
        validName = false;
    }

})

email.addEventListener('blur', () => {

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid')
        validemail = true;
    }
    else {
        console.log("your email is not valid");
        email.classList.add('is-invalid');
        validemail= false;
    }

    console.log("Email is Blured");
    // Email validate here

})
phone.addEventListener('blur', () => {

    let regex = /^[0-9]{10}$/
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone no. is not valid');
        phone.classList.remove('is-invalid')
        validphone = true;
    }
    else {
        console.log("your phone no. is not not valid");
        phone.classList.add('is-invalid');
        validphone= false;
    }

    console.log("Phone is Blured");
    // Phone validate here

})

let sumbit = document.getElementById('btn');
sumbit.addEventListener('click', (() => {
    console.log(" you clicked the submit button");
    // submit your form here

    if (validName && validemail && validphone) {
        let success = document.getElementById('success');
        console.log("all three are valid submitting now");
        success.classList.add('show');
        // failure.classList.remove('show');


        let failure = document.getElementById('failure');
        // failure.classList.add('show');
        // failure.classList.add('show');
        // $('#failure').alert('close');
         $('#failure').hide();
         $('#success').show();



    }
    else {
        console.log("one of phone , name and phone is unvalid ,plz recheck again!")
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();
      




    }


}))

