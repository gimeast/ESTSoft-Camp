import "./App.css";

function Achievement({ achievement }) {
    return <span className="achievement">{achievement}</span>;
}
function Skill({ skill }) {
    return <span className="skill">{skill}</span>;
}
function Top({ character }) {
    let grade = "";
    let gradeColor = "";

    if (character.level >= 60) {
        grade = "전설";
        gradeColor = "gold";
    } else if (character.level >= 50) {
        grade = "영웅";
        gradeColor = "yellow";
    } else if (character.level >= 40) {
        grade = "고급";
        gradeColor = "green";
    } else if (character.level >= 30) {
        grade = "일반";
        gradeColor = "gray";
    }
    return (
        <>
            <div className="top">
                <h3 className="name">{character.name}</h3>
                <div className="top-right">
                    <span
                        className={character.isOnline ? "active" : "not-active"}
                    ></span>
                    <span className={gradeColor}>{grade}</span>
                </div>
            </div>
        </>
    );
}

function Card({ character }) {
    return (
        <div className="card">
            <div className="img-wrap">
                <img src={character.img} alt="" />
            </div>
            <Top character={character} />
            <div className="detail">
                <dl>
                    <dt>직업:</dt>
                    <dd>{character.class}</dd>
                    <dt>체력:</dt>
                    <dd
                        className={
                            character.health.max / 2 <= character.health.current
                                ? "normal"
                                : "warn"
                        }
                    >
                        {character.health.current}/{character.health.max}
                    </dd>
                    <dt>마나:</dt>
                    <dd>
                        {character.mana.current}/{character.mana.max}
                    </dd>
                    <dt>상태:</dt>
                    <dd>{character.status}</dd>
                    <dt>길드:</dt>
                    <dd>{character.guild}</dd>
                    <dt>스킬:</dt>
                    <dd className="skills">
                        {character.skills.map((skill) => (
                            <Skill key={skill} skill={skill} />
                        ))}
                    </dd>
                    <dt>업적:</dt>
                    <dd className="achievements">
                        {character.achievements.map((achievement) => (
                            <Achievement
                                key={achievement}
                                achievement={achievement}
                            />
                        ))}
                    </dd>
                </dl>
            </div>
        </div>
    );
}

export function GameCharacter() {
    const items = [
        {
            id: 1,
            name: "드래곤 슬레이어 아리아",
            class: "마법사",
            level: 85,
            health: { current: 450, max: 500 },
            mana: { current: 800, max: 800 },
            skills: ["파이어볼", "아이스 스톰", "텔레포트", "치유의 빛"],
            equipment: {
                weapon: "고대의 지팡이",
                armor: "마법사 로브",
                accessory: "지혜의 반지",
            },
            status: "활성",
            guild: "불꽃의 수호자",
            achievements: ["드래곤 킬러", "마법 마스터", "길드 리더"],
            isOnline: true,
            lastLogin: "2025-08-04T10:30:00Z",
            img: "https://picsum.photos/200/200?random=1",
        },
        {
            id: 2,
            name: "강철심장 가렌",
            class: "전사",
            level: 72,
            health: { current: 280, max: 900 },
            mana: { current: 150, max: 200 },
            skills: ["강타", "방어 태세", "돌진"],
            equipment: {
                weapon: "신화급 대검",
                armor: "플레이트 아머",
                accessory: null,
            },
            status: "부상",
            guild: null,
            achievements: ["백전백승", "탱커의 자존심"],
            isOnline: false,
            lastLogin: "2025-08-03T18:45:00Z",
            img: "https://picsum.photos/200/200?random=2",
        },
        {
            id: 3,
            name: "바람의 춤꾼 루나",
            class: "궁수",
            level: 45,
            health: { current: 350, max: 350 },
            mana: { current: 0, max: 400 },
            skills: ["연속 사격", "독화살", "은신", "치유의 바람", "폭풍 화살"],
            equipment: {
                weapon: "엘븐 활",
                armor: "가죽 갑옷",
                accessory: "민첩의 목걸이",
            },
            status: "휴식",
            guild: "달빛 사냥꾼",
            achievements: ["명사수"],
            isOnline: true,
            lastLogin: "2025-08-04T09:15:00Z",
            img: "https://picsum.photos/200/200?random=3",
        },
    ];
    return (
        <section className="cards">
            <h2></h2>
            {items.map((character) => (
                <Card key={character.id} character={character} />
            ))}
        </section>
    );
}
