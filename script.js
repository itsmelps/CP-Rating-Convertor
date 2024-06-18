document.addEventListener("DOMContentLoaded", () => {
    let codechef = document.querySelector(".codechef");
    let codeforces = document.querySelector(".codeforces");
    let close = document.querySelector(".close");
    let submit = document.querySelector(".submit");
    let rating = document.querySelector(".input-box");
    let prompt = document.querySelector(".prompt");
    let output = document.querySelector(".output");
    let modal = document.querySelector(".modal");
    let cont1 = document.querySelector(".segment1");
    let cont2 = document.querySelector(".segment2");
    let imgcont = document.querySelector(".img")
    const W = 0.8263880521050802
    const b = -24.894571767998286

    let currentRatingType = "";

    codechef.addEventListener("click", () => {
        modal.classList.remove("display");
        cont1.classList.add("display")
        cont2.classList.add("display")
        let img = document.createElement("img");
        img.src = './images/codechef.svg';
        imgcont.appendChild(img);
        prompt.innerText = "ENTER YOUR CODEFORCES RATING";
        currentRatingType = "codeforces";
    });

    codeforces.addEventListener("click", () => {
        modal.classList.remove("display");
        cont1.classList.add("display")
        cont2.classList.add("display")
        let img = document.createElement("img");
        img.src = './images/codeforces.png';
        imgcont.appendChild(img);
        prompt.innerText = "ENTER YOUR CODECHEF RATING";
        currentRatingType = "codechef";
    });

    close.addEventListener("click", () => {
        modal.classList.add("display");
        cont1.classList.remove("display")
        cont2.classList.remove("display")
        output.innerText=""
        rating.innerText=""
        imgcont.innerHTML=""
    });

    submit.addEventListener("click", () => {
        let currentVal = rating.value;
        if (currentRatingType === "codechef") {
            X = currentVal
            finalRating = Math.round(W * X + b)
            output.innerText = `YOUR CODEFORCES RATING IS : ${finalRating}`;
        } else if (currentRatingType === "codeforces") {
            Y = currentVal
            finalRating = Math.round((Y - b)/W)
            output.innerText = `YOUR CODECHEF RATING IS : ${finalRating}`;
        }
    });
    modal.classList.add("display")
});

