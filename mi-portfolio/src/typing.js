const textArray=["a Programmer","a Designer","Creative","Proactive [:)]"];
const typingDelay=200;
const erasinDelay=100;//deleting the current word
const newTextDelay=2000;
let textArrayIndex=0;
let charIndex=0;
const typeTextSpan=document.querySelector(".typed-text");
const cursorSpan=document.querySelector(".cursor");

type=()=>//when we type
{
    if(charIndex<textArray[textArrayIndex].length)//recorremos la palabra
    {
        if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
        typeTextSpan.textContent+=textArray[textArrayIndex].charAt(charIndex);//writing the word
        charIndex++;
        setTimeout(type,typingDelay);
    }else
    {
        cursorSpan.classList.remove("typing");
        //erase the current display text
        setTimeout(erase,newTextDelay);
    }
}

erase=()=>{//erase the current word
    if(charIndex>0)
    {
        if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
        //tomamos todo el string y vamos para atras
        typeTextSpan.textContent=textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasinDelay);
    }else
    {
        cursorSpan.classList.remove("typing");
        //aca ocurre que si llegamos a la ultima letra volvemos a la primera
        textArrayIndex++;
        if(textArrayIndex>=textArray.length)
        {
           textArrayIndex=0;
           
        }
        setTimeout(type,typingDelay+1100);
    }
};

/*
DOMContentLoaded – el navegador HTML está completamente cargado y 
el árbol DOM está construido, pero es posible que los recursos externos como <img>
 y hojas de estilo aún no se hayan cargado.
*/
document.addEventListener("DOMContentLoaded",()=>{
    if(textArray.length)setTimeout(type,newTextDelay+50);//despues de 2 segundos empieza a tipear
});
