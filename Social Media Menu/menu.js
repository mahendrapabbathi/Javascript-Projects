

// const selectMedia=document.getElementById('search-input');
// const displayCard=document.querySelector('.card');

// function SelectSocialMedia(){
//     selectMedia.addEventListener('click',()=>{
//         displayCard.style.display="block";
//     })
// }

// SelectSocialMedia();


// function displayFacebook(){
//     const facebook=document.getElementById('facebook');
//     facebook.parentElement.addEventListener('click',()=>{
//         selectMedia.textContent="Facebook";
//         displayCard.style.display=none;
//     })
// }
// displayFacebook();

// function displayYoutube(){
//     const facebook=document.getElementById('youtube');
//     facebook.parentElement.addEventListener('click',()=>{
//         selectMedia.textContent="Youtube";
//         displayCard.style.display=none;
//     })
// }
// displayYoutube();

// function displayInstagram(){
//     const facebook=document.getElementById('instagram');
//     facebook.parentElement.addEventListener('click',()=>{
//         selectMedia.textContent="Instagram";
//         displayCard.style.display=none;
//     })
// }
// displayInstagram();

// function displayTwitter(){
//     const facebook=document.getElementById('twitter');
//     facebook.parentElement.addEventListener('click',()=>{
//         selectMedia.textContent="Twitter";
//         displayCard.style.display=none;
//     })
// }
// displayTwitter();

// function displayPinterest(){
//     const facebook=document.getElementById('pinterest');
//     facebook.parentElement.addEventListener('click',()=>{
//         selectMedia.textContent="Pinterest";
//         displayCard.style.display=none;
//     })
// }
// displayPinterest();

// function displayWhatsapp(){
//     const facebook=document.getElementById('whatsapp');
//     facebook.parentElement.addEventListener('click',()=>{
//         selectMedia.textContent="Whatsapp";
//         displayCard.style.display=none;
//     })
// }
// displayWhatsapp();



const selectMedia = document.getElementById('search-input');
const displayCard = document.querySelector('.card');

function SelectSocialMedia() {
    selectMedia.addEventListener('click', () => {
        displayCard.style.display = displayCard.style.display === "block" ? "none" : "block";
    });
}
SelectSocialMedia();

const socialOptions = document.querySelectorAll('.social');

function setupSocialMediaOptions() {
    socialOptions.forEach(option => {
        option.addEventListener('click', () => {
            const mediaName = option.querySelector('span').textContent;
            selectMedia.textContent = mediaName; 
            displayCard.style.display = "none"; 
        });
    });
}
setupSocialMediaOptions();
