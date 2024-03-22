let wrapper=document.querySelector('#wrapper');
let img=document.querySelectorAll('.img1');
let div3=document.querySelectorAll('.div3');
let nave=document.querySelector('#nave');
console.dir(nave);

let immagini=[
    {img:'./media/fiori2.png',description:'Acqua minerale in vetro'},
    {img:'./media/fiore1.jpg',description:'Decorazioni dolci'},
    {img:'./media/alessio.jpg',description:'Addobbi per feste'},
    {img:'./media/build-first-game-blog-image-5-1-1024x744.png',description:'Consegna a domicilio'},
    {img:'./media/alessio2.jpg',description:'Dolci'},
    {img:'./media/alessio3.jpg',description:'Enoteca'},
]

immagini.forEach((immagine)=>{
    let div=document.createElement('div');
    div.classList.add('col-12','col-md-4','my-3');
    div.innerHTML=`
    <div class="card"><div class="div3">
    <img src="${immagine.img}" class="img1" alt="immagine"></div>
    <div class="card-body my-2">
    <h5 class="card-title text-truncate">${immagine.description}</h5>
    </div>
    <div>
    <a href="#" class="leggi"><p class="text-end me-3">Leggi di più</p></a>
    </div>
    </div>
    `;
    wrapper.appendChild(div);
});

window.addEventListener('scroll',()=>{
    if(window.scrollY>140){
       nave.classList.add('nav3'); 
    }else{
        nave.classList.remove('nav3');
    }
});

let wrappper=document.querySelector('#wrappper');

let loghi=[
    {path:'./media/icon1.png'},
    {path:'./media/icon2.png'},
    {path:'./media/icon3.png'},
    {path:'./media/icon1.png'}
]
// loghi.forEach((logo)=>{
//     let div=document.querySelector('div');
//     div.classList.add('col-12','col-md-3','d-flex', 'justify-content-center','div6');
//     div.innerHTML=`
//     <img src="${logo.path}" alt="loghi">
//     `;
//     wrappper.appendChild(div);
// });