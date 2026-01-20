var Code = "";
var Email = "";
const Accounts = [];
const Security_Form_Code = document.getElementById("Code");
const Security_Form_Email = document.getElementById("Email");
const Security_Form = document.getElementById("Security_Form");
const Security_Form_Password = document.getElementById("Password");

// console.log(Security_Form, Security_Form_Code, Security_Form_Email, Security_Form_Password);

function Change_Values() {
    Code = Security_Form_Code.value.toString();
    Email = Security_Form_Email.value.toString();

    console.table({ Code, Email });
}

Security_Form_Code.addEventListener("change", Change_Values);
Security_Form_Email.addEventListener("change", Change_Values);
Security_Form.addEventListener("submit", (E) => E.preventDefault());