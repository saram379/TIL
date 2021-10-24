/** 받아들이는게 젤 어려운걸..
const printMatrixA = () => {
    let matrix = document.getElementsByClassName('inputmatrix')[0].value;
    document.getElementById('resultA').innerText = matrix;
}
const printMatrixB = () => {
    let matrix = document.getElementsByClassName('inputmatrix')[1].value;
    document.getElementById('resultB').innerText = matrix;
}

const printMatrix = () => {
    for (var i = 0; i < matrix.length; i++) {
        let matrix = document.getElementsByClassName('inputmatrix')[i].value;
        document.getElementsByClassName('result')[i].innerText = matrix;
    }
}
**/

m2 = [[1,2],[4,5]]//행렬을 입력받음
m1 = [[2,3],[5,6]]
var m1row=m1.length; var m1col=m1[0].length;
var m2row=m2.length; var m2col=m2[0].length;
const summatrix = (m1,m2) => {
    if(m1row==m2row && m1col==m2col){
        sum = new Array();
        for(let r=0; r<m1row; r++){
            sum[r] = [];
            for(let c=0; c<m1col; c++){
                sum[r][c] = m1[r][c]+m2[r][c];
            }
        }
        return sum;
    }
    else{
        return console.log("행렬의 형태가 같도록 다시 입력해주세요!");
    }
}
const mulmatrix = (m1,m2) => {
    if(m1col==m2row){
        mul = new Array();
        for(let r=0; r<m1row; r++){
            mul[r]=[];
            for(let c=0; c<m2col; c++){
                mul[r][c]=0;
                for(let i=0; i<m1col; i++){
                    mul[r][c]+=m1[r][i]*m2[i][c];
                }
            }
        }
        return mul
    }
    else{
        console.log("앞 행렬의 열과 뒤 행렬의 행이 같도록 다시 입력해주세요!");
    }
}

console.log("합", summatrix(m1,m2));
console.log("곱", mulmatrix(m1,m2));