// const strBtn = document.getElementById('diceBtn');
// const body = document.querySelector('body');

// // 変数diceを宣言してimg要素を作成する
// const dice = document.createElement('img');
// // body要素(親要素)内に<img>(dice)要素を作成する
// body.appendChild(dice);
// dice.style.width = '100px';
// dice.style.height = '100px';

// // diceNumに画像を挿入
// let diceNum = './img/saikoro1.png';
// // <img>(dice)にsrc属性(diceNum)をセットする
// dice.setAttribute('src', diceNum);
// // 変数randomを宣言
// const random = function() {
//     // diceNumに(０～６未満＋１)の小数点以下切り捨てつまり１～６の整数をランダムで生成するさいころ画像を格納する
    // diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
//     // <img>(dice)にsrc属性(diceNum)をセットする
//     dice.setAttribute('src', diceNum);
// };


// // 再宣言可能な変数timerを宣言
// // var timer;
// // // timerにランダムで100ミリ秒(0.1秒)ごとに処理を格納
// // // timer = setInterval('random()', 100);
// // // startBtnにdiceBtnのIDを取得する。
// // const startBtn = document.getElementById('diceBtn');
// // // // startBtnにクリック時function(timer=ランダム処理関数)が実行される
// // startBtn.addEventListener('click', function() {
// //     clearInterval(timer);
// //     timer = setInterval('random()', 100);
  
// //     setTimeout(() => {
// //       clearInterval(timer);
// //     }, 3000);
// //   });


// // <--チャレンジ問題-->

// // 変数bodyにHTML要素bodyを取得する
// const body = document.querySelector('body');





// 変数player1,2Btnに各id要素を取得する
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
// 変数resultにidresultを取得する
const result = document.getElementById('result');

// 変数setPlayer1,2diceに各idを取得する
const setPlayer1dice = document.getElementById('setPlayer1dice');
const setPlayer2dice = document.getElementById('setPlayer2dice');
let player1Num = 1
let player2Num = 1
let player1Timer,player2Timer
// 値が入ってないけど定義されている＝null
let player1Stop
let player2Stop 
//無名関数にfuncという名前をつけた
const func1 = () => {
    
    console.log('start1');
    player1Btn.disabled = true;
    result.textContent = "???";
    // player1Stop変数の値をtrueにする　動いているかをみる
    player1Stop = true;
    // player1Timer変数に0.1秒ごとに処理を実行式を
    player1Timer = setInterval(() => {
        player1Num = Math.floor(Math.random() * 6 + 1);
        setPlayer1dice.setAttribute("src", `./img/saikoro${player1Num}.png`)
    }, 100);
    // 3秒後に目を止める
    setTimeout(() => {
        clearInterval(player1Timer);
        // falseで止めました
        player1Stop = false;
        if(player1Stop === false && player2Stop === false) {
            console.log(player1Num,player2Num);
            if(player1Num > player2Num) {
                result.textContent = "player1の勝ち";
            } else if (player1Num === player2Num) {
                result.textContent = "引き分け";
            } else {
                result.textContent = "player2の勝ち"
            };
            player1Btn.disabled = false;
            player2Btn.disabled = false;
            player1Stop = null
            player2Stop = null
            
        }
    },3000)
}
const func2 = () => {
    
    console.log('start2');
    player2Btn.disabled = true;
    result.textContent = "???";
    player2Stop = true;
    // 0.1秒ごとに処理を実行
    player2Timer = setInterval(() => {
        player2Num = Math.floor(Math.random() * 6 + 1);
        setPlayer2dice.setAttribute("src", `./img/saikoro${player2Num}.png`)
    }, 100);
    // 3秒後に目を止める
    setTimeout(() => {
        clearInterval(player2Timer);
        player2Stop = false;
        if(player1Stop === false && player2Stop === false) {
            console.log(player1Num,player2Num);
            if(player1Num > player2Num) {
                result.textContent = "player1の勝ち";
            } else if (player1Num === player2Num) {
                result.textContent = "引き分け";
            } else {
                result.textContent = "player2の勝ち"
            };
            player1Btn.disabled = false;
            player2Btn.disabled = false;
            player1Stop = null
            player2Stop = null
        }
    },3000)
}

// 実行

player1Btn.addEventListener('click', func1)
player2Btn.addEventListener('click', func2)
// プレイヤー１か２を押す


// サイコロ起動
// 0.1秒ごとにランダムで目を生成
// 三秒後に終了目を止める
// ０～６の数を生成
// 数に応じてサイコロの目を変更


// 数字を受け取る

// 両方の数字が止まった時の数字を比較する


// プレイヤー１＞プレイヤー２
// の時プレイヤー１を表示する

// 違う場合プレイヤー１＝プレイヤー２
// の時引き分けを表示する

// 違う場合プレイヤー２を表示する


// サイコロを片方


// 終了





