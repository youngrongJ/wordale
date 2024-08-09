const 정답 = "JINNY";

let attempts = 0;
let index = 0;
let timer;

function appStart() {
  // 게임 승리 메시지
  const winDisplayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "정답입니다!";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:38%; background-color:white; width:200px; height:100px;";
    document.body.appendChild(div);
  };

  // 게임 패배 메시지
  const loseDisplayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "다시 시도해주세요!";
    div.style =
      "display:flex; justify-content:center; align-items:center; position:absolute; top:40vh; left:38%; background-color:white; width:200px; height:100px;";
    document.body.appendChild(div);
  };

  // 게임 승리 처리
  const wingameover = () => {
    window.removeEventListener("keydown", handleKeydown);
    winDisplayGameover();
    clearInterval(timer);
  };

  // 게임 패배 처리
  const losegameover = () => {
    window.removeEventListener("keydown", handleKeydown);
    loseDisplayGameover();
    clearInterval(timer);
  };

  const nextLine = () => {
    // 시도 횟수가 6번인 경우 패배 처리
    if (attempts >= 5) {
      losegameover();
      return;
    }
    attempts += 1;
    index = 0;
  };

  const updateKeyboard = (key, color) => {
    const keyElement = document.querySelector(
      `.keyboard-column[data-key='${key}']`
    );
    if (keyElement) {
      keyElement.style.backgroundColor = color;
    }
  };

  const handleEnterKey = () => {
    let 맞은_갯수 = 0;

    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-column[data-index='${attempts}${i}']`
      );

      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];

      if (입력한_글자 === 정답_글자) {
        맞은_갯수 += 1;
        block.style.background = "#6AAA64";
        updateKeyboard(입력한_글자, "#6AAA64");
      } else if (정답.includes(입력한_글자)) {
        block.style.background = "#C9B458";
        updateKeyboard(입력한_글자, "#C9B458");
      } else {
        block.style.background = "#787C7E";
        updateKeyboard(입력한_글자, "#000000"); // 틀린 글자는 블랙으로 표시
      }
      block.style.color = "white";
    }

    if (맞은_갯수 === 5) {
      wingameover();
    } else {
      nextLine();
    }
  };

  const handleBackspace = () => {
    if (index > 0) {
      const preBlock = document.querySelector(
        `.board-column[data-index='${attempts}${index - 1}']`
      );
      preBlock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };

  const handleKeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-column[data-index='${attempts}${index}']`
    );

    if (event.key === "Backspace") handleBackspace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };

  const startTimer = () => {
    const 시작_시간 = new Date();

    function setTime() {
      const 현재_시간 = new Date();
      const 흐른_시간 = new Date(현재_시간 - 시작_시간);
      const 분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
      const 초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
      const timeDiv = document.querySelector("#timer");
      timeDiv.innerText = `${분}:${초}`;
    }

    timer = setInterval(setTime, 1000);
  };

  startTimer();
  window.addEventListener("keydown", handleKeydown);
}

appStart();
