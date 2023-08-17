// 自動フェードインで切り替わるスライドパターン
$(function () {
    ////////// スライドの現在値と最終スライド番号を変数化 //////////
    var slideCurrent = 0; // スライド現在値（1枚目のスライド番号としての意味も含む）
    var lastCurrent = $('.fade-list').length - 1; // スライドの合計数＝最後のスライド番号
    //////// 初期スライドだけ表示 //////////
    $('.fade-list').css('display', 'none'); // 一旦すべてのスライドを非表示
    $('.fade-list').eq(slideCurrent).css('display', 'block'); // 最初のスライドを表示
    ////////// スライドの切り替わりを「changeslide」として定義(ボタンで取得したスライド番号で変化させる) //////////
    function changeslide() {
      $('.fade-list').fadeOut(1000); // 現在のスライドをフェードアウトさせる
      $('.fade-list').eq(slideCurrent).fadeIn(1000); // 次のスライドを表示させる
      //////// 現在のページに合わせてページネーションを変化させる
      var pagiNation = slideCurrent + 1; // nth-of-typeで1枚目もカウントとるためスライド数を修正して変数代入
      // targetクラスを削除
      $('.pagination-circle').removeClass('target');
      // 現在のボタンにtargetクラスを追加
      $(".pagination-circle:nth-of-type(" + pagiNation + ")").addClass('target');
    };
    //////// 自動スライド切り替えのタイマーを設定 //////////
    var Timer;
    // 一定時間毎に処理実行する「startTimer」関数を定義
    function startTimer() {
      Timer = setInterval(function () { // setInterval・・・指定した時間ごとに関数を実行
        if (slideCurrent === lastCurrent) { // 現在のスライドが最終スライドの場合
          slideCurrent = 0;
          changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
        } else {
          slideCurrent++;
          changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
        };
      }, 4000); // 上記動作を4秒毎に
    }
    // 「startTimer」関数を止める「stopTimer」関数を定義
    function stopTimer() {
      clearInterval(Timer); // clearInterval・・・setIntervalで設定したタイマーを取り消す
    }
    //////// 自動スライド切り替えタイマーを発動
    startTimer();
    ////////// ボタンを押すとchangeslide関数が発動 //////////
    // NEXTボタン
    $('.js-btn-next').click(function () {
      // 動いているタイマーをストップして再度タイマーを動かし直す（こうしないとページ送り後の時間間隔がズレる）
      stopTimer();
      startTimer();
      if (slideCurrent === lastCurrent) { // 現在のスライドが最終スライドの場合
        slideCurrent = 0;
        changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
      } else {
        slideCurrent++;
        changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
      };
    });
    // BACKボタン
    $('.js-btn-back').click(function () {
      // 動いているタイマーをストップして再度タイマーを動かし直す（こうしないとページ送り後の時間間隔がズレる）
      stopTimer();
      startTimer();
      if (slideCurrent === 0) { // 現在のスライドが初期スライドの場合
        slideCurrent = lastCurrent;
        changeslide(); // 最終スライド番号を代入して関数実行（最後のスライドに移動）
      } else {
        slideCurrent--;
        changeslide(); // そうでなければスライド番号を減らして（前のスライドに切り替え）関数実行
      };
    });
  });

  //レスポンシブスライド//
$(function () {
  ////////// スライドの現在値と最終スライド番号を変数化 //////////
  var slideCurrent = 0; // スライド現在値（1枚目のスライド番号としての意味も含む）
  var lastCurrent = $('.sp-fade-list').length - 1; // スライドの合計数＝最後のスライド番号
  //////// 初期スライドだけ表示 //////////
  $('.sp-fade-list').css('display', 'none'); // 一旦すべてのスライドを非表示
  $('.sp-fade-list').eq(slideCurrent).css('display', 'block'); // 最初のスライドを表示
  ////////// スライドの切り替わりを「changeslide」として定義(ボタンで取得したスライド番号で変化させる) //////////
  function changeslide() {
    $('.sp-fade-list').fadeOut(1000); // 現在のスライドをフェードアウトさせる
    $('.sp-fade-list').eq(slideCurrent).fadeIn(1000); // 次のスライドを表示させる
    //////// 現在のページに合わせてページネーションを変化させる
    var pagiNation = slideCurrent + 1; // nth-of-typeで1枚目もカウントとるためスライド数を修正して変数代入
    // targetクラスを削除
    $('.pagination-circle').removeClass('target');
    // 現在のボタンにtargetクラスを追加
    $(".pagination-circle:nth-of-type(" + pagiNation + ")").addClass('target');
  };
  //////// 自動スライド切り替えのタイマーを設定 //////////
  var Timer;
  // 一定時間毎に処理実行する「startTimer」関数を定義
  function startTimer() {
    Timer = setInterval(function () { // setInterval・・・指定した時間ごとに関数を実行
      if (slideCurrent === lastCurrent) { // 現在のスライドが最終スライドの場合
        slideCurrent = 0;
        changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
      } else {
        slideCurrent++;
        changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
      };
    }, 4000); // 上記動作を4秒毎に
  }
  // 「startTimer」関数を止める「stopTimer」関数を定義
  function stopTimer() {
    clearInterval(Timer); // clearInterval・・・setIntervalで設定したタイマーを取り消す
  }
  //////// 自動スライド切り替えタイマーを発動
  startTimer();
  ////////// ボタンを押すとchangeslide関数が発動 //////////
  // NEXTボタン
  $('.js-btn-next').click(function () {
    // 動いているタイマーをストップして再度タイマーを動かし直す（こうしないとページ送り後の時間間隔がズレる）
    stopTimer();
    startTimer();
    if (slideCurrent === lastCurrent) { // 現在のスライドが最終スライドの場合
      slideCurrent = 0;
      changeslide(); // スライド初期値の値を代入して関数実行（初めのスライドに戻す）
    } else {
      slideCurrent++;
      changeslide(); // そうでなければスライド番号を増やして（次のスライドに切り替え）関数実行
    };
  });
  // BACKボタン
  $('.js-btn-back').click(function () {
    // 動いているタイマーをストップして再度タイマーを動かし直す（こうしないとページ送り後の時間間隔がズレる）
    stopTimer();
    startTimer();
    if (slideCurrent === 0) { // 現在のスライドが初期スライドの場合
      slideCurrent = lastCurrent;
      changeslide(); // 最終スライド番号を代入して関数実行（最後のスライドに移動）
    } else {
      slideCurrent--;
      changeslide(); // そうでなければスライド番号を減らして（前のスライドに切り替え）関数実行
    };
  });
});

  if ((navigator.userAgent.indexOf('iPhone') > 0) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    document.write('<meta name="viewport" content="width=device-width,user-scalable=no,maximum-scale=1" />');
}else{
    document.write('<meta name="viewport" content="width=980, user-scalable=yes,">');
}

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-12925697-30');

$(function(){
  fade('.toggleWrap');
});

function fade(elm){
  var $fade = $(elm),
      $body = $('body');

  $fade.addClass('hide');


  $('#toggle').on('click', function(){
    $fade.toggleClass('hide').addClass('animation');
    $('.trigger').toggleClass('active');

    if ($fade.hasClass('hide')) {
      $body.removeClass('no-scroll').off('.noScroll');
    } else {

      $body.addClass('no-scroll').on('touchmove.noScroll', function(e){
        e.preventDefault();
      });
    }
  });
}

jQuery(function() {
  var appear = false;
  var pagetop = $('#page-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {  //150pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '0' //下から0の位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});
