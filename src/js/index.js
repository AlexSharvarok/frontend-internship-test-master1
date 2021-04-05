/* Here goes your JS code */
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
class Store {
  constructor() {
    this.email = "";
    this.password = "";
    this.agreeTerms = false;
    this.isDisabled = true;
  }
  clearStore() {
    document.getElementById("email-input").value = "";
    document.getElementById("password-input").value = "";
    document.getElementById("submit-button").style.backgroundColor = "black";
    document.getElementById("check").style.display = "none";
    this.isDisabled = true;
    this.agreeTerms = false;
  }
  setEmail(email) {
    this.email = email;
    this.checkDisable();
  }
  setAgreeTerms(agreeTerms) {
    this.agreeTerms = agreeTerms;
    this.checkDisable();
  }
  setPassword(password) {
    this.password = password;
    this.checkDisable();
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }
  getAgreeTerms() {
    return this.agreeTerms;
  }
  checkDisable() {
    var element = document.getElementById("submit-button");
    if (
      validateEmail(this.email) &&
      this.password.length > 1 &&
      this.agreeTerms
    ) {
      this.isDisabled = false;
      element.style.backgroundColor = "#fc888e";
    } else {
      this.isDisabled = true;
      element.style.backgroundColor = "black";
    }
  }
}

var store = new Store();

function onShowFormClick() {
  document.getElementById("show-popup-form").style.display = "none";
  document.getElementById("popup-form").style.display = "block";
}
function onSubmitClick() {
  if (store.isDisabled) {
    alert("Please enter correct email, password and agree terms");
  } else {
    document.getElementById("popup-form").style.display = "none";
    document.getElementById("success-message").style.display = "block";
    store.clearStore();
  }
}
function onCloseClick() {
  document.getElementById("popup-form").style.display = "none";
  document.getElementById("success-message").style.display = "none";
  document.getElementById("show-popup-form").style.display = "block";
  store.clearStore();
}
function onCheckBoxClick() {
  if (store.agreeTerms) {
    document.getElementById("check").style.display = "none";
    store.setAgreeTerms(false);
  } else {
    document.getElementById("check").style.display = "block";
    store.setAgreeTerms(true);
  }
}

document.getElementById("email-input").addEventListener(
  "input",
  function(event) {
    store.setEmail(event.target.value);
  },
  false
);
document.getElementById("password-input").addEventListener(
  "input",
  function(event) {
    store.setPassword(event.target.value);
  },
  false
);
