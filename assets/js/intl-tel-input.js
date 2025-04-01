export function initintltelinput() {
 let input = document.querySelector("#phoneWithCode");
 let iti = window.intlTelInput(input, {
   initialCountry: "sa",
   preferredCountries: [
     "sa",
     "eg",
     "ae",
     "dz",
     "ma",
     "iq",
     "jo",
     "sy",
     "kw",
     "qa",
     "bh",
     "om",
     "lb",
     "sd",
     "ly",
     "tn",
     "ye",
     "ps",
   ],

   separateDialCode: true,
   utilsScript:
     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
 });

 if (window.getComputedStyle(document.body).direction === "ltr") {
   document.querySelector(".phoneCon").classList.add("flagenglish");
   document.getElementById("phoneWithCode").classList.add("paddingInput");
 }
}