// 6주차 필터링
document.getElementById("search_btn").addEventListener('click', search_message);

var search_array = [];
var ban_word_list = ["사자", "호랑이", "뱀"]; // 필터링 단어 사자, 호랑이, 뱀

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