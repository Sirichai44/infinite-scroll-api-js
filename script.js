const count = 10;
const apiKey = 'V09lDXpJ0Kn8wxlJJFO56ajHiZH_XPUBR-fK_jDczQk';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const imgContainer = document.getElementById('img-container');
let photoArrays = [];

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photoArrays = await response.json();
        displayImg();
        // console.log(photoArrays);
    }catch(err){
        console.log("error");
    }
}
function displayImg(){
    photoArrays.forEach((photo) =>{
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');

        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('title', photo.alt_discription);

        item.appendChild(img);
        imgContainer.appendChild(item);
    });
}
getPhotos();

window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-100){
        getPhotos();
    }
});