// Function to reset game
function myfunc_2() {
    enableAllButtons();
}

// Function to handle player turns
function handlePlayerTurn(cellId) {
    var cell = document.getElementById(cellId);

    if (cell.value === "") {
        if (flag === 1) {
            cell.value = "X";
            cell.classList.add("X");
            flag = 0;
        } else {
            cell.value = "O";
            cell.classList.add("O");
            flag = 1;
        }

        cell.disabled = true;
        if (checkWinner()) {
            displayWinner();
        } else {
            updateTurn();
        }
    }
}

// Function to check for a winner
function checkWinner() {
    var combinations = [
        ["b1", "b2", "b3"],
        ["b4", "b5", "b6"],
        ["b7", "b8", "b9"],
        ["b1", "b4", "b7"],
        ["b2", "b5", "b8"],
        ["b3", "b6", "b9"],
        ["b1", "b5", "b9"],
        ["b3", "b5", "b7"]
    ];

    for (var i = 0; i < combinations.length; i++) {
        var [a, b, c] = combinations[i];
        if (document.getElementById(a).value === document.getElementById(b).value &&
            document.getElementById(b).value === document.getElementById(c).value &&
            document.getElementById(a).value !== "") {
            return true; // We have a winner
        }
    }

    return false;
}

// Function to display the winner
function displayWinner() {
    var currentPlayer = flag === 0 ? "Player X" : "Player O";
    document.getElementById('print').innerHTML = "";
    document.getElementById('winner').innerHTML = currentPlayer + " wins!";
}


// Function to update the turn
function updateTurn() {
    var currentPlayer = flag === 1 ? "Player X" : "Player O";
    document.getElementById('print').innerHTML = currentPlayer + "'s turn";
}

// Function to enable all buttons
function enableAllButtons() {
    for (var i = 1; i <= 9; i++) {
        var btn = document.getElementById("b" + i);
        btn.value = ""; // Clear the values
        btn.disabled = false;
        btn.classList.remove("X", "O"); // Remove X and O classes
    }

    document.getElementById('print').innerHTML = "Player X's turn";
    document.getElementById('winner').innerHTML = ""; // Clear the winner message
}

// Initial setup
enableAllButtons();
var flag = 1; // Moved the flag variable here
