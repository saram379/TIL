const printMatrixA = () => {
    let matrix=document.getElementsByClassName('inputmatrix')[0].value;
    document.getElementById('resultA').innerText=matrix;
}
const printMatrixB = () => {
    let matrix = document.getElementsByClassName('inputmatrix')[1].value;
    document.getElementById('resultB').innerText = matrix;
}