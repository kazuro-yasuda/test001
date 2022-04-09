//   ＝＝＝＝＝＝＝＝＝＝
//    ショートコース
//   ================
$(".short-start").on("click", function () {
  // alert(1)

  const random = Math.floor(Math.random() * 4 + 1);
  console.log(random, "ランダムの数字");

  if (random === 1) {
    console.log("銀座・皇居");
    $(".course-result").text("銀座・皇居");
    $(".course-result").html(
      "<p>銀座・皇居</p>" +
        '<img src="ferrari/koukyo.jpeg" alt="銀座・皇居" width="600px">'
    );
  } else if (random === 2) {
    console.log("東京タワー");
    $(".course-result").text("東京タワー");
    $(".course-result").html(
      "<p>東京タワー</p>" +
        '<img src="ferrari/tokyotawer.jpeg" alt="東京タワー" width="600px">'
    );
  } else if (random === 3) {
    console.log("浅草・スカイツリー");
    $(".course-result").text("浅草・スカイツリー");
    $(".course-result").html(
      "<p>浅草・スカイツリー</p>" +
        '<img src="ferrari/asakusa.png" alt="浅草・スカイツリー" width="600px">'
    );
  } else if (random === 4) {
    console.log("お台場・レインボーブリッジ");
    $(".course-result").text("お台場・レインボーブリッジ");
    $(".course-result").html(
      "<p>お台場・レインボーブリッジ</p>" +
        '<img src="ferrari/odaiba.jpeg" alt="お台場・レインボーブリッジ" width="600px">'
    );
  }
});

//   ＝＝＝＝＝＝＝＝＝＝
//    ロングコース
//   ================
$(".long-start").on("click", function () {
  // alert(1)

  const random = Math.floor(Math.random() * 3 + 1);
  console.log(random, "ランダムの数字");

  let view = "";

  if (random === 1) {
    console.log("大黒埠頭PA");
    $(".course-result").text("大黒埠頭PA");
    $(".course-result").html(
      "<p>大黒埠頭</p>" +
        '<img src="ferrari/daikoku.jpeg" alt="大黒埠頭" width="600px">'
    );
  } else if (random === 2) {
    console.log("海ほたる");
    $(".course-result").text("海ほたる");
    $(".course-result").html(
      "<p>海ほたる</p>" +
        '<img src="ferrari/umihotaru.jpeg" alt="海ほたるPA" width="600px">'
    );
  } else if (random === 3) {
    console.log("横浜・大桟橋");
    $(".course-result").text("横浜・大桟橋");
    $(".course-result").html(
      "<p>横浜・大桟橋</p>" +
        '<img src="ferrari/oosanbashi.jpeg" alt="横浜・大桟橋" width="600px">'
    );
  }
});
