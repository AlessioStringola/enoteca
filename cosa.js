let nave3=document.querySelector('nav');
let wrapper9=document.querySelector('#wrapper9');
let n1=document.querySelector(`#n1`); 
let n2=document.querySelector(`#n2`);
let n3=document.querySelector(`#n3`);


window.addEventListener('scroll',()=>{
    if(window.scrollY>140){
       nave.classList.add('nav3'); 
    }else{
        nave.classList.remove('nav3');
    }
});

let cards9=[
    {img:'./media/fiori2.png', title:'Acqua minerale in vetro', description:'Enoteca La Velca mette a disposizione la possibilità di consegna a domicilio anche per quanto riguarda le bottiglie di acqua minerale in vetro in vendita. ll'},
    {img:'./media/fiore1.jpg', title:'Decorazioni dolci', description:`In base alle classiche festività da calendario è sempre possibile trovare decorazioni per dolci, come coloratissime e piccole uova di Pasqua, perfette per organizzare la caccia`},
    {img:'./media/alessio.jpg', title:'Addobbi per feste', description:`Qualsiasi tipo di decorazione abbiate in mente per realizzare l’allestimento perfetto per l’occasione, Enoteca La Velca propone addobbi per feste ed effetto wow come composizioni di`},
    {img:'./media/build-first-game-blog-image-5-1-1024x744.png', title:'Consegna a domicilio', description:`Per permettere anche a chi è impossibilitato a raggiungere il punto vendita, tutti i prodotti venduti da Enoteca La Velca sono consegnabili a domicilio. Se volete`},
    {img:'./media/alessio2.jpg', title:'Dolci', description:`ll cioccolato è un altro punto fermo di Enoteca La Velca e viene proposto in moltissime varianti di gusto, formato e confezionamento. Chi non ama il`},
    {img:'./media/alessio3.jpg', title:'Enoteca', description:`Enoteca La Velca nasce prima di tutto come vera e propria enoteca e da sempre la missione è quella di proporre alla clientela un catalogo di`}
];

cards9.forEach((card)=>{
    let div=document.createElement('div');
    div.classList.add('col-12', 'col-md-11');
    div.innerHTML=`
    <div class="card card3 my-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${card.img}" class="img-fluid img3 rounded-start" alt="card">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title h3-2">${card.title}</h2>
          <p class="lead text-truncate">${card.description}.</p>
          <a href="#" class="leggi"><p class="text-end me-3">Leggi di più</p></a>
        </div>
      </div>
    </div>
  </div>
    `;
    wrapper9.appendChild(div);
});

createInterval= function(total, finalNumero, time){
    let counter=0;
    let intervallo=setInterval(()=>{
        if(counter<total){
            counter++;
            finalNumero.innerHTML=counter;
            }else{
                clearInterval(intervallo);
            }
        },time);
    };
    let check=true;
    let observer= new IntersectionObserver((entries)=>{
    entries.forEach((el)=>{
        if(el.isIntersecting)
        createInterval(250, n1,10);
        createInterval(130, n2, 25);
        createInterval(250, n3, 10);
        check=false;
        setTimeout(()=>{ 
            check=true;
        }, 3000)
    })
})
observer.observe(n3);
