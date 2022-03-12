const endpoint = "https://picsum.photos/v2/list?limit=8";
const images = document.querySelector(".images");

function imgTemplate(url){
  const template =`<div class="image-item">
            <img src="${url}" alt="" />
    </div>`;
    images.insertAdjacentHTML("beforeend", template);
}
async function fetchImages(){
  const respone = await fetch(endpoint);
  const data = await respone.json();
  if(data.length > 0 && Array.isArray(data)){
    data.forEach(item => {
         imgTemplate(item.download_url);
    });
  }
}

fetchImages();