function sendMail(contactForm) {
    emailjs.send("service_eq7poza", "Joyce Cheung", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    
        
}