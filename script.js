const output =  document.getElementById("my-container");


//creo un ciclo for per iterare nnumeri da 1 a 101
for(let i = 1; i < 101; i++){

    //se il resto della divisione tra i e 3 ed i e 5  e' strettamente uguale a 0 
    //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 15)
    if(i % 3 === 0 && i % 5 === 0){
        
        
        console.log('FIZZBUZZ');
        
        output.innerHTML += `
                               <div  class="box-fizzbuzz">
                                    <p>${i} FIZZBUZZ</p>
                               </div>`;

    }
    //se il resto della divisione tra i e 3 e' strettamente uguale a 0 
    //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 3)

    if(i % 3 === 0){
    

        console.log('FIZZ');

        output.innerHTML += `
                                 <div  class="box-fizz">
                                     <p>${i} FIZZ</p>
                                 </div>`;
    
   
      }

    //se il resto della divisione tra i e 5 e' strettamente uguale a 0 
    //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 3)

    else if(i % 5 === 0){
                                            
                                            
                                            
       console.log('BUZZ');

       output.innerHTML += `
                                  <div  class="box-buzz">
                                         <p>${i} BUZZ</p>
                                 </div>`;
       
    }


     else{
            
            //altrimenti stampami tutti gli altri
        console.log(i);

        output.innerHTML += `
                                 <div  class="box-index">
                                        <p>${i}</p>
                                 </div>`
     };  







}