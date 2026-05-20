function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,

    };

    const serviceID = "service_lh64qem";
    const templateID = "template_20pdy9m";

    emailjs.send(serviceID, templateID, params)

    .then(function(res) {

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        console.log(res);
        alert("Yr msg snd succesfully!!");

    })

    .catch(function(err) {
        console.log(err);
        alert("Faild to snd msg!!!");

    });

}