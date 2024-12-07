export const enLogin = {
  title: "Log in to Photo Studio",
  emailPlaceHolder: "Enter your email",
  passwordLabel: "Password *",
  passwordPlaceholder: "Enter your password",
  forgotPassword: "Forgot Password?",
  loginButton: "Login",
  emailRequired: "Email is required",
  invalidEmail: "Invalid email",
  passwordRequired: "Password is required",
  passwordTooShort: "Password is too short",
  passwordMustContainUppercase: "Password must contain an uppercase letter",
  passwordMustContainLowercase: "Password must contain a lowercase letter",
  passwordMustContainDigit: "Password must contain a digit",
  passwordMustContainSpecialChar: "Password must contain a special character",
  togglePasswordVisibility: "Toggle Password Visibility",
};

export const enAggregateData = {
  countPhotoStudio: "Photo studios",
  countPhoto: "Available photos",
  countPhotoSession: "Active sessions",
  countEvent: "Active events",
  altPhotoStudio:"Camera",
  altEvent:"EventSrc",
  altSession:"SessionSrc",
  altFolder:"FolderSrc"
};

export const enAdminPage = {
  heading: "Dashboard",
  footer:"All rights reserved."
};

export const enCompanyPage = {
  body1: "Photo Studio",
};

export const enUserPanel = {
  heading: "Users",
  searchPlaceHolder: "Find user",
  addUserButton: "Add",
  noSearchContent: "No search results",
  resetPasswordButton: "Reset password",
  editUserButton: "Edit",
  previousPage: "Previous",
  nextPage: "Next",
  deleteTitle: "Are you sure you want to delete the user account?",
  deleteMessage:
    "If you delete the user account, you won't be able to restore it.",
  deleteConfirm: "Delete account",
  deleteCancel: "Cancel",
};

export const enCompanyPanel = {
  heading: "Photo studios",
  searchPlaceHolder: "Find a photography shop",
  noSearchContent: "No search results",
  addCompanyButton: "Add",
  infoButton: "Info",
  editCompanyButton: "Edit",
  deleteTitle: "Are you sure you want to delete the photo studio account?",
  deleteMessage: "If you delete the photo studio account, you won't be able to restore it.",
  deleteConfirm: "Delete account",
  deleteCancel: "Cancel",
};

export const enAddUser = {
  headingEdit:"Edit user",
  heading: "Add new user",
  name: "First Name *",
  namePlaceHolder: "Enter first name",
  lastName: "Last Name *",
  lastNamePlaceHolder: "Enter last name",
  email: "Email *",
  emailPlaceHolder: "Enter email",
  role: "Role *",
  rolePlaceHolder: "Select a role for the user",
  rolesOptions: {
    superadmin:"Super Admin",
    customer: "Customer"
  },
  cancelButton: "Cancel",
  submitButton: "Save",
  firstNameRequired: "First name is required",
  invalidFirstName: "Invalid first name",
  lastNameRequired: "Last name is required",
  invalidLastName: "Invalid last name",
  emailRequired: "Email is required",
  invalidEmail: "Invalid email",
  roleRequired: "Role is required",
};

export const enAddCompany = {
  title:"Photo studio information",
  heading:"Add new company",
  shop:"Store name *",
  enterShopName:"Please enter a shop name",
  phoneNumber:"Phone number *",
  enterPhoneNumber:"Please enter a phone number",
  address:"Address *",
  enterAddress:"Please enter your address",
  logo:"Logo *",
  uploadOr:"Drop or ",
  uploadImage:"upload image",
  cancelButton: "Cancel",
  submitButton: "Save",
  shopNameRequired :"Store name is required",
  phoneNumberRequired: "Phone number is required",
  addressRequired: "Address is required",
  invalidShopName:"Invalid name",
  invalidPhone:"Invalid phone",
  invalidAddress:"Invalid address",
  modifyButton:"Modify"
}

export const enResetPassword = {
  newPassword: "New Password *",
  passwordRequired: "Password is required",
  passwordTooShort: "Password is too short",
  passwordMustContainUppercase: "Password must contain an uppercase letter",
  passwordMustContainLowercase: "Password must contain a lowercase letter",
  passwordMustContainDigit: "Password must contain a digit",
  passwordMustContainSpecialChar: "Password must contain a special character",
  resetButton: "Reset",
};

export const enResetPasswordEmail = {
  emailLabel: "Email *",
  emailPlaceholder: "Enter your email",
  resetButton: "Reset",
  emailRequired: "Email is required",
  invalidEmail: "Invalid email",
};
export const enLogout = {
  logoutLabel:"Log out"
}
export const enToast = {
  loginSuccess:"Login Successful",
  loginError: 'Login Unsuccessful',
  companyAddSuccess: "Company Added Successfully",
  companyEditSuccess: "Company Updated Successfully",
  logoutSuccess: "Logout Successfull",
  userAddSuccess: "User Added Successfully",
  userEditSuccess: "User Updated Successfully",
  offlineServer: "Server is offline",
  serverError: "Something went wrong"
}
export default {
  login: enLogin,
  adminPage: enAdminPage,
  companyPage: enCompanyPage,
  userContent: enUserPanel,
  companyContent: enCompanyPanel,
  addUserModal: enAddUser,
  resetPassword: enResetPassword,
  resetPasswordEmail: enResetPasswordEmail,
  addCompanyModal : enAddCompany,
  logout:enLogout,
  aggregateData:enAggregateData,
  toast:enToast
};

