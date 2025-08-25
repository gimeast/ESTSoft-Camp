type Student = {
    name: string;
    grade: number;
    age: number;
};

type Athlete = {
    sport: string;
    level: number;
    age: string;
};

// 학생이면서 운동선수인 타입
function printStudentAthlete(student: Student, athlete: Athlete) {
    console.log(student);
    console.log(athlete);
}

function printStudentAthlete2(student: Student & Athlete) {
    console.log(student);
}

printStudentAthlete(
    { name: "licat", grade: 3, age: 1 },
    { sport: "soccer", level: 5, age: 1 }
);
printStudentAthlete2({
    name: "licat",
    grade: 3,
    sport: "soccer",
    level: 5,
    age: "1",
});
