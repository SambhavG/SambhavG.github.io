const canvas = document.getElementById("canvas")
const context = canvas.getContext('2d')

window.onload = () => {
    gameLoop()
}

function gameLoop() {
    setInterval(show, 1000/20) // here 15 is our fps value
}

function show() {
    update()
    minesweeperGame.draw()
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}


//Minesweeper keeps track of if first click occurs
//If not, then when clicked, run firstClick() (generator) instead of cellClicked()

//-1 unclicked, 0-8 number of adjacent mines, 9 mine, 10 flag, 11 mine flag
class minesweeper {
    constructor(x, y, canvasWidth, canvasHeight, width, height, mines) {
        this.xOffset = x
        this.yOffset = y
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.width = width
        this.height = height
        this.cellWidth = canvasWidth/width
        this.cellHeight = canvasHeight/height
        this.mines = mines
        this.grid = []
        this.firstClickHappened = false
        this.gameLost = false
        this.gameWon = false
    }

    drawUnclickedCell(x, y) {
        context.fillStyle = 'white'
        context.strokeStyle = 'black'
        context.strokeWidth = 1
        context.strokeRect(this.xOffset + x * this.cellWidth, this.yOffset + y * this.cellHeight, this.cellWidth, this.cellHeight)
    }

    drawFlag(x, y) {
        //Stick
        context.fillStyle = 'black'
        context.fillRect((x+0.1) * this.cellWidth, (y+0.2) * this.cellHeight, this.cellWidth*.1, this.cellHeight*.6)
        //Draw flag in triangle shape
        context.fillStyle = 'red'
        context.beginPath()
        context.moveTo((x+0.15) * this.cellWidth, (y+0.2) * this.cellHeight)
        context.lineTo((x+0.15) * this.cellWidth, (y+0.5) * this.cellHeight)
        context.lineTo((x+0.8) * this.cellWidth, (y+0.35) * this.cellHeight)
        context.closePath()
        context.fill()

    }

    drawMine(x, y) {
        //Black circle
        context.fillStyle = 'black'
        context.beginPath()
        context.arc((x+0.5) * this.cellWidth, (y+0.5) * this.cellHeight, this.cellWidth/3, 0, 2*Math.PI)
        context.closePath()
        context.fill()
    }

    draw() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                if (!this.firstClickHappened) {
                    this.drawUnclickedCell(i, j)
                } else if (this.grid[i][j] == -1 || (!this.gameLost && this.grid[i][j] == 9)) {
                    this.drawUnclickedCell(i, j)
                } else if (this.grid[i][j] == 9 && this.gameLost) {
                    context.fillStyle = 'black'
                    this.drawMine(i, j)
                } else if ([10, 11].includes(this.grid[i][j])) {
                    //Draw flag
                    this.drawFlag(i, j)
                } else if ([1,2,3,4,5,6,7,8].includes(this.grid[i][j])) {
                    //Write number
                    context.fillStyle = 'white'
                    context.fillRect(i * this.cellWidth, j * this.cellHeight, this.cellWidth, this.cellHeight)
                    //Calculate font size to fit cell
                    let fontSize = this.cellWidth/1.5
                    context.font = fontSize + 'px Arial'
                    context.fillStyle = 'black'
                    context.textAlign = 'center'
                    context.textBaseline = 'middle'
                    //Text color based on number of adjacent mines
                    switch(this.grid[i][j]) {
                        case 1:
                            context.fillStyle = 'blue'
                            break
                        case 2:
                            context.fillStyle = 'green'
                            break
                        case 3:
                            context.fillStyle = 'red'
                            break
                        case 4:
                            context.fillStyle = 'purple'
                            break
                        case 5:
                            context.fillStyle = 'orange'
                            break
                        case 6:
                            context.fillStyle = 'yellow'
                            break
                        case 7:
                            context.fillStyle = 'brown'
                            break
                        case 8:
                            context.fillStyle = 'grey'
                            break
                    }
                    
                    context.fillText(this.grid[i][j], i * this.cellWidth + this.cellWidth/2, j * this.cellHeight + this.cellHeight/2)
                }
            }
        }
    }

    getCell(mouseX, mouseY) {
        let gridX = Math.floor(mouseX / (this.canvasWidth/this.width))
        let gridY = Math.floor(mouseY / (this.canvasHeight/this.height))
        return [gridX, gridY]
    }
    findNumOfCell(x, y) {
        let num = 0
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if (x+i >= 0 && x+i < this.width && y+j >= 0 && y+j < this.height && ([9, 11].includes(this.grid[x+i][y+j]))) {
                    num++
                }
            }
        }
        return num
    }
    firstClick(gridpoint) {
        this.firstClickHappened = true
        
        //Set all mines to -1 (unclicked)
        for (let i = 0; i < this.width; i++) {
            //Append empty array to grid
            this.grid.push([])
            for (let j = 0; j < this.height; j++) {
                this.grid[i].push(-1)
            }
        }

        //Generate mines
        let numMinesGenerated = 0
        while (numMinesGenerated < this.mines) {
            let x = Math.floor(Math.random() * this.width)
            let y = Math.floor(Math.random() * this.height)
            if ((x!= gridpoint[0] && y != gridpoint[1]) && this.grid[x][y] != 9) {
                this.grid[x][y] = 9
                numMinesGenerated++
            }
        }
        this.cellClicked(gridpoint)
    }
    cellClicked(gridpoint) {
        //If cell is a mine, game lost
        if (this.grid[gridpoint[0]][gridpoint[1]] == 9) {
            this.gameLost = true
            this.gameLostFunction()
            console.log("Game lost")
        } else if (this.grid[gridpoint[0]][gridpoint[1]] == -1) {
            //Determine number of the cell
            let cellNum = this.findNumOfCell(gridpoint[0], gridpoint[1])
            //Reveal cell
            this.grid[gridpoint[0]][gridpoint[1]] = cellNum
            //If cell is 0, reveal adjacent cells
            if (cellNum == 0) {
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        if (gridpoint[0]+i >= 0 && gridpoint[0]+i < this.width && gridpoint[1]+j >= 0 && gridpoint[1]+j < this.height && this.grid[gridpoint[0]+i][gridpoint[1]+j] == -1) {
                            this.cellClicked([gridpoint[0]+i, gridpoint[1]+j])
                        }
                    }
                }
            }
        }

        
    }
    rightClicked(gridpoint) {
        //If cell is unclicked, flag it
        if (this.grid[gridpoint[0]][gridpoint[1]] == -1) {
            this.grid[gridpoint[0]][gridpoint[1]] = 10
        }
        //If cell is a mine, flag it
        else if (this.grid[gridpoint[0]][gridpoint[1]] == 9) {
            this.grid[gridpoint[0]][gridpoint[1]] = 11
        }
        //If cell is flagged, unflag it
        else if (this.grid[gridpoint[0]][gridpoint[1]] == 10) {
            this.grid[gridpoint[0]][gridpoint[1]] = -1
        }
        //If cell is a mine and flagged, unflag it
        else if (this.grid[gridpoint[0]][gridpoint[1]] == 11) {
            this.grid[gridpoint[0]][gridpoint[1]] = 9
        }
        //If cell is already revealed and its number of mines are flagged, click all unflagged squares adjacent
        else if ([0,1,2,3,4,5,6,7,8].includes(this.grid[gridpoint[0]][gridpoint[1]])) {
            let numFlagged = 0
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    if (gridpoint[0]+i >= 0 && gridpoint[0]+i < this.width && gridpoint[1]+j >= 0 && gridpoint[1]+j < this.height && [10, 11].includes(this.grid[gridpoint[0]+i][gridpoint[1]+j])) {
                        numFlagged++
                    }
                }
            }
            if (numFlagged == this.grid[gridpoint[0]][gridpoint[1]]) {
                for (let i = -1; i < 2; i++) {
                    for (let j = -1; j < 2; j++) {
                        if (gridpoint[0]+i >= 0 && gridpoint[0]+i < this.width && gridpoint[1]+j >= 0 && gridpoint[1]+j < this.height) {
                            if ([-1, 9].includes(this.grid[gridpoint[0]+i][gridpoint[1]+j])) {
                                this.cellClicked([gridpoint[0]+i, gridpoint[1]+j])
                            }
                        }
                    }
                }
            }
        }
    }
    gameLostFunction() {
        //Reveal all mines and show lost message
        //alert('You lost!')
        console.log("you lost")
    }

}

window.addEventListener("mousedown", (event) => {
    let isSquaresClick = true
    if (!(event.clientX > minesweeperGame.xOffset + canvas.offsetLeft && 
        event.clientX < minesweeperGame.xOffset + minesweeperGame.canvasWidth + canvas.offsetLeft && 
        event.clientY > minesweeperGame.yOffset + canvas.offsetTop && 
        event.clientY < minesweeperGame.yOffset + minesweeperGame.canvasHeight + canvas.offsetTop)) {
        
        isSquaresClick = false
    }
    if (minesweeperGame.gameWon || minesweeperGame.gameLost) {
        isSquaresClick = false
    }

    if (isSquaresClick && event.button == 0) {
        if (!minesweeperGame.firstClickHappened) {
            minesweeperGame.firstClick(minesweeperGame.getCell(event.clientX-canvas.offsetLeft, event.clientY-canvas.offsetTop))
        } else {
            minesweeperGame.cellClicked(minesweeperGame.getCell(event.clientX-canvas.offsetLeft, event.clientY-canvas.offsetTop))
        }
    }

    if (isSquaresClick && event.button == 2) {
        minesweeperGame.rightClicked(minesweeperGame.getCell(event.clientX-canvas.offsetLeft, event.clientY-canvas.offsetTop))
    }
})

let minesweeperGame = new minesweeper(0, 0, canvas.width, canvas.height, 10, 10, 10)