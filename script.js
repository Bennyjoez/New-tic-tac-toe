(function() {
    const gameCells = Array.from(document.querySelectorAll('.cell'));
    const board = document.querySelector('#board');
    const winningMessageElement = document.querySelector('.winningMessage');
    const winningMessage = document.querySelector('.message');
    const playerX = document.querySelector('#playerX').value;
    const playerO = document.querySelector('#playerO').value;
    const restartButton = document.querySelector('#restartButton');
    const X_CLASS = 'x';
    const CIRCLE_CLASS = 'circle';
    let currentPlayer;

    startGame()
    function startGame() {
        currentPlayer = playerX;
        gameCells.forEach(cell => {
            cell.addEventListener('click', handleClick)
        });

        board.classList.add('x')
    }

    function handleClick(e) {        
        placeMark(e, currentPlayer);
        changePlayer();
    }

    function placeMark(e, currentPlayer) {
        // board.classList.remove(X_CLASS);
        // board.classList.remove(CIRCLE_CLASS);
        if(currentPlayer === playerX) {
            e.target.classList.add(X_CLASS);
            // board.classList.add(CIRCLE_CLASS)
        } else if (currentPlayer === playerO) {
            e.target.classList.add(CIRCLE_CLASS)
            // board.classList.add(X_CLASS)
        }

    }

    function changePlayer() {
        board.classList.remove(X_CLASS);
        board.classList.remove(CIRCLE_CLASS);
        if(currentPlayer === playerX) {
            currentPlayer = playerO;
            board.classList.add(CIRCLE_CLASS);
        } else {
            currentPlayer = playerX;
            board.classList.add(X_CLASS);
        }
    }
})();