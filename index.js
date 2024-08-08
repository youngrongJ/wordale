const 정답 = "jinny";

let index = 0;
let attemps = 0;

function gameStart() {
  const handleEnterKey = () => {
    //정답확인
  };

  const handleKeyDown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    //console.log(event.keyCode);
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attemps}${index}']`
    );

    if (event.key === "Enter") {
      handleEnterKey();
    } else if (index === 5) return;
    else if (keyCode >= 65 && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
    }
    console.log("키입력", event.key);
  };

  window.addEventListener("keydown", handleKeyDown);
  //addEventListener(event, function, useCapture)
}

gameStart();
