const endpoint = "https://picsum.photos/v2/list";
const images = document.querySelector(".images");

function imgTemplate(url){
  const template =`<div class="image-item">
            <img src="${url}" alt="" />
    </div>`;
}
async function fetchImages(){
  const respone = await fetch(endpoint);
  const data = await respone.json();
  return data;
}
console.log(fetchImages);