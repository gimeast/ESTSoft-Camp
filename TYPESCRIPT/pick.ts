type Author = {
    name: string;
    age: number;
    password: string;
    birth: string;
    phone: string;
    email: string;
};

type pickAuthor = Pick<Author, "name" | "age">;

export const author: pickAuthor = {
    name: "licat",
    age: 30,
    // birth: "1700-01-01",
};

console.log(author);
