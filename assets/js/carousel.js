let currentIndex = 0;

function getCardStep(carousel) {
  const firstCard = carousel.querySelector(".card");
  if (!firstCard) return 0;

  const cardRect = firstCard.getBoundingClientRect();
  const styles = window.getComputedStyle(carousel);
  const gapValue = styles.columnGap || styles.gap || "0";
  const gap = parseFloat(gapValue) || 0;

  return cardRect.width + gap;
}

function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  const cards = carousel.querySelectorAll(".card");
  if (!cards.length) return;

  const visibleCards = 3;
  const maxIndex = Math.max(0, cards.length - visibleCards);

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const step = getCardStep(carousel);
  if (!step) return;

  carousel.scrollTo({
    left: currentIndex * step,
    behavior: "smooth",
  });
}

// rolagem com scroll do mouse / trackpad: 1 card por vez
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  carousel.addEventListener(
    "wheel",
    (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        const direction = event.deltaY > 0 ? 1 : -1;
        scrollCarousel(direction);
      }
    },
    { passive: false }
  );
});
