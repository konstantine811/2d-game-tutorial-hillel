const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

console.log(innerHeight);

canvas.width = 1024;
canvas.height = 567;

const gravity = 0.5;

class Player {
  constructor(position) {
    this.position = position;
    this.velocity = { x: 0, y: 1 };
    this.height = 100;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, 100, this.height);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y < canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

const player = new Player({ x: 0, y: 0 });
const player2 = new Player({ x: 200, y: 0 });

let y = 0;
let y2 = 0;
function animate() {
  window.requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  player.update();

  player2.update();
}

animate();

const nameAlex = "Alex";
const ageAlex = 20;

const userAlex = {
  name: "Alex",
  age: 20,
  color: "red",
};

const userBob = {
  name: "Bob",
  age: 30,
  color: "blue",
  showInnerMessage: function () {
    console.log("outer function");
    console.log(this);

    (function showMessage() {
      console.log("this of show message");
      console.log(this);
      const showInsetMessage = () => {
        console.log("this of inset function");
        console.log(this);
      };
      showInsetMessage();
    }).apply(this);
    showMessage();
  },
};

function showMessage() {
  console.log(this.name + " is " + this.age + " years old");
  const showColor = () => {
    console.log("Color is " + this.color);
  };
  showColor();
}

userBob.showInnerMessage();
