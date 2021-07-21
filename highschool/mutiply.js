function multiply(a, b) {
  var arows = a.length, acols = a[0].length, //행렬의 행, 열 개수를 파악 a[0]은 0번째 행과관련된 열 제공
      brows = b.length, bcols = b[0].length,
      m = new Array(arows);  // a의 행 개수만큼을 인덱스로 가지는 새로운 배열을 만들어
  for (var r = 0; r < arows; ++r) { //m에 arows까지 행을 넣어줄건가보지
    m[r] = new Array(bcols); // 행이 만들어진거에 열을 집어넣는 배열
    for (var c = 0; c < bcols; ++c) { //bcols길이까지 열을 넣어
      m[r][c] = 0;             // 그걸 다 0으로 만들어?!?
      for (var i = 0; i < acols; ++i) {//다시 acols까지 값을 넣어
        m[r][c] += a[r][i] * b[i][c];//그래서 잘 하면 돼 아하 굉장히 복잡하구나ㅏㅏ
      }
    }
  }
  return m;
}

function display(m) {
  for (var r = 0; r < m.length; ++r) {
    document.write("&nbsp;&nbsp;"+m[r].join(" ")+"<br />");
  }
}

var a = [[1, 2], [3, 4], [5, 6]],
    b = [[1, 2, 3], [4, 5, 6]];
document.write("행렬 A:<br />");
display(a);
document.write("행렬 B:<br />");
display(b);
document.write("A * B =<br />");
display(multiply(a, b));