#자바스크립트의 클래스
MDN web docs, Classes, 검색일:210830 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes
자바스크립트 클래스 만드는 법, 검색일: 210830 https://webclub.tistory.com/136
클래스 = 생성자 함수
연관있는 변수와 함수를 묶어서 표현할 때 사용
객체 단위로 코드를 그룹화하고 재사용하기 위해서 존재

1 함수 vs 클래스
  함수
    기능 단위의 코드를 그룹화
    특정기능하는 변수와 알고리즘을 묶음
  클래스
    객체 단위의 변수와 함수 묶음 ==> 객체 단위의 중복 코드를 제거할 수 있다
2 클래스 만들기
  1) 리터럴 방식
      var 인스턴스 = {
        프로퍼티1 : 초기값,
        프로퍼티2 : 초기값,
        메서드1 : function() {
        },
        메서드2 : function() {
        }
      }

   2) 함수 방식
      function 클래스이름() {
        this.프로퍼티1 = 초기값;
        this.프로퍼티2 = 초기값;
        this.메서드1 = function() {
       }
        this.메서드2 = function() {
       }
      }

      var 인스턴스 = new 클래스이름();
      
    3) 프로토타입 방식
      function 클래스이름() {
        this.프로퍼티1 = 초기값;
        this.프로퍼티2 = 초기값;
      }

      클래스이름.prototype.메서드1 = function() {

      }

      클래스이름.prototype.메서드2 = function() {

      }
*클래스 인스턴스*
 var 인스턴스 = new 클래스 이름():
 으로 설정함
 사실 인스턴스 == 객체
