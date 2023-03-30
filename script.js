
//TODO: creare variabili per D.O.M


//creo un ciclo for per iterare nnumeri da 1 a 100
for(let i = 1; i < 101; i++){

   //se il resto della divisione tra i e 3 e' strettamente uguale a 0 
   //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 3)

   if(i % 3 === 0){
    //allora stampami fizz
    console.log('FIZZ');
    
    
   }
   //se il resto della divisione tra i e 5 e' strettamente uguale a 0 
   //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 5)
   else if(i % 5 === 0){

    console.log('BUZZ');

   }
   //se il resto della divisione tra i e 3 ed i e 5  e' strettamente uguale a 0 
   //(quindi vuol dire che il numero contenuto nell'i  e' multiplo di 15)
   else if(i % 15 === 0){
    
    //allora stampi buzz
    console.log('FIZZBUZZ');

   }
   else{
    
    //altrimenti stampami tutti gli altri
    console.log(i);

   };







}