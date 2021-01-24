"use strict";const userName=document.querySelector(".js-input-name"),userJob=document.querySelector(".js-input-job"),userMail=document.querySelector(".js-input-mail"),userPhone=document.querySelector(".js-input-phone"),userLinkedin=document.querySelector(".js-input-linkedin"),userGithub=document.querySelector(".js-input-github"),fr=new FileReader,uploadBtn=document.querySelector(".js-btn-img"),fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".photo"),profilePreview=document.querySelector(".js-preview");function getUserName(){document.querySelector(".layout__title").innerHTML=userName.value}function getUserJob(){document.querySelector(".layout__text").innerHTML=userJob.value}function showMail(){document.querySelector(".js-mail-icon").href="mailto:"+userMail.value}function showPhone(){document.querySelector(".js-phone-icon").href="tel:"+userPhone.value}function showLinkedin(){document.querySelector(".js-linkedin-icon").href=userLinkedin.value}function showGithub(){document.querySelector(".js-github-icon").href=userGithub.value}function getImage(e){var t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.src=`${fr.result}`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}userName.addEventListener("keyup",getUserName),userJob.addEventListener("keyup",getUserJob),userMail.addEventListener("keyup",showMail),userPhone.addEventListener("keyup",showPhone),userLinkedin.addEventListener("keyup",showLinkedin),userGithub.addEventListener("keyup",showGithub),uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);