// Expert Riyadh Law Firm — shared front-end behavior

document.addEventListener('DOMContentLoaded', function () {
  // Scroll reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // Mobile nav toggle
  var toggle = document.querySelector('.mobile-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('mobile-open');
    });
  }

  // Mobile mega-menu: tap the trigger to expand/collapse instead of following the link,
  // only below the desktop breakpoint (desktop uses plain CSS :hover).
  document.querySelectorAll('.nav-item.has-mega > .nav-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        var item = trigger.closest('.nav-item');
        var wasOpen = item.classList.contains('mobile-mega-open');
        document.querySelectorAll('.nav-item.mobile-mega-open').forEach(function (open) {
          if (open !== item) open.classList.remove('mobile-mega-open');
        });
        item.classList.toggle('mobile-mega-open', !wasOpen);
      }
    });
  });
});
