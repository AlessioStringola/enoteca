let navee1=document.querySelector('nav');

window.addEventListener('scroll',()=>{
    if(window.scrollY>140){
       nave.classList.add('nav3'); 
    }else{
        nave.classList.remove('nav3');
    }
});

let wrapp2=document.querySelector('#wrapp2');

let contatti=[
    {img:'fa-solid fa-phone-volume i1', name:'TELEFONO', description:'+39 3333333333'},
    {img:'fa-solid fa-at i1', name:'E-MAIL', description:'xxx@xxx.xx'},
    {img:'fa-solid fa-map i1', name:'INDIRIZZO', description:`Via Alberata Dante Alighieri
    , 37, 01016 Tarquinia VT,
    Italia`},
    {img:'fa-solid fa-map i1', name:'ORARI DI APERTURA', description:`Lunedì- Sabato:
    8:30AM–7:30PM`}
];
console.dir(contatti);
contatti.forEach((contatto)=>{
    let div=document.createElement('div');
    div.classList.add('col-12', 'col-md-3');
    div.innerHTML=`
    <div class="bg-warning rounded-circle div77 my-4"><i class="${contatto.img}"></i></div>
    <h2 class="h3-2">${contatto.name}</h2>
    <h5>${contatto.description}</h5>
    `;
    wrapp2.appendChild(div);
});