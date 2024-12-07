export const REGEX = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  passwordMinLength: /.{8,}$/,
  passwordUppercase: /^(?=.*[A-Z])/,
  passwordLowercase: /^(?=.*[a-z])/,
  passwordDigit: /^(?=.*[0-9])/,
  passwordSpecialChar: /^(?=.*[\W_])/,
  passwordRegex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\!\?\*\.]).{8,}$/,
  firstNameRegex: /^(?=.*[\p{Lu}])(?=.*[\p{Ll}]).{2,}$/u,
  lastNameRegex: /^(?=.*[\p{Lu}])(?=.*[\p{Ll}]).{2,}$/u,
  phoneNumberRegex: /^[\d\s\-\+]+$/,
  shopNameRegex: /^[A-Z][a-zA-Z .]{1,}$/,
  addressRegex: /^(?=.*[A-Z])(?=.*[a-z]).{2,}$/,
};

