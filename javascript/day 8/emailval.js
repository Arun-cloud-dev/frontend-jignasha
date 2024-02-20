const gamilValidate =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const emailTOvaidate = "aru23451./@ymail.com";




if (gamilValidate.test(emailTOvaidate)){
    alert("valid email address")
}else {
    alert("Not a valid email address")
}

// //val gamail.com 
// /^[a-zA-Z\d\.-]+@gmail\.com$/;
