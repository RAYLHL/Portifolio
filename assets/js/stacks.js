
  const track = document.querySelector(".stack-track");
  const group = document.querySelector(".stack-group");

  // duplica o grupo até preencher bem a tela
  while (track.offsetWidth < window.innerWidth * 2) {
    track.appendChild(group.cloneNode(true));
  }

  let position = 0;
  const speed = 0.6; // ajuste de velocidade

  function animate() {
    position -= speed;

    // pega a largura do primeiro grupo
    const firstGroup = track.children[0];
    const groupWidth = firstGroup.offsetWidth;

    // quando o primeiro grupo saiu completamente
    if (Math.abs(position) >= groupWidth) {
      position += groupWidth;
      track.appendChild(firstGroup);
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();

