//행렬을 받아서 그냥 나타내는 프로그램
let input = prompt("왼쪽에서 오른쪽으로 읽어가며 정사각행렬을 입력해주세요(열은 띄어쓰기로 구분) \n a b   ->  a b c d \n c d", "");
input_1 = input.split(" "); //1차원배열로 정렬됨
len = input_1.length;
function mdm(){//makedimension matrix임;; 
    const matrix = [];
    while (input_1.length) {
        matrix.push(input_1.splice(0, len / Math.sqrt(len)));//push와 splice 뜻 설명이 필요하겠군..
    }
    console.log(matrix);
}
if (Math.sqrt(len) % 1 == 0) {
    mdm();
}
else {
    alert("정사각행렬을 입력해주세요!");
}

//화면에 보여주기
    