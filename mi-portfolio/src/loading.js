
const firstText="Welcome to";
const secondText="MY WORLD";
const loadingPage=document.querySelector('.loading-bg');
const loadingText=document.querySelector('.loading-text-one');
const loadingTextTwo=document.querySelector('.loading-text-two');
let charIndexFirstLoad=0;
let charIndexSecondLoad=0;

document.body.style.overflowY = 'hidden';//bloquear el scroll
typeFirstLoad=()=>
{

    if(charIndexFirstLoad<firstText.length)//si recorremos la palabra
    {
           
        loadingText.textContent+=firstText.charAt(charIndexFirstLoad);//writing the word
        charIndexFirstLoad++;
        setTimeout(typeFirstLoad,20);
    }else
    {
        setTimeout(typeSecondLoad,4000);
    }   
}


typeSecondLoad=()=>
{
    
    if(charIndexSecondLoad<secondText.length)//si recorremos la palabra
    {
           
        loadingTextTwo.textContent+=secondText.charAt(charIndexSecondLoad);//writing the word
        charIndexSecondLoad++;
        setTimeout(typeSecondLoad,20);
    }
    
    
}

document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(typeFirstLoad,1000);//despues de 2 segundos empieza a tipear
   
});



loadingPage.classList.add("animated");
window.addEventListener("load",function(){
    setTimeout(function(){
        document.body.style.overflowY = 'visible';
 
        loadingPage.remove();
        
        window.scrollTo(0,0);
  
    },8000);
  
});
