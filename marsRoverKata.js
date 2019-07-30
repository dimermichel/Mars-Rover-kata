
// Mars Rover Kata 🤖
let rover = {
  direction: 'N',
  x: 0,
  y: 0,
  path: [{ x: 0, y: 0 }]
}

let grid = [
  ['O',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' '],
  [' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ']];

function turnLeft (rover) {
  console.log('turnLeft was called!')
  switch (rover.direction) {
    case 'N': rover.direction = 'W'; break
    case 'W': rover.direction = 'S'; break
    case 'S': rover.direction = 'E'; break
    case 'E': rover.direction = 'N'; break
    default: break
  }
  console.log(`Rover Direction: ${rover.direction}`)
}

function turnRight (rover) {
  console.log('turnRight was called!')
  switch (rover.direction) {
    case 'N': rover.direction = 'E'; break
    case 'W': rover.direction = 'N'; break
    case 'S': rover.direction = 'W'; break
    case 'E': rover.direction = 'S'; break
    default: break
  }
  console.log(`Rover Direction: ${rover.direction}`)
}

function moveForward (rover) {
  console.log('moveForward was called')
  switch (rover.direction) {
    case 'N': moveVertical(rover, 'Up'); break
    case 'W': moveHorizontal(rover, 'Left'); break
    case 'S': moveVertical(rover, 'Down'); break
    case 'E': moveHorizontal(rover, 'Right'); break
    default: break
  }
}

function moveBackward (rover) {
  console.log('moveBackward was called')
  switch (rover.direction) {
    case 'N': moveVertical(rover, 'Down'); break
    case 'W': moveHorizontal(rover, 'Right'); break
    case 'S': moveVertical(rover, 'Up'); break
    case 'E': moveHorizontal(rover, 'Left'); break
    default: break
  }
}

function moveHorizontal (rover, command) {
  if (rover.x >= 0 && rover.x < 9) {
    if (command === 'Left') {
      rover.x--
      if (rover.x < 0) {
        rover.x = 0
        console.log("You can't run outside of the grid!")
      }
    } else if (command === 'Right') {
      rover.x++
    }
    console.log(`Mars Rover has position: x=${rover.x}, y=${rover.y}`)

    let newPosition = { x: rover.x, y: rover.y }
    rover.path.push(newPosition)
    printPathGrid(rover)
  } else {
    console.log("You can't run outside of the grid!")
  }
}

function moveVertical (rover, command) {
  if (rover.y >= 0 && rover.y < 9) {
    if (command === 'Up') {
      rover.y--
      if (rover.y < 0) {
        rover.y = 0
        console.log("You can't run outside of the grid!")
      }
    } else if (command === 'Down') {
      rover.y++
    }
    console.log(`Mars Rover has position: x=${rover.x}, y=${rover.y}`)
    let newPosition = { x: rover.x, y: rover.y }
    rover.path.push(newPosition)
    printPathGrid(rover)
  } else {
    console.log("You can't run outside of the grid!")
  }
}

function printPathGrid (rover) {
  if (rover.path.length > 1) {
    let currentPath = rover.path[rover.path.length - 1]
    let lastPath = rover.path[rover.path.length - 2]
    if (currentPath.y >= 0 && currentPath.y <= 9) {
      if (currentPath.x >= 0 && currentPath.x <= 9) {
        grid[lastPath.y][lastPath.x] = ' '
        grid[currentPath.y][currentPath.x] = 'O'
        console.log(currentPath) // Current position path
        console.log(lastPath) // Last position path
      }
    }
  }
  console.log(grid.join('\n') + '\n\n')
}

function command (rover, orders) {
  for (let i = 0; i < orders.length; i++) {
    let order = orders[i]
    if (orders[i] === 'l' || orders[i] === 'r' || orders[i] === 'f' || orders[i] === 'b') {
      switch (order) {
        case 'l': turnLeft(rover); break // turn left
        case 'r': turnRight(rover); break // turn right
        case 'f': moveForward(rover); break // move foward
        case 'b': moveBackward(rover); break // move backward
      }
    } else {
      console.log(`You inserted an invalid command: ${order = orders[i]}
      Valid commands list:
      l: to turn Left
      r: to turn Right
      f: to move Foward
      b: to move Backward`)
    }
  }
  console.log('Complete Path: ')
  console.log(rover.path)
}
// Insert Commands Here
//               |
//               V
command(rover, 'llfffbbrffffffffffr')
