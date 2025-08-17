document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".difficulty-link");
  const blocks = document.querySelectorAll(".puzzle-block");

  function showPuzzle(targetId) {
    blocks.forEach(block => {
      block.style.display = (block.id === targetId) ? "block" : "none";
    });
  }

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // 更新 active 樣式
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // 顯示對應謎題
      const target = link.dataset.target;
      showPuzzle(target);
    });
  });

  showPuzzle("medium");
});

document.querySelectorAll('.show-answer-btn').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isVisible = answer.style.display === 'block';
    answer.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? '顯示答案' : '隱藏答案';
  });
});
