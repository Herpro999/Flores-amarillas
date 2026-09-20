const friends = {
    "01": "Jaimes",
    "02": "Hanny",
    "03": "Ruiz",
    "04": "Alvarez",
    "05": "Dulce",
    "06": "Villa",
    "07": "Suarez",
    "08": "Ramirez",
    "09": "Juliana",
    "10": "Sara",
    "11": "Bonfante",
    "12": "Vico",
    "13": "Pau",
    "14": "Isa"
};

const params = new URLSearchParams(window.location.search);
const friendID = params.get("friend");
const friendName = friends[friendID];

if (friendName) {
    document.getElementById("friendMessage").textContent =
        `${friendName}, nunca cambies ❤️`;
}

function nextPage() {
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    page1.style.opacity = "0";

    setTimeout(() => {
        page1.style.display = "none";

        page2.style.display = "flex";
        page2.style.opacity = "0";

        setTimeout(() => {
            page2.style.opacity = "1";
        }, 50);

    }, 700);
}
