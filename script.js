document.addEventListener('DOMContentLoaded', function () {
  // Set up the intersection observer to watch for section visibility
  const sections = document.querySelectorAll('.section');
  const colors = [
    'linear-gradient(to right, #FFD700,rgb(230, 111, 14))',  // Yellow-Orange (1st Section)
    'linear-gradient(to right, #FFA500, #FF6347)',  // Orange to Tomato Red (2nd Section)
    'linear-gradient(to right, #FF6347, #8B0000)',  // Tomato Red to Dark Red (3rd Section)
    'linear-gradient(to right,rgb(55, 102, 162), #00008B)'   // LightBlue to Dark Blue (4th Section)
  ];

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Get the index of the currently visible section
        const index = Array.from(sections).indexOf(entry.target);

        // Change the background color based on the section's index
        document.body.style.background = colors[index];
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

  // Observe each section
  sections.forEach(section => observer.observe(section));
});
