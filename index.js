
const score = {
    wins: 0,
    losses: 0,
    ties:0
}

let rockSound = new Audio("foley_breeze_block_drop_on_hard_ground_001.mp3");
let paperSound = new Audio("zapsplat_foley_paper_sheets_x3_construction_sugar_set_down_on_surface_002_42008.mp3");
let scissorSound = new Audio("office_scissors_cut_air_single_001.mp3");


function pickComputerMove(){
    const random = Math.floor((Math.random() * 3)+1);
    let compMove = "";

    if(random===1){
        compMove = "rock"
        return compMove;
    }
    else if(random===2){
        compMove = "paper"
        return compMove;
    }
    else{
        compMove = "scissors";
        return compMove;
    }
}



function winner(player, move){
    let result = "";

    

    if(player==="rock" && move==="paper"){
        result = "You have Lost";
        rockSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./Screenshot 2023-07-20 121957 (1).png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./scisscors.png" alt="">';


    }
    else if (player==="rock" && move==="scissors"){
        result = "You have Won";
        rockSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./Screenshot 2023-07-20 121957 (1).png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./paper.png" alt="">';


    }
    else if(player==="paper" && move==="scissors"){
        result = "You have Lost";
        paperSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./scisscors.png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./paper.png" alt="">';


    }
    else if(player==="paper" && move==="rock"){
        result = "You have Won";
        paperSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./scisscors.png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./Screenshot 2023-07-20 121957 (1).png" alt="">';


    }
    else if(player==="scissors" && move==="rock"){
        result = "You have Lost";
        scissorSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./paper.png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./Screenshot 2023-07-20 121957 (1).png" alt="">';
    }

    else if(player==="scissors" && move==="paper"){
        result = "You have Won";
        scissorSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./paper.png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./scisscors.png" alt="">';


    }
    else if(player==="scissors" && move==="scissors"){
        result = "It is a tie";
        scissorSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./paper.png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./paper.png" alt="">';


    }
    else if(player==="rock" && move==="rock"){
        result = "It is a tie";
        rockSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./Screenshot 2023-07-20 121957 (1).png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./Screenshot 2023-07-20 121957 (1).png" alt="">';


    }
    else if(player==="paper" && player==="paper"){
        result = "It is a tie";
        paperSound.play();
        document.querySelector('.moves .playerMove .text1').innerHTML = 'Player: <img src="./scisscors.png" alt="">';
        document.querySelector('.moves .compMove .text2').innerHTML = 'Computer: <img src="./scisscors.png" alt="">';
    }




    if(result==="You have Won"){
        score.wins+=1;
        document.querySelector('.results .result').innerHTML = 'You Won!';

        }
    else if(result==="You have Lost"){
        score.losses+=1;
        document.querySelector('.results .result').innerHTML = 'You Lost!';

    }
    else if(result==="It is a tie"){
        score.ties+=1;
        document.querySelector('.results .result').innerHTML = 'Its a Tie';

    }
    document.querySelector('.score .wins').innerHTML = 'Wins: ' + score.wins;
    document.querySelector('.score .losses').innerHTML = 'Losses: ' + score.losses;
    document.querySelector('.score .ties').innerHTML = 'Ties: ' + score.ties;








}

function reset(){
    
    score.wins=0;
    score.losses=0;
    score.ties=0;

    document.querySelector('.score .wins').innerHTML = 'Wins: ' + score.wins;
    document.querySelector('.score .losses').innerHTML = 'Losses: ' + score.losses;
    document.querySelector('.score .ties').innerHTML = 'Ties: ' + score.ties;

    document.querySelector('.results .result').innerHTML = '';


    document.querySelector('.moves .playerMove .text1').innerHTML = '';

    document.querySelector('.moves .compMove .text2').innerHTML = '';

}


winner(compMove);

