
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
    if (grid.turn === 2) {
        grid.aiMove()
    }

    grid.draw()
    grid.returnResult()
}

class ticTacToeGrid {
    constructor() {
        this.grid = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        this.turn = 1
        this.width = canvas.width/3
        this.height = canvas.height/3
    }
    draw() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.grid[i][j] === 1) {
                    //Draw X 
                    canvasContext.beginPath()
                    canvasContext.moveTo(i * this.width, j * this.height)
                    canvasContext.lineTo((i * this.width) + this.width, (j * this.height) + this.height)
                    canvasContext.moveTo((i * this.width) + this.width, j * this.height)
                    canvasContext.lineTo(i * this.width, (j * this.height) + this.height)
                    canvasContext.stroke()
                } else if (this.grid[i][j] === 2) {
                    //Draw O
                    canvasContext.beginPath()
                    canvasContext.arc(i * this.width + this.width/2, j * this.height + this.height/2, min(this.width, this.heigth), 0, 2 * Math.PI)
                    canvasContext.stroke()

                } else {
                    canvasContext.fillStyle = 'white'
                    canvasContext.fillRect(i * this.width, j * this.height, this.width, this.height)
                }
            }
        }

        //Draw lines between squares
        canvasContext.beginPath()
        canvasContext.moveTo(0, this.height)
        canvasContext.lineTo(3*this.width, this.height)
        canvasContext.moveTo(this.width, 0)
        canvasContext.lineTo(this.width, 3*this.height)
        canvasContext.moveTo(2*this.width, 0)
        canvasContext.lineTo(2*this.width, 3*this.height)
        canvasContext.moveTo(0, 2*this.height)
        canvasContext.lineTo(3*this.width, 2*this.height)
        canvasContext.stroke()

    }
    cellClicked(x, y) {
        if (this.grid[x][y] === 0 && this.turn === 1) {
            this.grid[x][y] = this.turn
            this.flipTurn()
        }
    }
    flipTurn() {
        this.turn = this.turn === 1 ? 2 : 1
    }
    aiMove() {
        //Until an unfilled square is found, pick random squares
        let x = -1
        let y = -1
        do {
            x = Math.floor(Math.random() * 3)
            y = Math.floor(Math.random() * 3)
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
    grid.cellClicked(gridX, gridY)
})


let grid = new ticTacToeGrid()
