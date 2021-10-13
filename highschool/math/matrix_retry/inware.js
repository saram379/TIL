const printMatrixA = () => {
    let matrix=document.getElementsByClassName('inputmatrix')[0].value;
    document.getElementById('resultA').innerText=matrix;
}
const printMatrixB = () => {
    let matrix = document.getElementsByClassName('inputmatrix')[1].value;
    document.getElementById('resultB').innerText = matrix;
}
const printMatrix = () => {
    let Arow = document.getElementById('Arow').value;
    let Acol = document.getElementById('Acol').value;
    let Brow = document.getElementById('Brow').value;
    let Bcol = document.getElementById('Bcol').value;
}