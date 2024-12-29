
const accessKey="5fem6uoMvHkbAE4KP1ODtUMt_gor1NU0sl7rb0synCk";

const searchForm=document.querySelector('.search-form');
const searchInput=document.getElementById('search-input');
const searchResult=document.getElementById('search-result');
const searchMore=document.getElementById('show-more');

let keyword="";
let page=1;

async function searchImages(){
    keyword=searchInput.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response=await fetch(url);
    const data=await response.json();

    // console.log(data);

    if(page==1){
        searchResult.innerHTML="";
    }
    const results=data.results;

    results.map((result)=>{
        const image=document.createElement('img');
        image.src=result.urls.small;

        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })

    searchMore.style.display="block";

}

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

searchMore.addEventListener("click",()=>{
    page++;
    searchImages();
})