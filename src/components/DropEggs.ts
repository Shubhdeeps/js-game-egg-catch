import k from "../initKaboom";
import { addEgg } from "./Eggs";

const {
  add,
  sprite,
  pos,
  area,
  body,
  onKeyPress,
  onKeyDown,
  stay,
  rect,
  width,
  height,
  outline,
  color,
  scene,
  loadSprite,
  go,
  scale,
  onUpdate,
  text,
  wait,
  rand,
} = k;

// white = 11, blue = 3, green = 5, gold = 1
const EggSpawn = [
  "white",
  "green",
  "white",
  "white",
  "golden",
  "white",
  "green",
  "white",
  "blue",
  "white",
  "green",
  "white",
  "white",
  "blue",
  "white",
  "green",
  "blue",
  "white",
  "green",
  "white",
];

export function dropEggs() {
  const random = rand(0, 19);
  const varient = EggSpawn[Math.floor(random)] as
    | "white"
    | "golden"
    | "blue"
    | "green";

  addEgg(varient);
}
