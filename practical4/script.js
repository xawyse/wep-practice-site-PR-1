// Дуже простий "ввід з клавіатури": кліки по кнопках додають символи у верхнє поле

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("kbd-input");
  const result = document.getElementById("kbd-result");
  const keys = document.querySelectorAll(".key");

  function addChar(ch) {
    input.value += ch;
  }

  function backspace() {
    input.value = input.value.slice(0, -1);
  }

  function doEnter() {
    result.value = input.value;
  }

  keys.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const label = btn.textContent.trim();

      if (label === "Backspace") {
        backspace();
      } else if (label === "Space") {
        addChar(" ");
      } else if (label === "Enter") {
        doEnter();
      } else if (
        label === "Shift" ||
        label === "Ctrl" ||
        label === "Alt" ||
        label === "Caps" ||
        label === "Tab" ||
        label === "Esc"
      ) {
        // службові клавіші — нічого не робимо
        return;
      } else {
        // усі інші символи просто додаємо до рядка
        addChar(label);
      }

      input.focus();
    });
  });
});





