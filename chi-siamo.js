let navee=document.querySelector('.nave2');

window.addEventListener('scroll',()=>{
    if(window.scrollY>140){
       navee.classList.add('nav3'); 
    }else{
        navee.classList.remove('nav3');
    }
});

let wrapper4=document.querySelector('#wrapper4')
let immagini2=[
    {img:'./media/uova1.jpg'},
    {img:'./media/uova2.jpg'},
    {img:'./media/uova3.jpg'},
    {img:'./media/uova1.jpg'},
    {img:'./media/uova2.jpg'},
    {img:'./media/uova3.jpg'}
];

immagini2.forEach((immagine)=>{
    let div=document.createElement('div');
    div.classList.add('col-12', 'col-md-4', 'my-4', 'd-flex', 'justify-content-center', 'align-items-center');
    div.innerHTML=`
    <img src="${immagine.img}" class="img3" alt="immagine">
    `;
    wrapper4.appendChild(div);
});