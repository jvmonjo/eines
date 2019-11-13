export default function handleMenu() {
  const btn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav-menu');
  // console.log('btn', btn)
  if (btn !== null) {
    btn.addEventListener("click", () => {
      btn.classList.toggle("is-active");
      nav.classList.toggle('is-active');
    });
  }
}