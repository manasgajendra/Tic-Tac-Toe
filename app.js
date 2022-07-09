let reset = document.querySelector('#reset')
let turn = 'X'
let win = false
let boxes = document.querySelectorAll('.box')

const changeTurn = () =>{
    return turn === 'X'? '0' : 'X'
}

const checkWin  = ()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if( (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== '' ){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + ' Won'
            win=true
        } 
    })
}


boxes.forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click',() => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn
            turn = changeTurn()
            checkWin()
            if(!win){
                document.querySelector('.info').innerText = 'Turn for' + turn
            }
            
        }
    })
})

reset.addEventListener('click',() =>{
    let boxtexts = document.querySelectorAll('.boxtext')
    boxtexts.forEach(element  =>{
        element.innerText = ''
    })
    turn = 'X'
    win = false
    document.querySelector('.info').innerText = 'Turn for X'
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
})

