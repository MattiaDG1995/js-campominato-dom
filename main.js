const griglia = document.getElementById('griglia')
// console.log(griglia)

let tiles = document.getElementsByClassName('tile');

let tileIndexes = [];
    //console.log('array: ', tileIndexes)
function random(k){
    
    do{
    let rand = Math.floor((Math.random() * k) + 1);
    if( !tileIndexes.includes(rand) ){
        tileIndexes.push(rand);
        }
    }while( tileIndexes.length < 16 );

    return tileIndexes;
}
    
    // const bombs = document.getElementById('bombs')

function avvia(){
   
    griglia.innerHTML = '';
    tileIndexes = random(100);   
    console.log( tileIndexes );

    function functQuadrato(){
        
        const div = document.createElement('div')
        div.classList.add('quadrato')
        return div
    }  
    // console.log( functQuadrato() )   
    for( let i=1; i<101; i++){
        
        let elemento = functQuadrato()
        elemento.innerText= i
        // console.log(elemento) 
       
    
        griglia.append( elemento );
    }

    const quadratiGriglia = document.querySelectorAll('.quadrato')
    

    for(let i=0; i<quadratiGriglia.length; i++){
        let quadtratoCorrente = quadratiGriglia[i]
        quadtratoCorrente.addEventListener('click', function(){
            
             
            if( tileIndexes.includes(parseInt(quadtratoCorrente.innerHTML))){
                
                for( let j = 0; j < quadratiGriglia.length; j++){
                    let quadratoPreso = quadratiGriglia[j]
                    console.log(quadratoPreso)
                    

                    if( tileIndexes.includes(parseInt(quadratoPreso.innerHTML))){
                        quadratoPreso.classList.add('red')
                    }
                }
            }else{
                this.classList.toggle('attiva')
            }
             
        })
    }
             
}
