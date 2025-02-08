emailjs.init("j-3NRaQF0yjNoCcsk");

document.getElementById("contactus").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_57aj46r", "template_4d9y3kh", this).then(
        function () {
            alert("Message sent successfully!");
            document.getElementById("contactus").reset();
        },
        function (error) {
            alert("Failed to send message. Error: " + JSON.stringify(error));
        }
    );
});