let player = "1" ;
let arr = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN];
const body = document.querySelector('.body');
const ticContainer = document.querySelector('.tic__container');
const ticBox = document.querySelectorAll('.tic__box');
const win = document.querySelector('.win');
const result = document.querySelector('.result');
const main =document.querySelector('.main');
const newGame = document.querySelector('.btn--new');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const render =(e)=>
{
    const box = e.target;
    
    if (box.classList.contains('tic__box')) 
    {
        if(player==="1"){
            box.firstChild.src='cross.svg';
            box.firstChild.classList.remove('hidden');
            arr[parseInt(box.dataset.f)]= 1;
            winner(player);
            player="2";
            player1.classList.toggle('player--active');  
            player2.classList.toggle('player--active');
            body.classList.toggle('grad1');
            body.classList.toggle('grad2');

        }
        else if(player==="2"){
            box.firstChild.src='circle.svg';
            box.firstChild.classList.remove('hidden');
            arr[parseInt(box.dataset.f)]=2;
            winner(player);
            player="1";
            player2.classList.toggle('player--active');  
            player1.classList.toggle('player--active');
            body.classList.toggle('grad1');
            body.classList.toggle('grad2');



        }
    }

}
newStart();
function newStart() {
    player = "1" ;
    arr = [NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,NaN,];
    ticBox.forEach((t)=>{t.firstChild.classList.add('hidden');
    t.firstChild.src='cross.svg';
    });
    result.classList.add('hidden');
    ticContainer.addEventListener('click',render);
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    body.classList.add('grad1');
}
newGame.addEventListener('click',()=>{
    newStart();
})
const winner = ()=>{
    if(
        (arr[0]==arr[1]&&arr[1]==arr[2])||
        (arr[3]==arr[4]&&arr[4]==arr[5])||
        (arr[6]==arr[7]&&arr[7]==arr[8])||
        (arr[0]==arr[3]&&arr[3]==arr[6])||
        (arr[1]==arr[4]&&arr[4]==arr[7])||
        (arr[2]==arr[5]&&arr[5]==arr[8])||
        (arr[0]==arr[4]&&arr[4]==arr[8])||
        (arr[2]==arr[4]&&arr[4]==arr[6]))
        {
          
            result.textContent =`${player} wins!!`;
            result.classList.remove('hidden');
            ticContainer.removeEventListener('click',render);

        }
    else if (!arr.includes(NaN)){
        result.textContent =`Its a tie`;
        result.classList.remove('hidden');
        ticContainer.removeEventListener('click',render);

    }
    
}
