var now = new Date();
function LoadProc() {
  var target = document.getElementById("Today");
  var Year = now.getFullYear();
  var Month = now.getMonth() + 1;
  var Date = now.getDate();
  target.innerHTML = Year + "年" + Month + "月" + Date + "日　乱数競馬場";
}

document.getElementById("buy").onclick = function () {
  var arr = [];
  var select = document.getElementById("tousu");

  for (var num = 1; num <= select.value; num++) {
    arr.push(num);
  }

  var l = arr.length;

  //Fisher–Yates shuffle
  while (l) {
    var j = Math.floor(Math.random() * l);
    var t = arr[--l];
    arr[l] = arr[j];
    arr[j] = t;
  }

  for (var i = 0; i <= 2; i++) {
    console.log(arr[i]);
    if (i == 0) {
      var first = document.getElementById("1chaku");
      first.textContent = arr[i];
    }
    if (i == 1) {
      var second = document.getElementById("2chaku");
      second.textContent = arr[i];
    }
    if (i == 2) {
      var third = document.getElementById("3chaku");
      third.textContent = arr[i];
    }
  }

  //組み合わせ数ジョーク用
  var random = Math.floor(Math.random() * 99999) + 1;
  random = random * 100;
  var joke = document.getElementById("kumijoke");
  joke.innerHTML = "組み合わせ数１　" + random + "枚　" + random * 10 + "円";
};

$(function () {
  $(".numbers").hide();
  $("#kumijoke").hide();

  $("#buy").click(function () {
    $(".numbers").hide().fadeIn();
    $("#kumijoke").hide().fadeIn();
  });
});
