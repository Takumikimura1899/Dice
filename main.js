// 変数player1,2Btnに各id要素を取得する宣言
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
// 変数resultにidresultを取得する宣言
const result = document.getElementById('result');

// 変数setPlayer1,2diceに各idを取得する宣言
const setPlayer1dice = document.getElementById('setPlayer1dice');
const setPlayer2dice = document.getElementById('setPlayer2dice');

//変数player1Num,player2Numに値１を入れて宣言する。いらない。
// let player1Num = 1
// let player2Num = 1

// 値が入ってないけど定義されている＝null　値もなく定義もされていない状態＝undefined
// 変数player1Timer,player2Timer,player1Stop,player2Stopを定義する。値＝nullとなる。
let player1Timer,player2Timer
let player1Stop
let player2Stop

//アロー関数を使用する
//無名関数にfunc１という名前をつけて宣言する。
const func1 = () => {
    // consoleに文字列'start1'を表示する。(機能上必要ない)
    console.log('start1');
    // player1Btn.disabledの値をnullからtrueにして押せなくする。(attributeか？)<=多分最初からdisabled属性=nullが定義されている。
    player1Btn.disabled = true;
    // resultのtextContent(本文)を文字列"???"に書き換える
    result.textContent = "???";
    // player1Stop変数の値をtrueにする　動いているかをみる
    // player1Stop = true;()　<=これは必要なさそう

    // player1Timerのアロー関数をsetInterval(関数,処理間隔)で囲んである
    // player1TimerはsetIntervalが動いているという状態を保持しておくための変数になります。
    // ちなみにplayer1Timerには数値がはいっており、
    // その動いているsetIntervalのidが数値で入っています。
    player1Timer = setInterval(() => {
        player1Num = Math.floor(Math.random() * 6 + 1);
        setPlayer1dice.setAttribute("src", `./img/saikoro${player1Num}.png`)
    }, 100);
    // 以上の解説
    // １.Math.random()は０～１未満をランダムで生成＊６で０～５．９９・・・にして１＋して１～６．９９・・・にする
    // 2.Math.floor()で囲むことにより、小数点以下を切り捨て１～６を生成する
    // 3.変数player1Numに代入する。(1~6をランダム生成)
    // 4.変数set1Player1diceにsetAttribute()でsrc属性imgを上書きする
    //   `./img/saikoro${player1Num}.png`で変数player1Numが1~6の数字をランダム生成するのでその数字のサイコロが表示される
    // 5.setInterval(player1Num,100)となり、player1Numの処理が0.1秒間隔で実行される。
    //   setInterval()は一定時間毎に処理を繰り返すメソッド
    // 6.変数player1Timerの値がこの値になる
    

    // 3秒後に目を止める処理を行う関数を作成する
    // setTimeout(アロー関数,3000(～ミリ秒後処理実行))という構図　↑と一緒
    // setTimeout()は一定時間後に一度だけ関数による処理を実行するメソッド
    setTimeout(() => {
        // clearInterval()は処理をキャンセルするためのメソッド
        clearInterval(player1Timer);
        // player1Stopの値をfalseにする。　falseで止まったかを見ている。
        player1Stop = false;

        // player1Stopとplayer2Stopの値がfalseになったときに起動(trueになる)するif文を作成。つまり両方のサイコロが止まった時。
        if(player1Stop === false && player2Stop === false) {
            // コンソールにplayer1Num,player2Numを出力(画面上必要ない)
            console.log(player1Num,player2Num);
            // if else文で勝敗判別(3パターン)
            if(player1Num > player2Num) {
                result.textContent = "player1の勝ち";
            } else if (player1Num === player2Num) {
                result.textContent = "引き分け";
            } else {
                result.textContent = "player2の勝ち"
            };
            //以上の処理後、 player1,2Btn.disabled(属性)の値をfalseにする。つまりクリック出来るようになる。
            player1Btn.disabled = false;
            player2Btn.disabled = false;
            // player1,2Stopの値をfalseからnullに変更する。これで次にサイコロのどちらかを起動したときに勝敗判別を行わなくなる。
            player1Stop = null
            player2Stop = null    
        }
    },3000)
    // 以上の処理をまとめると、
    // 1.clearIntervalでplayer1Timerの処理をキャンセルする。つまりランダムで変わっていたサイコロが止まる。
    // 2.player1Stopの値をtrueからfalseにする。
    // 3.player1,2Stopの値がfalse(両方のサイコロが止まった状態)の時に起動するif else文により勝敗判別
    // 4.勝敗判別終了後(正しくは同時)にplayer1,2Btnの値をfalseにする。クリック可能になる。
    // 5.player1,2Stopの値をnullにする。どちらかのサイコロを起動したときに勝敗判別を行わなくなる。
    // 6.これらの関数をsetTimeout(アロー関数,3000)により、3秒後起動するようにする。
}
// func1の処理
// 1.player1Btnが押せなくなる。
// 2.resultのtextContentが???になる。
// 3.player1Timerが0.1秒毎に1~6の数字をランダム生成する。

// 4.setIntervalによって以下の関数を3秒後に1度だけ実行する。
// 4-1.clearInterval(player1Timer)でランダム生成処理をキャンセル。
// 4-2.player1Stopの値をfalseにする。止まったと判別するため。
// 4-3.if else文により両方のサイコロがfalseになった状態の時に勝敗判別とボタンの復帰、勝敗判別の初期化を行う。


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
// func1と同様

// player1BtnにaddEventListener(イベント内容,関数)でクリック時に関数func1を実行するようにする。
player1Btn.addEventListener('click', func1)
// player2BtnにaddEventListener(イベント内容,関数)でクリック時に関数func2を実行するようにする。
player2Btn.addEventListener('click', func2)



// ↓以下学習開始時に作成したフロー
// 実行
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
// 終了





