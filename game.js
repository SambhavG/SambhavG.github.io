const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext('2d')

window.onload = () => {
    gameLoop()
}

function gameLoop() {
    setInterval(update, 1000/20) // here 15 is our fps value
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)


    grid.draw()
}

class ticTacToeGrid {
    constructor() {
        this.grid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        this.turn = 1
    }
    draw() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.grid[i][j] === 1) {
                    canvasContext.fillStyle = 'red'
                    canvasContext.fillRect(i * 100, j * 100, 100, 100)
                } else if (this.grid[i][j] === 2) {
                    canvasContext.fillStyle = 'blue'
                    canvasContext.fillRect(i * 100, j * 100, 100, 100)
                } else {
                    canvasContext.fillStyle = 'white'
                    canvasContext.fillRect(i * 100, j * 100, 100, 100)
                }
            }
        }
    }
    cellClicked(x, y) {
        if (this.grid[x][y] === 0) {
            this.grid[x][y] = this.turn
            this.flipTurn()
        }
    }
    flipTurn() {
        this.turn = this.turn === 1 ? 2 : 1
    }
    aiMove() {
        //Until an unfilled square is found, pick random squares
        do {
            let x = Math.floor(Math.random() * 3)
            let y = Math.floor(Math.random() * 3)
        } while (this.grid[x][y] !== 0)
        this.grid[x][y] = this.turn
        this.flipTurn()
    }
    checkWin() {
        for (let i = 0; i < 3; i++) {
            if (this.grid[i][0] === this.grid[i][1] && this.grid[i][1] === this.grid[i][2]) {
                return this.grid[i][0]
            }
        }
        for (let i = 0; i < 3; i++) {
            if (this.grid[0][i] === this.grid[1][i] && this.grid[1][i] === this.grid[2][i]) {
                return this.grid[0][i]
            }
        }
        if (this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2]) {
            return this.grid[0][0]
        }
        if (this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0]) {
            return this.grid[0][2]
        }
        //If no squares are empty, return 3 to indicate a draw
        if (this.grid.flat().every(x => x !== 0)) {
            return 3
        }
        return 0
    }
    returnResult() {
        if (this.checkWin() === 1) {
            alert("Red wins!")
        } else if (this.checkWin() === 2) {
            alert("Blue wins!")
        } else if (this.checkWin() === 3) {
            alert("Tie!")
        }
    }



}


window.addEventListener("mousedown", (event) => {
    let mouseX = event.clientX - canvas.offsetLeft
    let mouseY = event.clientY - canvas.offsetTop
    let gridX = Math.floor(mouseX / (canvas.width/3))
    let gridY = Math.floor(mouseY / (canvas.height/3))
    if (grid.grid[gridX][gridY] === 0) {
        grid.grid[gridX][gridY] = 1
        grid.returnResult()
    }

})


let grid = new ticTacToeGrid()
