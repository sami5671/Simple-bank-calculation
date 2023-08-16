// step: 1-- add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step; 2-- GET THE EMAIL ADDRESS INSIDE THE EMAIL INPUT FIELD
  //   always remember to use .value to get text from an input field

  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // step: 3 get password
  // 3.a: set id on the html element
  // 3.b: get the element
  // 3.c: get the value from the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //   Danger: do not varify eamil password on the client side
  // step: 4: varify eamil and password and check weather valid user or not
  if (email === "samialam@gmail.com" && password === "sami123") {
    window.location.href = "bank.html";
  } else {
    alert("!!!!*****invalid user!!!!!*******");
  }
});
