
//TODO: creare variabili per D.O.M
let boxBuzz =''

//creo un ciclo for per iterare nnumeri da 1 a 100
for(let i = 1; i < 101; i++){

   //se il resto della divisione tra i e 3 e' strettamente uguale a 0 
   //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 3)

   if(i % 3 === 0){
    

    console.log('FIZZ');
    document.getElementById("my-container").innerHTML += `
                                            <div  class="box-fizz">
                                              <p>FIZZ</p>
                                            </div>`
    
   }
   //se il resto della divisione tra i e 3 ed i e 5  e' strettamente uguale a 0 
   //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 15)
   if(i % 3 === 0 && i % 5 === 0 ){
       
       
       console.log('FIZZBUZZ');
       
       document.getElementById("my-container").innerHTML += `
       <div  class="box-fizzbuzz">
       <p>FIZZBUZZ</p>
       </div>`;
       //se il resto della divisione tra i e 5 e' strettamente uguale a 0 
       //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 5)
    }
   else if(i % 5 === 0){
     
       
       console.log('BUZZ');
       document.getElementById("my-container").innerHTML += `
                                               <div  class="box-buzz">
                                                 <p>BUZZ</p>
                                               </div>`;
       
   }


   else{
    
    //altrimenti stampami tutti gli altri
    console.log(i);
    document.getElementById("my-container").innerHTML += `
                                            <div  class="box-index">
                                              <p>${i}</p>
                                            </div>`
   };







}