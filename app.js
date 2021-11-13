let player = 0;

const board = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function addElement(x) {
    if (document.getElementById(x).innerText === '' && player !== -1) {
        if (player % 2 === 0) {
            document.getElementById(x).innerHTML = "X";
        } else {
            document.getElementById(x).innerHTML = "0";
        }
        ++player;
        if (player > 3) {
            checkWinner(x);
        }
    }
    if (player === 9) {
        document.getElementById("alert").innerHTML = '<div class="alert alert-warning" role="alert">\n' +
            '  Draw!' +
            '</div>'
    }
}

function checkWinner(x) {
    for (let i = 0; i < 8; ++i) {
        let a = document.getElementById("" + board[i][0]).innerText;
        let b = document.getElementById("" + board[i][1]).innerText;
        let c = document.getElementById("" + board[i][2]).innerText;
        if (a === b && b === c && a !== '') {
            document.getElementById("alert").innerHTML = '<div class="alert alert-success" role="alert">Player ' + document.getElementById(x).innerText + ' won!!</div>';
            document.getElementById("" + board[i][0]).classList.add("wincell");
            document.getElementById("" + board[i][1]).classList.add("wincell");
            document.getElementById("" + board[i][2]).classList.add("wincell");
            player = -1;
            return false;
        }
    }
}