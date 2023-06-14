## 2주차 강의
구글.com 분석
구글.com 구현

## 3주차 강의
깃허브 업로드 
메타데이터와 하이퍼링크 분석
테이블표(TR과 TD) 분석
부트스트랩 적용 및 활용

## 4주차 강의
네비게이션바 추가하여 구글.com 수정
구글.com에 footer 추가(i class를 적용하여 아이콘 추가)
search.js를 활용하여 검색기능 추가
전체메뉴 추가 구현
기타 웹사이트 네이버, 다음, 네이트 사이트 바로가기 설치

## 5주차 강의
꾸글.com 테이블의 색을 검은색으로 수정
주석표현 기능을 활용하여 코드 수정 // 또는 /*   */

## 6주차 강의
팝업창
팝업창에 날짜 추가
검색창이 비었을때는 검색이 되지 않게 수정

## 7주차 강의
일정시간이 지나면 자동으로 닫히는 팝업창 구현
검색 내역 추가 구현

## 8주차 강의
중간고사

## 9주차 강의
로그인 버튼 구현하기
로그인후 팝업창이 뜨지 않게 구현하기
로그아웃 버튼 구현하기

## 10주차 강의
하루에 한번만 열기 라는 팝업창 체크박스 구현
로그인창에서 아이디 기억이라는 아이디 저장 시스템 구현

## 11주차 강의
세션 스토리지 로그인 구현
세션 스토리지 로그아웃 구현
구글.com 암호화와 복호화 수행

## 12주차 강의
자바스크립트를 외부 파일로 연동
메인페이지에 회원가입 버튼 추가

## 13주차 강의 
내 소개 페이지(프로필) 추가 구현
프로필에 배경 사운드 삽입
프로필에 유튜브 영상과 지도 삽입

# 20200960
웹프로그래밍(1) 소스코드
##2023년 3월 29일 깃 허브 테스트 완료


## 3주차 응용문제
<div class="w-auto p-3" style="background-color: #;">
		 <table class="table table-dark table-hover">
			 <caption align="top">현재 검색어 : <p id="search_message"></p></caption>	 
				<tbody class="table-group-divider">
                <tr bgcolor="green">
                    <td class="table-primary" width="50"><b>영화</b>
                    </td>
                    <td width="80" bgcolor="blue">아저씨</td>
                    <td width="80" bgcolor="blue">아저씨</td>
                    <td width="100">어머니</td>
                    <td width="100">할머니</td>
                    <td>할부지</td>
                </tr>				
					<tr bgcolor="red">
                    <td class="table-secondary" width="50"><b>음악</b></td>
                    <td>KPOP</td>
                    <td>JPOP</td>
                    <td>ROCK1</td>
                    <td>ROCK2</td>
					<td rowspan="2">EUROBEAT</td> <! 2행 추가.>
            	    </tr>	
					<tr bgcolor="red">
                    <td colspan="2" width="50">게임</td>
                    <td>LOL</td>
                    <td>WOW</td>
                    <td> SUDDEN</td>
              	    </tr>		
					<tr>
					<td colspan="6" width="100">외부 사이트 링크</td>
					</tr>				
					<tr>
					<td colspan="2"><a href="https://www.naver.com/">네이버</a></td>
						
					<td colspan="2" bgcolor="yellow"><a href="https://www.daum.net/">다음</a></td>

						
					<td colspan="2" bgcolor="purple"><a href="https://www.nate.com/">네이트</a></td>
					</tr>
						
						
          	    </tbody>
       	 </table>
        </div>


// 6주차 필터링
document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = [];
var ban_word_list = ["사자", "호랑이", "뱀"]; // 6주차 필터링 단어 사자, 호랑이, 뱀

console.log(ban_word_list.length);

function search_message() {
    let search_str = document.querySelector("#search_txt"); // 변수에 저장

    var isFiltered = false;

    if (search_str.value.length === 0) {
        alert("검색어가 비었습니다. 입력해주세요");
        isFiltered = true;
    }

    for (var i = 0; i < ban_word_list.length; i++) {
        if (search_str.value === ban_word_list[i]) {
            alert("금칙어 " + ban_word_list[i] + " 이(가) 포함되어있어 검색이 안됩니다.");
            isFiltered = true;
            break;
        }
    }

    if (!isFiltered) {
        alert("검색을 수행합니다!");
        search_array.push(search_str.value);
        if (search_array.length > 2) {
            search_array.shift();
        }
        let text = document.getElementById("search_message").innerHTML = search_array.toString(); //값 변환
        document.querySelector("#form_main").submit();
        console.log(search_str.value);
    }
    console.log(search_array.length);
}


// 7-2 주차 응용문제


var close_time; // 시간 정보
var close_time2 = 10; // 10초 설정

clearTimeout(close_time); // 재호출 정지
close_time= setTimeout("close_window()", 10000);  // 1/1000 초 지정, 바로 시작 
show_time(); // 실시간 시간 보여주기

function show_time(){
        let divClock = document.getElementById('Time');
        divClock.innerText = "남은 시간은"+  close_time2 + "초 입니다" // 10초 삽입 시작 // 7-2주차 응용문제
        close_time2--; // 1초씩 감소
    setTimeout(show_time, 1000);  //1초마다 갱신
}

function close_window() { // 함수 정의
   window.close(); // 윈도우 닫기
}

window.onload=showWindow;



// 9주차 응용문제
function login_check(email, password)
   {
    const emailRegex = /^[a-zA-Z0-9+-_.}+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^(?=.[A-Za-z])(?=.\d)(?=.[@!%#?&])[A-Za-z\d@!%*#?&]{8,}$/;

    if (!emailRegex.test(email))
   {
    return false;
    }

    if (!passwordRegex.test(password))
   {
   return false;
   }
    return true;
   }
   
  //11주차 응용문제
  // 로그인카운트
function login() {
  let form = document.querySelector("#form_main");
  let id = document.querySelector("#floatingInput");
  let password = document.querySelector("#floatingPassword");
  let check = document.querySelector("#idSaveCheck");

  form.action = "index_login.html";
  form.method = "get";

  if (check.checked == true) {
    alert("쿠키를 저장합니다.");
    setCookie("id", id.value, 5/1440); // 5분 유지
    alert("쿠키 값: " + id.value);
  } else 
    setCookie("id", id.value, 0);
  }

  if (id.value.length === 0 || password.value.length === 0) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
  } else if (!login_check(id.value, password.value)) {
    alert("올바른 이메일과 패스워드 형식을 입력해주세요.");
  } else {
    form.action = "../index_login.html";
    form.method = "get";
    session_set();
    form.submit();
    keepSession();
  }

   