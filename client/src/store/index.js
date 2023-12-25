import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#318CE7",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
