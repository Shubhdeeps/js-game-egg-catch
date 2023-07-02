import k from "../initKaboom";

const eggVarient = {
  white: 0,
  blue: 0,
  golden: 0,
  green: 0,
};

const varientAndName = {
  white: "whiteEgg",
  blue: "blueEgg",
  green: "greenEgg",
  golden: "goldEgg",
};

const { add, sprite, pos, area, body, width, scale, rand } = k;

export function addEgg(varient: "white" | "blue" | "golden" | "green") {
  const egg = add([
    sprite(varientAndName[varient], {
      animSpeed: 2,
      frame: 1,
    }),
    pos(rand(width() / 8, width() - width() / 8), 0),
    //original chicken height 250
    //scale down to 50%, now height is 125.
    // total window height - 125
    scale(0.5),
    area(),
    body(),
    varient,
  ]);
  egg.play("fall");
  return egg;
}
