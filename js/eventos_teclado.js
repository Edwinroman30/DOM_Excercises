
let x = 0;
let y = 0;


export function moveBox(e,stage,ball) {

    const $ball = document.querySelector(ball);
    const $stage = document.querySelector(stage);

    let limitball = $ball.getBoundingClientRect(),
    limitstage = $stage.getBoundingClientRect();
    

    switch(e.keyCode)
    { 
        case 37:
            if(limitball.left > limitstage.left)
            $ball.style.transform  = `translate(${x--}px,${y}px)`;
            console.log(limitball.left,limitstage.left)
            break;

        case 38:
            if(limitball.top > limitstage.top){
            e.preventDefault();
            $ball.style.transform = `translate(${x}px,${y--}px)`;
             
            }
            break;

        case 39:
            if(limitball.right < limitstage.right)
            $ball.style.transform = `translate(${x++}px,${y}px)`;
            break;
        
        case 40:
            if(limitball.bottom < limitstage.bottom){
            e.preventDefault();
            $ball.style.transform = `translate(${x}px,${y++}px)`;
            }
            break;
    }
    
}

export function shortCuts(e,message) {
    if(e.keyCode === 84 && e.shiftKey === true){
        alert(message) 
     }
}