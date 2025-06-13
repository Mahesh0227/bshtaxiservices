const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCount, 20); // Adjust speed here
    } else {
      counter.innerText = target.toLocaleString(); // Format with commas
    }
  };

  updateCount();
});
function openModal() {
  document.getElementById("videoModal").style.display = "block";
}

function closeModal() {
  document.getElementById("videoModal").style.display = "none";
  document.querySelector("#videoModal iframe").src += ""; // Reset video
}