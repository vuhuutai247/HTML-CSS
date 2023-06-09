class App {
	constructor() {
	  this.board = document.querySelector("#board");
	  this.context = this.board.getContext("2d");
	  this.gameSetting = {};
	  this.scoreBoard = [];
	  this.boardWidth = 0;
	  this.boardHeight = 0;
	  this.foodX = 5;
	  this.foodY = 5;
	  this.moveX = 1;
	  this.moveY = 0;
	  this.intervalId = 0;
	  this.score = 0;
	  this.snakeBody = [[0, 0], [0, 0]];
	  this.snakeSpeed = 500;
	  this.snakeMoving = false;
	  this.isGameEnded = true;
	}
  
	drawGrid() {
	  this.context.beginPath();
	  for (let i = 0; i <= this.gameSetting.boardWidthBlockCount; i++) {
		this.context.moveTo(i * this.gameSetting.blockSize, 0);
		this.context.lineTo(i * this.gameSetting.blockSize, this.boardHeight);
	  }
	  for (let i = 0; i <= this.gameSetting.boardHeightBlockCount; i++) {
		this.context.moveTo(0, i * this.gameSetting.blockSize);
		this.context.lineTo(this.boardWidth, i * this.gameSetting.blockSize);
	  }
	  this.context.strokeStyle = "#bbb";
	  this.context.stroke();
	}
  
	handleAudio(audioSrc, isBackground) {
	  let selector = "#game-sfx";
	  if (isBackground) {
		selector = "#game-bg-music";
	  }
	  let audio = document.querySelector(selector);
	  if (audio.src !== audioSrc) {
		audio.src = audioSrc;
	  }
	  audio.oncanplaythrough = () => {
		audio.play();
	  };
	}
  
	existInSnakeBody(block) {
	  return this.snakeBody
		.slice(0, -1)
		.some(item => item[0] === block[0] && item[1] === block[1]);
	}
  
	drawSnake(x, y, isHead, isTail) {
	  let snakeColor = this.gameSetting.bodyColor;
	  if (isTail) {
		snakeColor = this.gameSetting.tailColor;
	  }
	  if (isHead) {
		snakeColor = this.gameSetting.headColor;
	  }
	  this.context.fillStyle = snakeColor;
	  this.context.fillRect(
		x * this.gameSetting.blockSize,
		y * this.gameSetting.blockSize,
		this.gameSetting.blockSize,
		this.gameSetting.blockSize
	  );
	}
  
	drawFood() {
	  this.context.fillStyle = this.gameSetting.foodColor;
	  this.context.fillRect(
		this.foodX * this.gameSetting.blockSize,
		this.foodY * this.gameSetting.blockSize,
		this.gameSetting.blockSize,
		this.gameSetting.blockSize
	  );
	}
  
	drawBoard() {
	  this.context.fillStyle = this.gameSetting.boardColor;
	  this.context.fillRect(0, 0, this.boardWidth, this.boardHeight);
	  if (this.gameSetting.isShowGrid) {
		this.drawGrid();
	  }
	}
  
	randomFood() {
	  do {
		this.foodX = Math.floor(
		  Math.random() * this.gameSetting.boardWidthBlockCount
		);
		this.foodY = Math.floor(
		  Math.random() * this.gameSetting.boardHeightBlockCount
		);
	  } while (this.existInSnakeBody([this.foodX, this.foodY]));
  
	  this.drawFood();
	}
  
	updateSnake() {
	  let snakeX = this.snakeBody[0][0] + this.moveX;
	  let snakeY = this.snakeBody[0][1] + this.moveY;
  
	  if (
		snakeX < 0 ||
		snakeY < 0 ||
		snakeX >= this.gameSetting.boardWidthBlockCount ||
		snakeY >= this.gameSetting.boardHeightBlockCount ||
		this.existInSnakeBody([snakeX, snakeY])
	  ) {
		this.endGame();
		return;
	  }
  
	  this.drawSnake(
		snakeX,
		snakeY,
		true,
		snakeX === this.snakeBody[this.snakeBody.length - 1][0] &&
		  snakeY === this.snakeBody[this.snakeBody.length - 1][1]
	  );
  
	  this.snakeBody.unshift([snakeX, snakeY]);
	  if (snakeX === this.foodX && snakeY === this.foodY) {
		this.score += 10;
		this.updateScore();
		this.randomFood();
	  } else {
		this.drawSnake(
		  this.snakeBody[this.snakeBody.length - 1][0],
		  this.snakeBody[this.snakeBody.length - 1][1],
		  false,
		  true
		);
		this.snakeBody.pop();
	  }
	}
  
	saveSetting() {
	  localStorage.setItem("gameSetting", JSON.stringify(this.gameSetting));
	  localStorage.setItem("scoreBoard", JSON.stringify(this.scoreBoard));
	}
  
	loadSetting() {
	  const setting = localStorage.getItem("gameSetting");
	  if (setting) {
		this.gameSetting = JSON.parse(setting);
	  }
	  const scoreBoard = localStorage.getItem("scoreBoard");
	  if (scoreBoard) {
		this.scoreBoard = JSON.parse(scoreBoard);
	  }
	}
  
	updateScore() {
	  document.querySelector("#score span").textContent = this.score;
	}
  
	updateScoreBoard() {
	  const scoreTable = document.querySelector("#scoreBoard tbody");
	  scoreTable.innerHTML = "";
  
	  this.scoreBoard
		.sort((a, b) => b.score - a.score)
		.slice(0, 5)
		.forEach((item, index) => {
		  const row = scoreTable.insertRow(index);
		  const nameCell = row.insertCell(0);
		  const scoreCell = row.insertCell(1);
		  nameCell.textContent = item.name;
		  scoreCell.textContent = item.score;
		});
	}
  
	startGame() {
	  this.isGameEnded = false;
	  this.score = 0;
	  this.updateScore();
	  this.snakeBody = [
		[Math.floor(this.gameSetting.boardWidthBlockCount / 2), Math.floor(this.gameSetting.boardHeightBlockCount / 2)]
	  ];
	  this.moveX = 1;
	  this.moveY = 0;
	  this.drawBoard();
	  this.randomFood();
	  this.intervalId = setInterval(() => {
		this.updateSnake();
	  }, this.snakeSpeed);
	  this.snakeMoving = true;
	  this.board.focus();
	}
  
	endGame() {
	  this.isGameEnded = true;
	  clearInterval(this.intervalId);
	  this.handleAudio("gameover.mp3", false);
	  const playerName = prompt("Game Over! Enter your name:");
	  if (playerName) {
		this.scoreBoard.push({ name: playerName, score: this.score });
		this.saveSetting();
		this.updateScoreBoard();
	  }
	}
  
	pauseGame() {
	  this.snakeMoving = !this.snakeMoving;
	  if (this.snakeMoving) {
		this.intervalId = setInterval(() => {
		  this.updateSnake();
		}, this.snakeSpeed);
	  } else {
		clearInterval(this.intervalId);
	  }
	}
  
	render() {
	  this.loadSetting();
	  this.boardWidth = this.gameSetting.boardWidthBlockCount * this.gameSetting.blockSize;
	  this.boardHeight = this.gameSetting.boardHeightBlockCount * this.gameSetting.blockSize;
	  this.board.width = this.boardWidth;
	  this.board.height = this.boardHeight;
  
	  this.drawBoard();
	  this.updateScoreBoard();
  
	  document.querySelector("#start").addEventListener("click", () => {
		if (this.isGameEnded) {
		  this.startGame();
		} else {
		  this.pauseGame();
		}
	  });
  
	  document.addEventListener("keydown", event => {
		if (!this.snakeMoving) return;
		if (event.key === "ArrowUp" && this.moveY !== 1) {
		  this.moveX = 0;
		  this.moveY = -1;
		} else if (event.key === "ArrowDown" && this.moveY !== -1) {
		  this.moveX = 0;
		  this.moveY = 1;
		} else if (event.key === "ArrowLeft" && this.moveX !== 1) {
		  this.moveX = -1;
		  this.moveY = 0;
		} else if (event.key === "ArrowRight" && this.moveX !== -1) {
		  this.moveX = 1;
		  this.moveY = 0;
		}
	  });
	}
  }
  
  const app = new App();
  app.render();
  