function newImage(url, left, bottom) {
  let image = document.createElement("img");
  image.src = url;
  image.style.position = "fixed";
  image.style.left = left + "px";
  image.style.bottom = bottom + "px";
  document.body.append(image);
  return image;
}

newImage("assets/green-character.gif", 100, 250);
newImage("assets/tree.png", 200, 450);
newImage("assets/pillar.png", 350, 250);
newImage("assets/pine-tree.png", 450, 350);
newImage("assets/crate.png", 150, 350);
newImage("assets/well.png", 500, 575);

function newItem(url) {
  let item = newImage(url);
  item.addEventListener("click", () => {
    item.remove();
    let inventoryItem = document.createElement("img");
    inventoryItem.src = url;
    inventory.append(inventoryItem);
  });
  return item;
}

newItem("assets/sword.png", 500, 555);
newItem("assets/shield.png", 165, 335);
newItem("assets/staff.png", 600, 250);

function newInventory() {
  let inventory = document.createElement("div");
  inventory.style.width = "100%";
  inventory.style.height = "100px";
  inventory.style.display = "flex";
  inventory.style.flexDirection = "row";
  inventory.style.alignItems = "center";
  inventory.style.justifyContent = "space-evenly";
  inventory.style.border = "2px solid black";
  inventory.style.backgroundColor = "brown";
  document.body.append(inventory);
  return inventory;
}

const inventory = newInventory();

/*move(inventory).to(0, 0);
//move(newImage("assets/green-character.gif")).to(100, 250);
move(newImage("assets/tree.png")).to(200, 450);
move(newImage("assets/pillar.png")).to(350, 250);
move(newImage("assets/pine-tree.png")).to(450, 350);
move(newImage("assets/crate.png")).to(150, 350);
move(newImage("assets/well.png")).to(500, 575);
move(newItem("assets/sword.png")).to(500, 555);
move(newItem("assets/shield.png")).to(165, 335);
move(newItem("assets/staff.png")).to(600, 250);*/

//creating the charcter, track it with variable for current mosition
const character = newImage("assets/green-character/static.gif");
let direction = null;
let x = 100;
let y = 250;

// to run code repeatedly using this function
setInterval(function () {
  if (direction === "west") {
    x = x - 1;
  }
  if (direction === "north") {
    y = y + 1;
  }
  if (direction === "east") {
    x = x + 1;
  }
  if (direction === "south") {
    y = y - 1;
  }
  character.style.left = x + "px";
  character.style.bottom = y + "px";
}, 1);

// call back function , check which key is being pressed by e.key in each direction.
//key down fires many times as long as the user is holding down the arrow key-repearing the event
document.addEventListener("keydown", function (e) {
  if (e.repeat) return;

  if (e.key === "ArrowLeft") {
    direction = "west";
  }
  if (e.key === "ArrowUp") {
    direction = "north";
  }
  if (e.key === "ArrowRight") {
    direction = "east";
  }
  if (e.key === "ArrowDown") {
    direction = "south";
  }
  callback(direction);
});

document.addEventListener("keyup", function (e) {
  direction = null;
  callback(direction);
});

// so character can appear to be walking, chaning animations.
function handleDirectionChange(direction) {
  if (direction === null) {
    character.src = "assets/green-character/static.gif";
  }
  if (direction === "west") {
    character.src = "assets/green-character/west.gif";
  }
  if (direction === "north") {
    character.src = "assets/green-character/north.gif";
  }
  if (direction === "east") {
    character.src = "assets/green-character/east.gif";
  }
  if (direction === "south") {
    character.src = "assets/green-character/south.gif";
  }
}

move(character).withArrowKeys(100, 250, handleDirectionChange);

// event listener so that the character stops moving when the user releases the arrow key
document.addEventListener("keyup", function (e) {
  direction = null;
});
