import Paddle from "./paddle.js";

const canvas = document.getElementById("canvas");

canvas.width = 900;
canvas.height = 500;

const context = canvas.getContext("2d");

const color_whitish = "#F0EBD8";

const player = new Paddle(20, canvas.height / 2, 5, 70, color_whitish);


player.create(context);
