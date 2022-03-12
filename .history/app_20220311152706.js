const endpoint = "https://picsum.photos/v2/list";
const images = document.querySelector(".images");

async function fetchImages(){
  const respone = await fetch(endpoint);
  const data = await respone.json();
  return data;
}