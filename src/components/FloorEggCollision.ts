import { AreaComp, BodyComp, GameObj, PosComp, RectComp } from "kaboom";
import k from "../initKaboom";

const { shake, wait } = k;
let maxEggDrops = 10;
export function floorEggCollision(
  varient: "white" | "golden" | "blue" | "green",
  floor: GameObj<PosComp | AreaComp | BodyComp | RectComp>,
  faultsLabel: any
) {
  floor.onCollide(varient, (egg) => {
    shake(5);

    egg.play("crack");
    maxEggDrops--;
    faultsLabel.text = `Dropped: ${maxEggDrops}`;
    wait(0.5, () => {
      egg.destroy();
    });
  });
}
