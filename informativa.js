let nave2=document.querySelector('nav');
console.dir(nave2);
window.addEventListener('scroll',()=>{
    if(window.scrollY>140){
       nave2.classList.add('nav3'); 
    }else{
        nave2.classList.remove('nav3');
    }
});