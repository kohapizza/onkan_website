'use strict'
// Please don't delete the 'use strict' line above

//カウントダウン

function set2fig(num){
    //数値が1桁だったら2桁にして返す
    let ret;
    if(num < 10){
        ret = "0" + num; 
    } else {
        ret = num;
    }
    return ret;
}

//ページの読み込みが完了したら実行
document.addEventListener("DOMContentLoaded", function(){
    //開催日時を数値化
    let targetDate = new Date(2024, 0, 6, 11); 
    // Year / Month / Day / Hour
    let dnumTarget = targetDate.getTime();

function showCountDown(){
    //カウントダウン要素の取得
    let countdown = document.getElementById("countdown");

    //現在日時を数値化
    let nowDate = new Date();
    let dnumNow = nowDate.getTime();
    
    // 表示を準備
    //let dlYear  = targetDate.getFullYear();
    //let dlMonth = targetDate.getMonth() + 1;
    //let dlDate  = targetDate.getDate();
    //let dlHour  = targetDate.getHours();
    //let dlMin   = targetDate.getMinutes();
    //let dlSec   = targetDate.getSeconds();

    //開催日までの時間を計算
    let diff2Dates = dnumTarget - dnumNow;

    if(diff2Dates > 0){
        //残り時間がある場合カウントダウンを表示
        let dDays = Math.floor(diff2Dates / ( 1000 * 60 * 60 * 24 )); // 日数
        diff2Dates = diff2Dates % ( 1000 * 60 * 60 * 24 );
        let dHour = Math.floor(diff2Dates / ( 1000 * 60 * 60 )); // 時間
        diff2Dates = diff2Dates % ( 1000 * 60 * 60 );
        let dMin = Math.floor(diff2Dates / ( 1000 * 60 )); // 分
        diff2Dates = diff2Dates % ( 1000 * 60 );
        let dSec = Math.floor(diff2Dates / 1000); // 秒
        
        //表示
        countdown.innerHTML = Math.floor(dDays) + " DAYS " + Math.floor(dHour) + " HOURS " + Math.floor(dMin) + " MINS " + Math.floor(dSec) + " SECS!!";
    }else{
        countdown.innerHTML = "Event was over!";
    }

}

//ページ読み込み時にカウントダウンを表示
showCountDown();

//1秒ごとにカウントダウンを更新
setInterval(showCountDown,1000);

});

$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    responsive: [
      {
      breakpoint: 769,//モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 2,//スライドを画面に2枚見せる
        slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
      }
    },
    {
      breakpoint: 426,//モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1,//スライドを画面に1枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
      }
    }
  ]
  });


//文字読み込み
$(function(){
    $('.section-info-home__heading').on('inview', function(event, isInView){
        if(isInView){
            $(this).addClass('fadeInDown');
        }else{
            $(this).removeClass('fadeInDown');
            $(this).css('opacity',0); //非表示にしておく
        }
    });
});