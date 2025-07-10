//1
const bookList =
    '[{"id":1,"title":"The Great Gatsby","author":"F. Scott Fitzgerald","year":1925,"genre":"Novel","available":true},{"id":2,"title":"To Kill a Mockingbird","author":"Harper Lee","year":1960,"genre":"Novel","available":false},{"id":3,"title":"1984","author":"George Orwell","year":1949,"genre":"Dystopian","available":true},{"id":4,"title":"Pride and Prejudice","author":"Jane Austen","year":1813,"genre":"Romance","available":true},{"id":5,"title":"The Catcher in the Rye","author":"J.D. Salinger","year":1951,"genre":"Novel","available":false}]';

const parsedBookList = JSON.parse(bookList);
const titleList = parsedBookList.filter((v) => v.available).map((v) => v.title);
console.log(titleList);

//2
const userData =
    '[{"_id":"5e80777f673acf89c007ff91","age":27,"eyeColor":"green","name":"Angelina Chang","gender":"female","email":"angelinachang@kangle.com","phone":"+1 (938) 477-2821"},{"_id":"5e80777feee717674b817fd2","age":25,"eyeColor":"green","name":"Deidre Cobb","gender":"female","email":"deidrecobb@kangle.com","phone":"+1 (938) 477-2824"},{"_id":"5e80777fac368a4578dda85d","age":25,"eyeColor":"blue","name":"Jolene Franks","gender":"female","email":"jolenefranks@kangle.com","phone":"+1 (985) 536-3981"},{"_id":"5e80777ff3717874cbc78e44","age":31,"eyeColor":"brown","name":"Waters Hardin","gender":"male","email":"watershardin@kangle.com","phone":"+1 (938) 559-2224"},{"_id":"5e80777fe36842ea9e024fcd","age":34,"eyeColor":"green","name":"Jody Chaney","gender":"female","email":"jodychaney@kangle.com","phone":"+1 (878) 587-2602"},{"_id":"5e80777fafd591f57344eb33","age":31,"eyeColor":"green","name":"Ortiz Maldonado","gender":"male","email":"ortizmaldonado@kangle.com","phone":"+1 (986) 509-2753"},{"_id":"5e80777f20e48e9ada226862","age":25,"eyeColor":"brown","name":"Stacy Burris","gender":"female","email":"stacyburris@kangle.com","phone":"+1 (864) 577-3500"},{"_id":"5e80777faf334f84a2c90595","age":33,"eyeColor":"brown","name":"Davenport Levy","gender":"male","email":"davenportlevy@kangle.com","phone":"+1 (990) 600-2700"}]';
const renderingButton = document.querySelector("#renderingButton");
const tbody = document.querySelector("#renderingDataTable > tbody");
const user = JSON.parse(userData);
let asc = true;
function sort(key) {
    const sortedUser = [...user].sort((a, b) => {
        const av = a[key];
        const bv = b[key];

        if (asc) {
            if (typeof av === "number" && typeof bv === "number") {
                return av - bv;
            }
            if (typeof av === "string" && typeof bv === "string") {
                return av.localeCompare(bv);
            }
        } else {
            if (typeof av === "number" && typeof bv === "number") {
                return bv - av;
            }
            if (typeof av === "string" && typeof bv === "string") {
                return bv.localeCompare(av);
            }
        }
    });
    tbody.innerHTML = "";
    asc = !asc;

    renderTable(sortedUser);
}

function renderTable(data) {
    tbody.innerHTML = "";

    data.forEach((user) => {
        const tr = document.createElement("tr");
        tbody.appendChild(tr);
        Object.values(user).forEach((v) => {
            const td = document.createElement("td");
            td.innerText = v;
            tr.appendChild(td);
        });
    });
}

renderingButton.addEventListener("click", () => {
    renderTable(user);
});
