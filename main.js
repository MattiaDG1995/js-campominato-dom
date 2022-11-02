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
            
        })
        
        griglia.append( elemento );
    }
   
}
