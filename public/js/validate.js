(function () {
  const form = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');

  function isLikelyEmail(value) {
    if (!value) return false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  }

  form.addEventListener('submit', function (e) {
    const val = emailInput.value.trim();
    if (!isLikelyEmail(val)) {
      e.preventDefault();
      emailError.style.display = 'block';
      emailInput.setAttribute('aria-invalid', 'true');
      emailInput.focus();
      return false;
    }
    emailError.style.display = 'none';
    emailInput.removeAttribute('aria-invalid');
    return true;
  });
})();
