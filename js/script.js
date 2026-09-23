/* ============================================
   The Smart Modern Public School
   Main JavaScript File
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  // ========== Page Loader ==========
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () {
        loader.classList.add('hidden');
      }, 400);
    });
    // Fallback
    setTimeout(function () {
      loader.classList.add('hidden');
    }, 2000);
  }

  // ========== Sticky Header ==========
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ========== Mobile Hamburger Menu ==========
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ========== Active Navigation Link ==========
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ========== Smooth Scroll for Anchor Links ==========
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========== Back to Top Button ==========
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ========== Animated Statistics Counters ==========
  const statSection = document.querySelector('.stats');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    const counters = document.querySelectorAll('.stat-item h3[data-target]');
    counters.forEach(function (counter) {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;

      const updateCounter = function () {
        current += step;
        if (current < target) {
          counter.innerHTML = Math.floor(current) + '<span>' + suffix + '</span>';
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerHTML = target + '<span>' + suffix + '</span>';
        }
      };
      updateCounter();
    });
    countersAnimated = true;
  }

  if (statSection) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(statSection);
  }

  // ========== Gallery Filtering ==========
  const filterButtons = document.querySelectorAll('.gallery-filters button');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        // Active state
        filterButtons.forEach(function (b) {
          b.classList.remove('active');
        });
        this.classList.add('active');

        const filter = this.getAttribute('data-filter');

        galleryItems.forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  }

  // ========== Gallery Lightbox ==========
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = document.querySelector('.lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        const imgSrc = this.querySelector('img').getAttribute('src');
        const imgAlt = this.querySelector('img').getAttribute('alt') || 'Gallery Image';
        lightboxImg.setAttribute('src', imgSrc);
        lightboxImg.setAttribute('alt', imgAlt);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ========== FAQ Accordion ==========
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(function (i) {
          i.classList.remove('active');
          const answer = i.querySelector('.faq-answer');
          if (answer) answer.style.maxHeight = null;
        });

        // Open clicked if it was closed
        if (!isActive) {
          item.classList.add('active');
          const answer = item.querySelector('.faq-answer');
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        }
      });
    }
  });

  // ========== Form Validation - Admission Form ==========
  const admissionForm = document.getElementById('admissionForm');
  if (admissionForm) {
    admissionForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      // Clear previous errors
      admissionForm.querySelectorAll('.form-group').forEach(function (group) {
        group.classList.remove('error');
      });

      // Required fields
      const requiredFields = [
        { id: 'studentName', message: 'Student name is required' },
        { id: 'fatherName', message: "Father's name is required" },
        { id: 'dob', message: 'Date of birth is required' },
        { id: 'gender', message: 'Please select gender' },
        { id: 'classApplying', message: 'Please select class' },
        { id: 'phone', message: 'Phone number is required' },
        { id: 'email', message: 'Email is required' },
        { id: 'address', message: 'Address is required' }
      ];

      requiredFields.forEach(function (field) {
        const input = document.getElementById(field.id);
        const group = input ? input.closest('.form-group') : null;
        if (input && group) {
          const value = input.value.trim();
          if (!value) {
            group.classList.add('error');
            const errorMsg = group.querySelector('.error-msg');
            if (errorMsg) errorMsg.textContent = field.message;
            isValid = false;
          }
        }
      });

      // Email validation
      const emailInput = document.getElementById('email');
      if (emailInput && emailInput.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          const group = emailInput.closest('.form-group');
          if (group) {
            group.classList.add('error');
            const errorMsg = group.querySelector('.error-msg');
            if (errorMsg) errorMsg.textContent = 'Please enter a valid email address';
          }
          isValid = false;
        }
      }

      // Phone validation
      const phoneInput = document.getElementById('phone');
      if (phoneInput && phoneInput.value.trim()) {
        const phoneRegex = /^[\d\s\-\+\(\)]{10,15}$/;
        if (!phoneRegex.test(phoneInput.value.trim())) {
          const group = phoneInput.closest('.form-group');
          if (group) {
            group.classList.add('error');
            const errorMsg = group.querySelector('.error-msg');
            if (errorMsg) errorMsg.textContent = 'Please enter a valid phone number';
          }
          isValid = false;
        }
      }

      if (isValid) {
        // Show success message
        const successMsg = document.getElementById('admissionSuccess');
        if (successMsg) {
          successMsg.classList.add('show');
          admissionForm.reset();
          // Scroll to success
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Hide after 8 seconds
          setTimeout(function () {
            successMsg.classList.remove('show');
          }, 8000);
        }
      } else {
        // Scroll to first error
        const firstError = admissionForm.querySelector('.form-group.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  // ========== Form Validation - Contact Form ==========
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;

      contactForm.querySelectorAll('.form-group').forEach(function (group) {
        group.classList.remove('error');
      });

      const requiredFields = [
        { id: 'contactName', message: 'Name is required' },
        { id: 'contactEmail', message: 'Email is required' },
        { id: 'contactPhone', message: 'Phone number is required' },
        { id: 'contactSubject', message: 'Subject is required' },
        { id: 'contactMessage', message: 'Message is required' }
      ];

      requiredFields.forEach(function (field) {
        const input = document.getElementById(field.id);
        const group = input ? input.closest('.form-group') : null;
        if (input && group) {
          if (!input.value.trim()) {
            group.classList.add('error');
            const errorMsg = group.querySelector('.error-msg');
            if (errorMsg) errorMsg.textContent = field.message;
            isValid = false;
          }
        }
      });

      // Email validation
      const emailInput = document.getElementById('contactEmail');
      if (emailInput && emailInput.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
          const group = emailInput.closest('.form-group');
          if (group) {
            group.classList.add('error');
            const errorMsg = group.querySelector('.error-msg');
            if (errorMsg) errorMsg.textContent = 'Please enter a valid email address';
          }
          isValid = false;
        }
      }

      if (isValid) {
        const successMsg = document.getElementById('contactSuccess');
        if (successMsg) {
          successMsg.classList.add('show');
          contactForm.reset();
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(function () {
            successMsg.classList.remove('show');
          }, 8000);
        }
      } else {
        const firstError = contactForm.querySelector('.form-group.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  }

  // ========== Scroll Reveal Animations ==========
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  }
});
