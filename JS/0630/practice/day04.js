// every와 some을 이용해서 풀어보기

let ages = [23, 17, 15, 34, 50, 5];

// Quiz 1. 모든 성인인지 확인하기(성인판단기준 18세이상) '모두성인입니다.' 또는 '성인이 아닌사람이 있습니다' every이용
console.log(
    ages.every((v) => v >= 18)
        ? "모두성인입니다."
        : "성인이 아닌사람이 있습니다."
);
// Quiz 2. 미취학 아동이 있는지 확인하기(미취학 아동은 6세이하) '미취학아동이 있습니다', 또는 '미취학 아동이 없습니다' some이용
console.log(
    ages.some((v) => v <= 6)
        ? "미취학아동이 있습니다"
        : "미취학 아동이 없습니다"
);

const scores = [32, 85, 73, 50, 3, 93];
// Quiz 3. scores의 점수를 모두 더해서 총점을 구하세요
console.log(scores.reduce((acc, cur) => acc + cur));
// Quiz 4. scores의 평균을 구하세요
console.log(scores.reduce((acc, cur) => acc + cur) / scores.length);
// Quiz 5. scores를 오름차순으로 정렬하세요 [ 3, 32, 50, 73, 85, 93 ]
console.log(scores.sort((a, b) => a - b));

// Quiz 6. 1부터 50까지 더하여 결과를 출력하세요(Array(n).fill().map() 이용하기)
console.log(
    Array(50)
        .fill(0)
        .map((v, idx) => idx + 1)
        .reduce((acc, cur) => acc + cur)
);

const today = new Date();
// Quiz 7. 오늘이 주말인지 평일인지 구하여 출력하세요
console.log(today.getDay() === 0 || today.getDay() === 6 ? "주말" : "평일");

const animals = ["puppy", "cat", "fox"];

// Quiz 8. puppy와 cat 사이에 'parret'과 'rabbit'을 추가하세요
animals.splice(1, 0, "parret", "rabbit");
console.log(animals);

// Quiz 9. animals 변수의 값을 거꾸로 출력하세요 ['fox','cat','rabbit','parret','puppy']
console.log(animals.reverse());

const str = "Hello";
// Quiz 10. str문자를 배열로 반환하시오 -> ['H','e','l','l','o]
console.log(new Array(...str));

const arr = ["Today", "is", "Monday", "!"];
// Quiz 11. arr를 문자열로 만들되 사이에 공백을 넣어서 작성하세요 'Today is Monday !'
console.log(...arr);
