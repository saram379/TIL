//기본적인 행렬 연산

//행렬의 덧셈(원하는 만큼 행렬 받아 들이고 더하자!) 정사각행렬만 할거야 귀찮으니까ㅇㅇ

//행렬 A
let input_1 = prompt("왼쪽에서 오른쪽으로 읽어가며 첫번째 정사각행렬을 입력해주세요(열은 띄어쓰기로 구분) \n a b   ->  a b c d \n c d", "");
arr1 = input_1.split(" "); //1차원배열로 정렬됨
len1 = arr1.length;
var m1 = [];
if (Math.sqrt(len1) % 1 == 0) {
    while (arr1.length) {
        m1.push(arr1.splice(0, len1 / Math.sqrt(len1)));//push와 splice 뜻 설명이 필요하겠군..
    }
    console.log(m1);
}
else {
    alert("정사각행렬을 입력해주세요!");
}

//행렬 B
let input_2 = prompt("왼쪽에서 오른쪽으로 읽어가며 두번째 정사각행렬을 입력해주세요(열은 띄어쓰기로 구분) \n a b   ->  a b c d \n c d", "");
arr2 = input_2.split(" "); //1차원배열로 정렬됨
len2 = arr2.length;
var m2 = [];
if (Math.sqrt(len2) % 1 == 0) {
    while (arr2.length) {
        m2.push(arr2.splice(0, len2 / Math.sqrt(len2)));//push와 splice 뜻 설명이 필요하겠군..
    }
    console.log(m2);
}
else {
    alert("정사각행렬을 입력해주세요!");
}


var summatrix = new Array();
for (var i = 0; i < m1.length; i++) {
    summatrix[i] = [];
    for (var j = 0; j < m2.length; j++) {
        summatrix[i][j] = m1[i][j] - (-1 * m2[i][j]);
    }
}
console.log(summatrix);

//html에 보이게 하는 함수
function display(m) {
    for (var r = 0; r < m.length; ++r) {
      document.write("&nbsp;&nbsp;"+m[r].join(" ")+"<br />");
    }
  }
  
display(summatrix);