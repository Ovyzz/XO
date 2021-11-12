let player = 0;

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
    let line, column;
    line = x.charAt(4);
    column = x.charAt(5);
    let check = true;
    for (let i = 1; i <= 3 && check === true; ++i) {
        if (document.getElementById("cell" + i + column + "").innerText !== document.getElementById(x).innerText ) {
            check = false;
        }
    }
    if (check) {
        for (let i = 1; i <= 3; ++i) {
            document.getElementById("cell" + i + column + "").classList.add("wincell");
        }
        winner(x);
        player = -1;
        return false;
    }
    check = true;
    for (let j = 1; j <= 3 && check === true; ++j) {
        if (document.getElementById("cell" + line + j +"").innerText !== document.getElementById(x).innerText) {
            check = false;
        }
    }
    if (check) {
        for (let i = 1; i <= 3; ++i) {
            document.getElementById("cell" + line + i + "").classList.add("wincell");
        }
        winner(x);
        player = -1;
        return false;
    }
    check = true;
    for (let i = 1; i <= 3 && check === true; ++i) {
        if (document.getElementById("cell" + i + i +"").innerText !== document.getElementById(x).innerText) {
            check = false;
        }
    }
    if (check) {
        for (let i = 1; i <= 3; ++i) {
            document.getElementById("cell" + i + i + "").classList.add("wincell");
        }
        winner(x);
        player = -1;
        return false;
    }
    check = true;
    for (let i = 1; i <= 3 && check === true; ++i) {
        if (document.getElementById("cell" + i + (4 - i) +"").innerText !== document.getElementById(x).innerText) {
            check = false;
        }
    }
    if (check) {
        for (let i = 1; i <= 3; ++i) {
            document.getElementById("cell" + i + (4 - i) + "").classList.add("wincell");
        }
        winner(x);
        player = -1;
        return false;
    }
}

function winner(x) {
    document.getElementById("alert").innerHTML = '<div class="alert alert-success" role="alert">Player ' + document.getElementById(x).innerText + ' won!!</div>'
}
