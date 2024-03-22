let nave1=document.querySelector('nav');
console.dir(nave1);

window.addEventListener('scroll',()=>{
    if(window.scrollY>140){
       nave1.classList.add('nav3'); 
    }else{
        nave1.classList.remove('nav3');
    }
});
