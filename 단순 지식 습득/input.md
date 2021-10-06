https://hianna.tistory.com/411

html input 태그로받은걸 출력하는 방법!!
하나만 할때!
html에서 input id를 지정, onChange = "출력함수()", 출력할 곳(id도같이)
js에서   const 출력함수=()=>{
         let 변수 = document.getElementById('id이름').value;
         document.getElementById('출력 id').innerText = 변수;
         }
