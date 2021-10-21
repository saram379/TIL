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
