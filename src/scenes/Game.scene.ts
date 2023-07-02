import { addChicken } from "../components/Chicken";
import { chickenEggCollition } from "../components/ChickenEggCollition";
import { dropEggs } from "../components/DropEggs";
import { floorEggCollision } from "../components/FloorEggCollision";
import k from "../initKaboom";
import "../sprites/index";

const {
  add,
  sprite,
  pos,
  area,
  body,
  stay,
  rect,
  width,
  height,
  color,
  scene,
  go,
  text,
  wait,
} = k;

// initLoadSprites();
export function GameScene() {
  //set gravity
  k.setGravity(1600);
  //render game scene

  scene("game", async () => {
    //grass to bottom
    add([sprite("grass"), pos(0, height() - 161), k.fixed(), stay()]);

    //ADD NORMAL SIZED CHICKEN
    const chicken = addChicken("normal");

    // add floor
    const floor = add([
      rect(width(), 1),
      pos(0, height() - 1),
      area(),
      body({ isStatic: true }),
    ]);

    function spawnEgg() {
      //drop eggs
      dropEggs();
      wait(1.2, () => {
        spawnEgg();
      });
    }
    spawnEgg();

    //Add score board
    const scoreLabel = add([
      text(`Score: ${0}`),
      pos(24, 24),
      k.fixed(),
      stay(),
    ]);
    //add dropped eggs
    const faultsLabel = add([
      text(`Dropped: ${10}`),
      pos(24, 52),
      k.fixed(),
      stay(),
    ]);

    chickenEggCollition(chicken, "white", scoreLabel);
    chickenEggCollition(chicken, "golden", scoreLabel);
    chickenEggCollition(chicken, "green", scoreLabel);
    chickenEggCollition(chicken, "blue", scoreLabel);

    //floor and egg collision
    floorEggCollision("white", floor, faultsLabel);
    floorEggCollision("blue", floor, faultsLabel);
    floorEggCollision("golden", floor, faultsLabel);
    floorEggCollision("green", floor, faultsLabel);
  }); // end of scene

  go("game");
}
