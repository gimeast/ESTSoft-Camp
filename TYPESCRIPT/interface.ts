interface Character {
    nickName: string;
}

interface Bird {
    fly: number;
}

interface BirdCharacter extends Character, Bird {
    level: number;
}

const birdChar: BirdCharacter = {
    nickName: "Gary",
    fly: 10,
    level: 1,
};
