import grass from "../assets/grass.png";
import blueEgg from "../assets/blue-egg.png";
import goldEgg from "../assets/gold-egg.png";
import greenEgg from "../assets/green-egg.png";
import whiteEgg from "../assets/white-egg.png";
import hugeChicken from "../assets/huge-chicken.png";
import chicken from "../assets/normal-chicken.png";
import smallChicken from "../assets/small-chicken.png";
import k from "../initKaboom";

const { loadSprite } = k;

const CHICKEN_SPRITE_OPTIONS = {
  sliceX: 2,
  sliceY: 1,
  anims: {
    idle: 0,
    right: 0,
    left: 1,
  },
};

const EGG_SPRITE_OPTIONS = {
  sliceX: 5,
  sliceY: 1,
  anims: {
    fall: 0,
    crack: { from: 1, to: 4 },
  },
};
export function initLoadSprites() {
  loadSprite("blueEgg", blueEgg, EGG_SPRITE_OPTIONS);
  loadSprite("goldEgg", goldEgg, EGG_SPRITE_OPTIONS);
  loadSprite("grass", grass);
  loadSprite("greenEgg", greenEgg, EGG_SPRITE_OPTIONS);
  loadSprite("whiteEgg", whiteEgg, EGG_SPRITE_OPTIONS);
  loadSprite("hugeChicken", hugeChicken, CHICKEN_SPRITE_OPTIONS);
  loadSprite("chicken", chicken, CHICKEN_SPRITE_OPTIONS);
  loadSprite("smallChicken", smallChicken, CHICKEN_SPRITE_OPTIONS);
}
