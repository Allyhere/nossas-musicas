import { Splide } from "@splidejs/splide";
import "@splidejs/splide/css";

const audioPlayers = [...document.querySelectorAll("audio")];
const playing = [];

audioPlayers.forEach((player) => {
  player.addEventListener("playing", ({ target }) => {
    audioPlayers
      .filter((audio) => !audio.paused && audio !== target)
      .forEach((audio) => audio.pause());
  });
});

const splide = new Splide(".splide", {
  type: "loop",
  pagination: false,
  padding: "1rem",
  gap: "3ch",
  perPage: 1
});

splide.mount();
