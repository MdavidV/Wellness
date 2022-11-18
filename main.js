window.onscroll = function(){fadeFunction()};


const cont = document.getElementById('imgEditable');
const sec1 = document.getElementById('first-sec');
const sec2 = document.getElementById('motivo');
const sec3 = document.getElementById('modelo');
const sec4 = document.getElementById('aliadas');
const sec5 = document.getElementById('compe');

let distancia_img, distancia_sec1, distancia_sec2, distancia_sec3, distancia_sec4, distancia_sec5; 

console.log(cont);


function fadeFunction(){
    distancia_img = window.innerHeight - cont.getBoundingClientRect().top;
    if(distancia_img >= 400){
        cont.classList.add('img-section-effect');
    }

    distancia_sec1 = window.innerHeight - sec1.getBoundingClientRect().top;
    if(distancia_sec1 >= 10){
        sec1.classList.add('view');
          
    }

    distancia_sec2 = window.innerHeight - sec2.getBoundingClientRect().top;
    if(distancia_sec2 >= 400){
        sec2.classList.add('img-section-effect');  
    }
    
    distancia_sec3 = window.innerHeight - sec3.getBoundingClientRect().top;
    if(distancia_sec3>= 400){
        sec3.classList.add('img-section-effect');  
    }


    distancia_sec4 = window.innerHeight - sec4.getBoundingClientRect().top;
    if(distancia_sec4>= 400){
        sec4.classList.remove('hidden');
        sec4.classList.add('view');  
    }

    
    distancia_sec5 = window.innerHeight - sec5.getBoundingClientRect().top;
    if(distancia_sec5>= 400){
        sec5.classList.remove('hidden');
        sec5.classList.add('view');  
    }
}


