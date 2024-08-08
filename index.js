function gameStart() {
  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(".board-column[data-index='00']");

    //console.log(event.keyCode);
    if (keyCode >= 65 && keyCode <= 90) {
      thisBlock.innerText = key;
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  //addEventListener(event, function, useCapture)
}

gameStart();
