const variants = {
  copper: { finish: 'Copper', price: '$84.00', status: 'In stock', colors: ['#a94b2f', '#e4b96f'] },
  graphite: { finish: 'Graphite', price: '$79.00', status: 'Low stock', colors: ['#2b3133', '#8b9797'] },
  cream: { finish: 'Cream', price: '$82.00', status: 'Preorder', colors: ['#f2ead6', '#b8462c'] }
};

const gallery = document.querySelector('.gallery');
const buttons = document.querySelectorAll('[data-variant]');
const thumbs = document.querySelectorAll('[data-color]');

function selectVariant(key) {
  const variant = variants[key];
  document.querySelector('#finish').textContent = variant.finish;
  document.querySelector('#price').textContent = variant.price;
  document.querySelector('#status').textContent = variant.status;
  gallery.style.background = `linear-gradient(145deg, ${variant.colors[0]}, ${variant.colors[1]})`;
  buttons.forEach(button => button.classList.toggle('active', button.dataset.variant === key));
  thumbs.forEach(button => button.classList.toggle('active', button.dataset.color === key));
}

buttons.forEach(button => button.addEventListener('click', () => selectVariant(button.dataset.variant)));
thumbs.forEach(button => button.addEventListener('click', () => selectVariant(button.dataset.color)));
