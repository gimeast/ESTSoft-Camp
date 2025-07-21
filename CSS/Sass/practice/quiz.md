```scss
// 다음 코드의 컴파일 결과를 예측하세요
$base-size: 16px;
$multiplier: 1.5;
$columns: 12;

.container {
  font-size: $base-size * $multiplier; //24px
  width: 1200px / $columns; //100px
  margin: (20px / 2) + 5px; //15px
}
```
```scss
// 각 .box의 color 값을 예측하세요
$color: blue;

.box1 {
  color: $color; //blue
}

.wrapper {
  $color: red; 
  
  .box2 {
    color: $color; //red
  }
}

.box3 {
  color: $color; //blue
}
```

```scss
// nth() 함수를 사용한 결과를 예측하세요
$colors: red, green, blue, yellow, orange;
$sizes: 10px 20px 30px 40px;  // 공백으로 구분된 리스트

.element {
  color: nth($colors, 3); //blue
  background: nth($colors, -1); //orange
  padding: nth($sizes, 2); //20px
  margin: nth($sizes, 1) nth($sizes, 4); //10px 40px
}
```

```scss
// 다음 연산의 결과를 예측해보세요.
100px + 50px;      // ? 150
100px + 5rem;      // ? error
100px * 2;         // ? 200
100px * 2px;       // ? error
100% - 30px;       // ? calc(100%, -30px)
(100px / 20px);    // ? 5
```

```scss
// .result의 각 속성값을 예측하세요
$number: 100;
$unit-number: 50px;
$color: #333;
$string: 'hello';

.container {
  $number: 200 !global;
  $local-var: 300px;
  
  .inner {
    $unit-number: 75px; 
  }
}

.result {
  content: $string; //'hello'
  width: $number * 1px; //200px
  height: $unit-number; //50px
  color: $color; //#333
  // margin: $local-var;  // 이 줄의 주석을 제거하면? // error
}
```

```scss
// 각 속성의 컴파일 결과를 예측하세요
$prefix: 'btn';
$size: 20;
$unit: 'px';

.button {
  class-name: $prefix + $size; //"btn20"
  width: #{$size}#{$unit}; //20px
  height: #{$size * 2}px; //40px
  margin: $size + $unit; //"20px"
}
```