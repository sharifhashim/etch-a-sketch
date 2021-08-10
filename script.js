function createGrid () {
    let i = 0;
    while (i < 256) {
        const grid = document.createElement('div')
        grid.id = "sketch"
        document.getElementById('container').appendChild(grid)
        i++;
        container.style.gridTemplateColumns = 'repeat(16, 25px)'
        container.style.gridTemplateRows = 'repeat(16, 25px)'
        container.style.gridGap = "5px"
    }
    
}
createGrid()


function colorMix () {
    let color = document.querySelectorAll('#sketch')
color.forEach((sketch) => {
    sketch.addEventListener('mouseover', function (e) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    })
})
}
function colorBlack () {
    let draw = document.querySelectorAll('#sketch')
draw.forEach((sketch) => {
    sketch.addEventListener('mouseover', function(e) {
        this.style.backgroundColor = "black"
    })
})
}
function clearGrid () {
    let clear = document.querySelectorAll('#sketch')
    clear.forEach((item) => {
        item.style.backgroundColor = "white"
})
}

function newGrid () {
    let gridSize = prompt("Enter a grid size between 1 - 100")
    if (gridSize >= 1 && gridSize <= 100) {
        document.getElementById('container').innerHTML = ""
        let userGrid = gridSize * gridSize;
        let i = 0;
        
        while (i < userGrid) {
            const newGrid = document.createElement('div')
            newGrid.id = 'sketch'
            document.getElementById('container').appendChild(newGrid)
            i++;
            container.style.gridTemplateColumns = `repeat(${gridSize}, ${500/gridSize}px)`
            container.style.gridTemplateRows = `repeat(${gridSize}, ${500/gridSize}px)`
            container.style.gridGap = "5px"
            
            
        }
        } else {
            prompt("Please enter a number between 1 - 100")
        }

    }
document.getElementById('btn').addEventListener('click', clearGrid);
document.getElementById('gridbtn').addEventListener('click', newGrid);
document.getElementById('rainbow').addEventListener('click', colorMix)
document.getElementById('black').addEventListener('click', colorBlack)
