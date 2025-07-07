class Robot {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`삐빅- 저는 ${this.name}입니다.`);
    }
    move() {
        console.log(`${this.name}이 이동 중 입니다.`);
    }
}

//1. 기존방식
class PwRobot extends Robot {
    constructor(name, password) {
        super(name);
        this.password = password;
    }

    login(password) {
        if (password === this.password) {
            console.log(`${this.name} 접속 성공`);
        } else {
            console.log(`${this.name} 접속 실패`);
        }
    }
}

const pwRobot = new PwRobot("로봇캣", "1234");
pwRobot.introduce();
pwRobot.login("1234"); //접속성공

//문제상황: 외부에서 비밀번호 접근/수정이 가능
console.log(pwRobot.password);
pwRobot.password = "0000";
pwRobot.login("1234"); //접속실패

//2. 비공개 프로버티 방식
class SafeRobot extends Robot {
    #password;

    constructor(name, password) {
        super(name);
        this.#password = password;
    }

    login(password) {
        if (password === this.#password) {
            console.log(`${this.name} 접속 성공`);
        } else {
            console.log(`${this.name} 접속 실패`);
        }
    }

    get password() {
        return this.#password;
    }
    set password(newPassword) {
        this.#password = newPassword;
    }
}

const safeRobot = new SafeRobot("안전한 로봇", "1234");
safeRobot.introduce();
safeRobot.login("1234");
console.log(safeRobot);
// safeRobot.#password = "000"; //Uncaught SyntaxError: Private field '#password' must be declared in an enclosing class
safeRobot.password = "000";
safeRobot.login("000");
console.log(safeRobot);

//정리
//1. #을 이용한 비공개 프로퍼티 사용 -> 직접 접근을 막기 위함
//2. get, set을 사용해서 필요한 경우에만 간접 접근 허용
//3. 사용자나 협업자가 혼동되지 않도록 주석, 설명 남기는 것이 중요
