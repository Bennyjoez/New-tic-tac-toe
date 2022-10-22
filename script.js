(function() {
    const gameCells = Array.from(document.querySelectorAll('.cell'));
    const board = document.querySelector('#board');
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
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
            cell.addEventListener('click', handleClick, {once:true})
        });

        board.classList.add('x')
    }

    function handleClick(e) {    
        let currentClass;  
        if(currentPlayer === playerX) {
            currentClass = X_CLASS;
        } else {
            currentClass = CIRCLE_CLASS;
        }
        placeMark(e, currentPlayer);

        if(checkWin(currentClass)) {
            endGame(false);
        } else if(isDraw()){
            endGame(true);
        } else {
            changePlayer();
        };
    }

    function endGame(draw) {
        if(draw) {
            winningMessage.innerText = "Draw!"
        } else {
            winningMessage.innerText = `${(currentPlayer === playerX) ? playerX : playerO} Wins!`;
            winningMessage.style.textTransform = "capitalize";
        }
        winningMessageElement.classList.add('show');
    }

    function isDraw() {
        return [...gameCells].every(cell => {
            return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS);
        })
    }

    function placeMark(e, currentPlayer) {
        if(currentPlayer === playerX) {
            e.target.classList.add(X_CLASS);
        } else if (currentPlayer === playerO) {
            e.target.classList.add(CIRCLE_CLASS)
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

    function checkWin (currentClass) {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return gameCells[index].classList.contains(currentClass);
            })
        })
    }
})();