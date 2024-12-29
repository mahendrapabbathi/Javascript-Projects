

const progress=document.querySelector('.progress');

const required=60;

const left=100-required;

const percentage=(required/100)*100;

progress.innerHTML=percentage+"%";
progress.style.width=progress.innerHTML;
// progress.style.background-Color="green";