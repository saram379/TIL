//행렬을 받아서 그냥 나타내는 프로그램
let input = prompt("왼쪽에서 오른쪽으로 읽어가며 행렬을 적어주세요(띄어쓰기로 구분) \n a b   ->  a b c d \n c d","");
input_1 = input.split(" "); //1차원배열로 정렬됨
//console.log(input_1);

//2차원배열로 나타내기
var a = input_1[0];
var b = input_1[1];
var c = input_1[2];
var d = input_1[3];
if(input_1.length == 4){
    matrix = [[a,b],[c,d]];
};

document.write('|\n', a, '\n', b,'\n|', "<br>",'|\n', c, '\n', d, '\n|',);
console.table(matrix);
