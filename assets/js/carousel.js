let currentIndex = 0;

function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const cardWidth = 360;
  const gap = 20;

  const totalCards = carousel.children.length;
  const visibleCards = 3;
  const maxIndex = totalCards - visibleCards;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  carousel.scrollTo({
    left: currentIndex * (cardWidth + gap),
    behavior: "smooth"
  });
}
