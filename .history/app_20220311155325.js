const endpoint = "https://picsum.photos/v2/list?limit=8";
const images = document.querySelector(".images");
const loadmore=document.querySelector(".load-more");
let data=[];
let page=1;
function imgTemplate(url){
  const template =`<div class="image-item">
            <img src="${url}" alt="" />
    </div>`;
    images.insertAdjacentHTML("beforeend", template);
}
async function fetchImages(page=1){
  const respone = await fetch(`${endpoint}&${page}`);
  data = await respone.json();
  if(data.length > 0 && Array.isArray(data)){
    data.forEach(item => {
         imgTemplate(item.download_url);
    });
  }
}
async function handleLoadmore(){
 page ++;
 await fetchImages(page);
}
loadmore.addEventListener("click", handleLoadmore);
//fetchImages();