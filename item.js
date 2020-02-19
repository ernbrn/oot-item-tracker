const items = document.getElementsByClassName("item");

Array.from(items).forEach(function (element) {
  element.addEventListener('click', missingItemClick)
});

function missingItemClick(event) {
  const {target} = event;
  target.classList.toggle('found');
}