export const srLogin = {
  title: "Prijavite se u Foto Studio",
  passwordLabel: "Lozinka *",
  passwordPlaceholder: "Unesi lozinku",
  emailPlaceHolder: "Unesite email",
  forgotPassword: "Zaboravili ste lozinku?",
  loginButton: "Prijava",
  emailRequired: "Email je obavezan",
  invalidEmail: "Neispravan email",
  passwordRequired: "Lozinka je obavezna",
  passwordTooShort: "Lozinka je prekratka",
  passwordMustContainUppercase: "Lozinka mora sadržati veliko slovo",
  passwordMustContainLowercase: "Lozinka mora sadržati malo slovo",
  passwordMustContainDigit: "Lozinka mora sadržati broj",
  passwordMustContainSpecialChar: "Lozinka mora sadržati poseban karakter",
  togglePasswordVisibility: "Prikazi šifru",
};

export const srAggregateData = {
  countPhotoStudio:"Ukupan br. foto radnji",
  countPhoto:"Dostupne fotografije",
  countPhotoSession:"Br. aktivnih događaja",
  countEvent:"Br. aktivnih sesija",
  altPhotoStudio:"CameraSrc",
  altEvent:"DogađajSrc",
  altSession:"SesijaSrc",
  altFolder:"FolderSrc",
}

export const srAdminPage = {
  heading: "Kontrolna tabla",
  footer:"Sva prava zadržana."
};

export const srCompanyPage = {
  body1: "Fotografska radnja",
};

export const srAddUser = {
  headingEdit:"Izmeni korisnika",
  heading: "Dodaj novog korisnika",
  name: "Ime korisnika *",
  namePlaceHolder: "Unesi ime korisnika",
  lastName: "Prezime korisnika *",
  lastNamePlaceHolder: "Unesi prezime korisnika",
  email: "Email korisnika *",
  emailPlaceHolder: "Unesi email korisnika",
  role: "Uloga *",
  rolePlaceHolder: "Izaberi ulogu za korisnika",
  rolesOptions: {
    superadmin:"Super Admin",
    customer: "Klijent"
  },
  cancelButton: "Odustani",
  submitButton: "Sačuvaj",
  firstNameRequired: "Ime je obavezno",
  invalidFirstName: "Neispravno ime",
  lastNameRequired: "Prezime je obavezno",
  invalidLastName: "Neispravno prezime",
  emailRequired: "Email je obavezan",
  invalidEmail: "Neispravan email",
  roleRequired: "Uloga je obavezna",
};

export const srAddCompany = {
  title:"Informacije o fotografskoj radnji",
  heading:"Dodajte novu fotografsku radnju",
  shop:"Ime fotografske radnje *",
  enterShopName: "Molimo unesite ime radnje",
  phoneNumber: "Broj telefona *",
  enterPhoneNumber: "Molimo unesite broj telefona",
  address: "Adresa *",
  enterAddress: "Molimo unesite adresu",
  logo:"Logo *",
  uploadOr:"Prevucite ili ",
  uploadImage:"upload sliku",
  cancelButton: "Odustani",
  submitButton: "Sačuvaj",
  shopNameRequired: "Ime radnje je obavezno",
  phoneNumberRequired:"Broj telefona je obavezan",
  addressRequired:"Adresa je obavezna",
  invalidShopName:"Neispravno ime prodavnice",
  invalidPhone:"Neispravan broj telefona",
  invalidAddress:"Neispravna adresa",
  modifyButton: "Izmeni",
}

export const srCompanyPanel = {
  heading: "Fotografske radnje",
  searchPlaceHolder: "Pronađi fotografsku radnju",
  noSearchContent: "Nema rezultata pretrage",
  addCompanyButton: "Dodaj",
  infoButton: "Info",
  editCompanyButton: "Izmeni",
  deleteTitle: "Da li si siguran da želiš da ukloniš nalog fotografske radnje?",
  deleteMessage:
    "Ukoliko uklonite nalog fotografske radnje nećete moći da ga vratite nazad.",
  deleteCancel: "Odustani",
  deleteConfirm: "Ukloni nalog",
};

export const srUserPanel = {
  heading: "Korisnici",
  searchPlaceHolder: "Pronađi korisnika",
  addUserButton: "Dodaj",
  noSearchContent: "Nema rezultata pretrage",
  resetPasswordButton: "Resetuj lozinku",
  editUserButton: "Izmeni",
  previousPage: "Prethodna",
  nextPage: "Sledeća",
  deleteTitle: "Da li si siguran da zeliš da ukloniš nalog korisnika?",
  deleteMessage:
    "Ukoliko uklonite nalog korisnika nećete moći da ga vratite nazad.",
  deleteCancel: "Odustani",
  deleteConfirm: "Ukloni nalog",
};

export const srResetPassword = {
  newPassword: "Nova šifra *",
  passwordRequired: "Lozinka je obavezna",
  passwordTooShort: "Lozinka je prekratka",
  passwordMustContainUppercase: "Lozinka mora sadržati veliko slovo",
  passwordMustContainLowercase: "Lozinka mora sadržati malo slovo",
  passwordMustContainDigit: "Lozinka mora sadržati broj",
  passwordMustContainSpecialChar: "Lozinka mora sadržati poseban karakter",
  resetButton: "Resetuj",

};

export const srResetPasswordEmail = {
  emailLabel: "Email *",
  emailPlaceholder: "Unesite email",
  resetButton: "Resetuj",
  emailRequired: "Email je obavezan",
  invalidEmail: "Neispravan email",
};
export const srLogout = {
  logoutLabel:"Odjavi se"
}

export const srToast = {
  loginSuccess:"Uspešna prijava",
  loginError: 'Neuspešna prijava',
  companyAddSuccess: "Kompanija uspešno dodata",
  companyEditSuccess: "Kompanija je uspešno izmenjena",
  logoutSuccess: "Uspešno ste se odjavili",
  userAddSuccess: "Korisnik je uspešno dodat",
  userEditSuccess: "Korisnik je uspešno izmenjen",
  offlineServer:"Server trenutno nije dostupan",
  serverError: "Doslo je do greške"
}

export default {
  login: srLogin,
  adminPage: srAdminPage,
  companyPage: srCompanyPage,
  userContent: srUserPanel,
  companyContent: srCompanyPanel,
  addUserModal: srAddUser,
  resetPassword: srResetPassword,
  resetPasswordEmail: srResetPasswordEmail,
  addCompanyModal: srAddCompany,
  logout: srLogout,
  aggregateData:srAggregateData,
  toast:srToast
};

