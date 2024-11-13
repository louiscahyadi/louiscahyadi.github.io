// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  // Add your form submission logic here
  alert('Message sent successfully!');
  this.reset();
});

// Data portfolio
const portfolioData = {
  1: {
    title: 'Project 1',
    image: '/img/Exp1.png',
    description: '✨UI/UX Designer',
    technologies: ['Figma'],
    link: 'https://github.com/link-project-1',
  },
  2: {
    title: 'Project 2',
    image: '/img/Exp2.png',
    description: '✏️Youtube Thumbnail Editor',
    technologies: ['Canva'],
    link: 'https://github.com/link-project-2',
  },
  3: {
    title: 'Project 3',
    image: '/img/Exp3.png',
    description: '🎥Video Editor',
    technologies: ['Filmora13'],
    link: 'https://github.com/link-project-3',
  },
  4: {
    title: 'Project 4',
    image: '/img/Exp4.png',
    description: '⌨️Fast Typing 90WPM🔥',
    technologies: ['https://10fastfingers.com/typing-test/indonesian'],
    link: 'https://github.com/link-project-4',
  },
  5: {
    title: 'Project 5',
    image: '/img/Exp5.png',
    description: '🎥Video Editor',
    technologies: ['Filmora13'],
    link: 'https://github.com/link-project-5',
  },
};

// Portfolio item click handler
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
  item.addEventListener('click', function () {
    const projectId = index + 1;
    const project = portfolioData[projectId];

    const modal = document.getElementById('portfolioModal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
      <h2>${project.title}</h2>
      <img src="${project.image}" alt="${project.title}" style="max-width: 100%; margin: 20px 0;">
      <p>${project.description}</p>
      <h4>Technologies Used:</h4>
      <ul>
        ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
      </ul>
      <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
    `;

    modal.style.display = 'block';
  });
});

// Tambahkan fungsi untuk menutup modal
document.querySelector('.close').onclick = function () {
  document.getElementById('portfolioModal').style.display = 'none';
};

// Menutup modal jika user mengklik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById('portfolioModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

console.log('JavaScript file connected!');
