<script lang="ts">
  import { onMount } from "svelte";

  interface Position {
    x: number;
    y: number;
  }

  let canvas: HTMLCanvasElement | undefined;
  function runGame() {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CANVAS_SIZE = canvas.width;

    const CELLS_COUNT = 20;
    const CELL_SIZE = Math.round(CANVAS_SIZE / CELLS_COUNT);

    let snake: Position[] = [{ x: CELL_SIZE, y: CELL_SIZE }];
    let food: Position | undefined = undefined;
    let speed = 1;


    update()

    function update() {
      spawnFood();
      drawBoard();
      drawSnake();
      drawFood();

      setTimeout(update, 100);
    }

    function isContact(entity: Position) {
      let contact = false;
      for (let i = 0; i < snake.length && !contact; i++) {
        contact = snake[i].x === entity.x && snake[i].y === entity.y;
      }
      return contact;
    }

    function isValid(pos: Position) {
      return (
        CELL_SIZE <= pos.x && pos.x < CANVAS_SIZE && CELL_SIZE <= pos.y && pos.y < CANVAS_SIZE
      );
    }

    function spawnFood() {
      do {
        food = {
          x:
            Math.floor(Math.round(Math.random() * CANVAS_SIZE) / CELL_SIZE) *
            CELL_SIZE,
          y:
            Math.floor(Math.round(Math.random() * CANVAS_SIZE) / CELL_SIZE) *
            CELL_SIZE,
        };
      } while (isContact(food) || !isValid(food));
    }

    function drawFood() {
      ctx!.beginPath();
      ctx!.fillStyle = "#f43e3e";
      ctx!.arc(
        food!.x + CELL_SIZE / 2,
        food!.y + CELL_SIZE / 2,
        CELL_SIZE / 2,
        0,
        2 * Math.PI,
      );
      ctx!.fill();
      ctx!.closePath();
    }

    function drawSnake() {
      ctx!.fillStyle = "#2f8f1f";
      for (let i = 0; i < snake.length; i++) {
        const cell = snake[i];
        ctx!.fillRect(cell.x, cell.y, CELL_SIZE, CELL_SIZE);
      }
    }

    function drawBoard() {
      for (let i = 1; i < CELLS_COUNT; i++) {
        for (let j = 1; j < CELLS_COUNT; j++) {
          ctx!.fillStyle = "#111111";
          if ((i * j) % 2 === 0) ctx!.fillStyle = "#212121";
          ctx!.fillRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
      }
    }
  }

  onMount(() => runGame());
</script>

<div class="py-8 w-full flex justify-center items-center">
  <canvas bind:this={canvas} width="200px" height="200px"> </canvas>
</div>
