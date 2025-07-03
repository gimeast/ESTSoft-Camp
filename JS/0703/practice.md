# 250703 과제 

## 1) 클래스 제어
- classList.add()
  - 지정한 클래스 값을 추가한다. 만약 추가하려는 클래스가 엘리먼트의 class 속성에 이미 존재한다면 무시한다.
- classList.remove()
  - 지정한 클래스 값을 제거한다.
- classList.contains()
  - 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인한다.
- classList.toggle()
  - 하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환한다.
  - 두번째 인수가 있을 때: 두번째 인수가 true로 평가되면 지정한 클래스 값을 추가하고 false로 평가되면 제거한다.
```js 
const div = document.createElement("div");
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");
div.classList.contains("foo");
div.classList.toggle("visible", i < 10);
```

## 2) 요소의 크기/위치
- getBoundingClientRect()
  - 엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공하는 DOMRect 객체를 반환합니다.
  - 반환 값은 padding과 border-width를 포함해 전체 엘리먼트가 들어 있는 가장 작은 사각형인 DOMRect 객체입니다. left, top, right, bottom, x, y, width, height 프로퍼티는 전반적인 사각형의 위치와 크기를 픽셀 단위로 나타냅니다. width와 height가 아닌 다른 프로퍼티는 뷰포트의 top-left에 상대적입니다.
- offsetLeft
  - 읽기 전용 속성이다
  - 현재 요소의 왼쪽 상단 모서리가 HTMLElement.offsetParent 노드 내에서 왼쪽으로 얼마나 떨어져 있는지를 픽셀 수로 반환합니다.
  - 블록 레벨 요소의 경우 offsetTop, offsetLeft, offsetWidth, offsetHeight는 offsetParent를 기준으로 요소의 테두리 상자를 설명합니다.
  - 인라인 레벨 요소의 경우 offsetTop과 offsetLeft는 첫 번째 테두리 상자의 위치를 설명하고 (너비와 높이를 가져오기 위해 Element.getClientRects() 사용), offsetWidth와 offsetHeight는 경계 테두리 상자의 치수를 설명합니다 (위치를 가져오기 위해 Element.getBoundingClientRect() 사용). 따라서 왼쪽, 위쪽, 너비, 높이가 offsetLeft, offsetTop, offsetWidth, offsetHeight인 상자는 텍스트로 감싸진 span의 경계 상자가 되지 않습니다.
- offsetTop
  - 읽기 전용 속성
  - 현재 요소의 바깥쪽 테두리(여백 포함)부터 가장 가까운 위치 지정된 상위 요소인 offsetParent의 위쪽 패딩 가장자리까지의 거리를 반환합니다.

## 3) 속성 제어
- getAttribute
  - 요소의 지정된 속성 값을 반환합니다.
- setAttribute
```html
<div id="div1">Hi Champ!</div>
<script >
const div1 = document.getElementById("div1");
// <div id="div1">Hi Champ!</div>

const exampleAttr = div1.getAttribute("id");
// "div1"

const align = div1.getAttribute("align");
// null
</script>
```

## 4) dataset 으로 접근하기
- 요소의 사용자 데이터 특성 (data-*)에 대한 읽기/쓰기 접근을 제공합니다. 이 속성은 각 data-* 특성에 대해 문자열 맵 (DOMStringMap)을 노출합니다.
- HTML data-* 특성과 이에 대응하는 DOM dataset.property는 접근되거나 작성되는 방식에 따라 공유된 특성명이 변경됩니다.
- data-* 속성은 표준이 아닌 속성이나 추가적인 DOM 속성과 같은 다른 조작을 하지 않고도, 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있게 도와줍니다.
```html
<style>
  article::before {
    content: attr(data-parent);
  }
  article[data-columns="3"] {
    width: 400px;
  }
  article[data-columns="4"] {
    width: 600px;
  }
</style>
<article
        id="electriccars"
        data-columns="3"
        data-index-number="12314"
        data-parent="cars">
    ...
</article>
<script>
    const article = document.querySelector("#electric-cars");
    article.dataset.columns; // "3"
    article.dataset.indexNumber; // "12314"
    article.dataset.parent; // "cars"
</script>
```