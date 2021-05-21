const form = document.querySelector("#contactForm");
const message = document.querySelector("#messageConfirmed");

const firstName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const formMessage = document.querySelector("#formMessage");
const messageError = document.querySelector("#messageError");


function formRequirements() {
   let error = false;

   if (checkLength(firstName.value, "") === true) {
      nameError.style.display = "none";
   } else {
      nameError.style.display = "block";
      error = true;
   }

   if (validateEmail(email.value) === true) {
      emailError.style.display = "none";
   } else {
      emailError.style.display = "block";
      error = true;
   }

   if (checkLength(formMessage.value, 24) === true) {
      messageError.style.display = "none";
   } else {
      messageError.style.display = "block";
      error = true;
   }

   return error;

}


   function submitForm(event) {
      event.preventDefault();

      const requirements = formRequirements();

      if(!requirements) {
         message.innerHTML = '<div class="message">The message has been sent successfully! We will respond to you as soon as possible, within 24 hours during our working buisness days. Stay turned!</div>';
      } 

   form.focus();
   }


   form.addEventListener("submit", submitForm);

   function checkLength(value, len) {
      if (value.trim().length > len) {
         return true;
      } else {
         return false;
      }
   }

   function validateEmail(email) {
      const reg = /\S+@\S+\.\S+/;
      const patternMatches = reg.test(email);
      return patternMatches;
   }


   function topPage() {
      window.scrollTo(0, 120);
  }