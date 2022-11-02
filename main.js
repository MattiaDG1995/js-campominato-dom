const griglia = document.getElementById('griglia')
console.log(griglia)

 
function avvia(){
   
    griglia.innerHTML = '';

    function functQuadrato(){
        
        const div = document.createElement('div')
        div.classList.add('quadrato')
        return div
    }  
    // console.log( functQuadrato() )   
    for( let i=0; i<100; i++){
        
        let elemento = functQuadrato()
        elemento.innerText= i + 1
        // console.log(elemento) 
    
        elemento.addEventListener('click', function(){
            console.log(this)
            this.classList.toggle('attiva')
            //recupero il valore numerico al'l'ionterno della cella
            
        })
        
        griglia.append( elemento );
    }

    let tiles = document.getElementsByClassName('tile');

    let tileIndexes = [];
    //console.log('array: ', tileIndexes)
    
    for (let x = 1; x <= 16; x++) {

        let rand;
        //let check = false;

        //se è false
        //while( !check ){
            //rand = Math.floor(Math.random() * 100);
            //if( !tileIndexes.includes(rand) ){
                //check = true
            //}
        //}

        do{
            rand = Math.floor(Math.random() * 100);
        }while( tileIndexes.includes(rand) );

        tileIndexes.push(rand);

        //!tileIndexes.includes(rand) = il numero random non è incluso nell'array, esempio 15 non è incluso, risultato true
                 
        //while ( !tileIndexes.includes(rand) ) {
         // tileIndexes.push(rand);
        //}


        //const bombs = document.createElement('bombs')
        //bombs.classList.add('red')
        //return bombs
    }

    console.log( tileIndexes );
      
      
    
}
