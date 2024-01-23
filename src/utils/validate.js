export const validateEmail = (email) => {
  // Регулярний вираз для перевірки валідності електронної пошти
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  // Додайте власні вимоги для паролю, наприклад, мінімальна довжина
  return password.length >= 6;
};
