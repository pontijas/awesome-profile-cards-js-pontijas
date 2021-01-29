'use strict';
console.log('hola soy local storage');

// function getDataFromLocalStorage() {
//     const userNameValue = localStorage.getItem("name");
//     if (userNameValue !== null) {
//       userName.value = userNameValue;
//     }
//     const paletteValue = localStorage.getItem("palette");
//     if (paletteValue !== null) {
//       document.querySelector(`.js-palette${paletteValue} .js-palette${paletteValue}`).checked = true;
//     }
//     // job
//     const userJobValue = localStorage.getItem("job");
//     if (userJobValue !== null) {
//       userJob.value = userJobValue;
//     }
//     // photo
//     const userImageValue = localStorage.getItem("image");
//     if (userImageValue !== null) {
//       profileImage.style.backgroundImage = userImageValue;
//       profilePreview.style.backgroundImage = userImageValue;
//     }
//     //email
//     const userMailValue = localStorage.getItem("email");
//     if (userMailValue !== null) {
//       userMail.value = userMailValue;
//       document.querySelector(".js-cardemail").href = "emailto:" + userMailValue;
//     }
//     //Phone
//     const userPhoneValue = localStorage.getItem("phone");
//     if (userPhoneValue !== null) {
//       userPhone.value = userPhoneValue;
//       document.querySelector(".js-cardphone").href = "tel:" + userPhoneValue;
//     }
//     //Linkedin
//     const userLinkedinValue = localStorage.getItem("linkedin");
//     if (userLinkedinValue !== null) {
//       userLinkedin.value = userLinkedinValue;
//       document.querySelector(".js-cardlinkedin").href = userLinkedinValue;
//     }
//     //GitHub
//     const userGithubValue = localStorage.getItem("github");
//     if (userGithubValue !== null) {
//       userGithub.value = userGithubValue;
//       document.querySelector(".js-cardgithub").href = userGithubValue;
//     }
//   }
//   getDataFromLocalStorage();
  
//   paintPalette();
//   getUserName();
//   getUserJob();
  
//   let selectedPalette = document.querySelector(".js-radio:checked");
//   selectedPalette = selectedPalette.value;
  
//   const userData = {
//     palette: selectedPalette,
//     name: userName.value,
//     job: userJob.value,
//     mail: userMail.value,
//     phone: userPhone.value,
//     linkedin: userLinkedin.value,
//     github: userGithub.value
//   };