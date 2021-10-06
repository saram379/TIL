https://hianna.tistory.com/411

html input 태그로받은걸 출력하는 방법!!
하나만 할때!
html에서 input id를 지정, onChange = "출력함수()", 출력할 곳(id도같이)
js에서   const 출력함수=()=>{
         let 변수 = document.getElementById('id이름').value;
         document.getElementById('출력 id').innerText = 변수;
         }

두개를 한번에 하는건
https://velog.io/@sji7532/JavaScript-React-useState%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%9C-input-%EA%B4%80%EB%A6%AC
여기를 읽어보자. 아직은 ㄴㄴ
