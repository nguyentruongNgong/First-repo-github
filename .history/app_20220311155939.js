const endpoint = "https://picsum.photos/v2/list?limit=8";
const images = document.querySelector(".images");
const loadmore=document.querySelector(".load-more");
const loading = document.querySelector(".image-loader");

loadmore.style.display="none";

let page=1;
function imgTemplate(url){
  const template =`<div class="image-item">
            <img src="${url}" alt="" />
    </div>`;
    images.insertAdjacentHTML("beforeend", template);
}
async function fetchImages(page=1){
  loading.style.display="block";
  const respone = await fetch(`${endpoint}&page=${page}`);
  const data = await respone.json();
  if(data.length > 0 && Array.isArray(data)){
    loading.style.display="none";
    loading.style.display="block";
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
fetchImages();