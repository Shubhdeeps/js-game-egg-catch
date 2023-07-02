import {
  AreaComp,
  BodyComp,
  SpriteComp,
  GameObj,
  PosComp,
  ScaleComp,
} from "kaboom";

const varientAndScore = {
  white: 1,
  golden: 10,
  blue: 5,
  green: 2,
};
let scores = 0;
export function chickenEggCollition(
  chicken: GameObj<SpriteComp | PosComp | ScaleComp | AreaComp | BodyComp>,
  varient: "white" | "golden" | "blue" | "green",
  scoreLabel: any
) {
  chicken.onCollide(varient, (egg) => {
    egg.destroy();
    scores += varientAndScore[varient];
    scoreLabel.text = `Score: ${scores}`;
  });
}
