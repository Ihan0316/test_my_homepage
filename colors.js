function nightDayHandler(self) {
    var target = document.querySelector('body');
    var article = document.getElementById('article'); // article 요소 선택
    var headings = article.querySelectorAll('h2, p'); // article 내부의 h2, p 태그 선택
    var links = document.querySelectorAll('a'); // 모든 a 태그 선택

    if (self.value === 'night') {
        // body와 article 스타일 변경
        toggleColors(target, 'black', 'white');
        toggleColors(article, 'gray', 'white');
        self.value = 'day';

        // a 태그와 article 내부 h2, p 태그 글씨 색 변경
        changeTextColor(links, 'white'); // a 태그는 흰색으로
        changeTextColor(headings, 'white'); // h2, p 태그는 흰색으로

    } else {
        // body와 article 스타일 원래대로 복구
        toggleColors(target, 'white', 'black');
        toggleColors(article, 'white', 'black');
        self.value = 'night';

        // a 태그와 article 내부 h2, p 태그 글씨 색 복구
        changeTextColor(links, '#007aff'); // a 태그는 애플 스타일 파란색으로
        changeTextColor(headings, 'black'); // h2, p 태그는 검정색으로
    }
}

// 요소의 배경색과 글씨 색을 바꾸는 함수
function toggleColors(element, bgColor, textColor) {
    element.style.backgroundColor = bgColor;
    element.style.color = textColor;
}

// 여러 요소들의 글씨 색을 바꾸는 함수
function changeTextColor(elements, color) {
    elements.forEach(function (el) {
        el.style.color = color;
    });
}
