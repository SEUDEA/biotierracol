document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("KWNm8EgxHryGvytYY");
});

document.getElementById("subscription-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.getElementById("email").value;

  if (!emailInput) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  emailjs.send("service_qjpscar", "template_f2fsqcz", {
    email: emailInput,
  })
  .then(function (response) {
    alert("¡Gracias por suscribirte! Hemos recibido tu información.");
    document.getElementById("email").value = "";
  }, function (error) {
    alert("Ocurrió un error al enviar tu suscripción. Por favor, inténtalo de nuevo más tarde.");
  });
});
