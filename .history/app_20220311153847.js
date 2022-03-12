const endpoint = "https://picsum.photos/v2/list";
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
  if(images.length > 0 && Array.isArray(images)){
    images.forEach(item => {
         imgTemplate(item.download_url);
    });
  }
}

fetchImages();