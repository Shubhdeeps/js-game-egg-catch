import k from "../initKaboom";

const { add, sprite, pos, area, body, onKeyPress, onKeyDown, height, scale } =
  k;

const sizesAndHeight = {
  normal: 127,
  small: 108,
  large: 163,
};

const sizeAndSpriteName = {
  small: "smallChicken",
  normal: "chicken",
  large: "hugeChicken",
};

export function addChicken(size: "small" | "large" | "normal") {
  const heightToBeSub = sizesAndHeight[size] + 100;

  const chicken = add([
    sprite(sizeAndSpriteName[size], {
      animSpeed: 2,
      frame: 1,
    }),
    pos(50, height() - heightToBeSub),
    //original chicken height 250
    //scale down to 50%, now height is 125.
    // total window height - 125
    scale(0.5),
    area(),
    body(),
  ]);
  chicken.play("idle");

  onKeyDown("right", () => {
    chicken.play("right");
    chicken.move(700, 0);
  });
  onKeyDown("left", () => {
    chicken.play("left");
    chicken.move(-700, 0);
  });

  onKeyPress("space", () => {
    if (chicken.isGrounded()) {
      //only jump if grounded!
      chicken.jump();
      chicken.play("idle");
    }
  });
  return chicken;
}
