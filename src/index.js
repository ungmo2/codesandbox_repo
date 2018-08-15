var target = document.querySelector(".box");
var player = target.animate(
  [{ transform: "translate(0)" }, { transform: "translate(100px, 100px)" }],
  500
);
player.addEventListener("finish", function() {
  target.style.transform = "translate(100px, 100px)";
});
