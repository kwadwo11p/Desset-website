const login = document.querySelector(".login");
const love = document.querySelector(".love");
const love1 = document.querySelector(".love-1");
const love2 = document.querySelector(".love-2");
const like = document.querySelector(".like");
const like1 = document.querySelector(".like-1");
const like2 = document.querySelector(".like-2");
const search = document.getElementById("search");
const go = document.querySelector(".go");
var loveCount = 0;
var loveCount1 = 0;
var loveCount2 = 0;

go.addEventListener("click", function () {
    alert(`you are searching for ${search.value}`);
});

login.addEventListener("click", function () {
    login.classList.add("hide");
});

love.addEventListener("click", function () {
    loveCount++;
    like.innerHTML = `${loveCount}`;
});
love1.addEventListener("click", function () {
    loveCount1++;
    like1.innerHTML = `${loveCount1}`;
});
love2.addEventListener("click", function () {
    loveCount2++;
    like2.innerHTML = `${loveCount2}`;
});
