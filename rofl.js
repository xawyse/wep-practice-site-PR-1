document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".rofl-video-wrap video");
  const preview = document.getElementById("rofl-preview");

  if (!video || !preview) return;

  function hidePreview() {
    preview.style.display = "none";
  }

  // Сховати картинку, коли відео починає грати
  video.addEventListener("play", hidePreview);

  // Якщо користувач ставить на паузу, можна знову показати
  video.addEventListener("pause", () => {
    preview.style.display = "";
  });

  // Додатково реагуємо на вхід/вихід з повноекранного режиму
  document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement === video) {
      hidePreview();
    }
  });
});




