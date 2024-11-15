// Smooth scrolling untuk navigasi
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};

// Handle form submission
const initContactForm = () => {
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent successfully!');
    this.reset();
  });
};

// Data portfolio projects
const portfolioData = {
  1: {
    title: 'UI/UX Design Project',
    image: '/img/Exp1.png',
    description: '✨UI/UX Designer with expertise in creating intuitive and engaging user interfaces',
    category: 'UI/UX Design',
    technologies: ['Figma'],
    link: 'https://github.com/link-project-1',
    preview: 'https://yoursite.com/preview-1',
  },
  2: {
    title: 'Youtube Thumbnail Design',
    image: '/img/Exp2.png',
    description: '✏️Professional Youtube Thumbnail Editor with creative design skills',
    category: 'Graphic Design',
    technologies: ['Canva'],
    link: 'https://github.com/link-project-2',
    preview: 'https://yoursite.com/preview-2',
  },
  3: {
    title: 'Video Editing Project',
    image: '/img/Exp3.png',
    description: '🎥Professional Video Editor with expertise in creating engaging content',
    category: 'Video Editing',
    technologies: ['Filmora13'],
    link: 'https://github.com/link-project-3',
    preview: 'https://yoursite.com/preview-3',
  },
  4: {
    title: 'Fast Typing Skills',
    image: '/img/Exp4.png',
    description: '⌨️Professional Fast Typing with 90 Words Per Minute speed',
    category: 'Skills',
    technologies: ['10FastFingers'],
    link: 'https://10fastfingers.com/typing-test/indonesian',
    preview: 'https://10fastfingers.com/typing-test/indonesian',
  },
  5: {
    title: 'Video Editing Project 2',
    image: '/img/Exp5.png',
    description: '🎥Advanced Video Editing with professional tools and techniques',
    category: 'Video Editing',
    technologies: ['Filmora13'],
    link: 'https://github.com/link-project-5',
    preview: 'https://yoursite.com/preview-5',
  },
};

// Generate modal content
const generateModalContent = (project) => {
  return `
    <div class="modal-header">
      <h2 class="modal-title">${project.title}</h2>
      <button type="button" class="close" aria-label="Close">&times;</button>
    </div>
    <div class="modal-body">
      <img src="${project.image}" alt="${project.title}" class="img-fluid rounded mb-4">
      <span class="portfolio-category">${project.category}</span>
      <p class="mt-3">${project.description}</p>
      <h4 class="mt-4">Technologies Used:</h4>
      <div class="tech-stack">
        ${project.technologies.map((tech) => `<span class="tech-badge">${tech}</span>`).join('')}
      </div>
    </div>
    <div class="modal-footer">
      <a href="${project.preview}" target="_blank" class="btn btn-secondary">Live Preview</a>
      <a href="${project.link}" target="_blank" class="btn btn-primary">View Project</a>
    </div>
  `;
};

// Initialize portfolio modal handlers
const initPortfolioModal = () => {
  // Portfolio button click handler
  document.querySelectorAll('.btn-view').forEach((button) => {
    button.addEventListener('click', function () {
      const projectId = this.getAttribute('data-project');
      const project = portfolioData[projectId];
      const modal = document.getElementById('portfolioModal');
      const modalContent = document.getElementById('modalContent');

      modalContent.innerHTML = generateModalContent(project);
      modal.style.display = 'block';

      // Panggil ulang event listener untuk tombol tutup
      document.querySelectorAll('.close').forEach((closeBtn) => {
        closeBtn.addEventListener('click', closeModal);
      });
    });
  });

  // Close modal when clicking the close button
  const closeModal = () => {
    document.getElementById('portfolioModal').style.display = 'none';
  };

  document.querySelectorAll('.close').forEach((closeBtn) => {
    closeBtn.addEventListener('click', closeModal);
  });

  // Close modal when clicking outside
  window.onclick = function (event) {
    const modal = document.getElementById('portfolioModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  // Tambahkan event listener untuk tombol ESC
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      document.getElementById('portfolioModal').style.display = 'none';
    }
  });
};

// Initialize all functionality
const initializeApp = () => {
  initSmoothScroll();
  initContactForm();
  initPortfolioModal();
  console.log('Application initialized successfully!');
};

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);
