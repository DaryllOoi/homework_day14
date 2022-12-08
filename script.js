
function onLoadActions(){
    for ( let number = 1 ; number <= 76; number++){
        let numberNode = document.createElement('div')
        numberNode.classList.add('number')
        numberNode.innerText = number
        document.getElementById('numbers-container').appendChild(numberNode)
    }

}

    function giveRandomNumber(){
        let randomNumber=Math.floor(Math.random()*76+1);
        console.log(randomNumber);
        selectedDiv(randomNumber)
        
};


    function selectedDiv(num){
        let divNode = document.getElementsByClassName('number')
        for (let i = 0; i < divNode.length; i++){
            if( num === parseInt(divNode[i].innerText) ){
            divNode[i].classList.add('selected')
            }
            }  

        if (num === undefined) {
            randomNumber = Math.floor(Math.random() * (76 - 1 + 1)) + 1;
        }
        else {randomNumber = Math.floor(Math.random() * (76 - 1 )) + 1;
        if (randomNumber >= num) randomNumber += 1;
        }
            num = randomNumber;
    };

        
    

window.onload = onLoadActions