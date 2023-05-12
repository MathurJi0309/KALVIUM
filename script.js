let selectedDiv;

const move = function (div) {
  const elements = document.querySelectorAll(".div");
  elements.forEach((div) => {
    div.addEventListener("mousedown", () => {
      div.style.position = "absolute";
      selectedDiv = div;
      document.onmousemove = (e) => {
        let x = e.pageX;
        let y = e.pageY;

        selectedDiv.style.left = x - 50 + "px";
        selectedDiv.style.top = y - 50 + "px";
        console.log(selectedDiv);
      };
    });
  });
  document.onmouseup = function (e) {
    selectedDiv = null;
  };
};
