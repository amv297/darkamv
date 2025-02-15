document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscriptionForm');
    const registerButton = document.getElementById('registerButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Logique de connexion
        console.log('Se connecter avec:', username, password);
        
    });
});

//inscription form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscriptionForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Logique d'inscription
            console.log('S\'inscrire avec:', email, username, password);
           
        });
    }
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".offre img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

images.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

//service worker
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.offre img');

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const model = this.getAttribute('data-model');
            const price = this.getAttribute('data-price');
            const minOrder = this.getAttribute('data-min-order');

            const newWindow = window.open('', '_blank', 'width=600,height=400');
            newWindow.document.write(`
                <html>
                <head>
                    <title>${title}</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; }
                        img { max-width: 100%; height: auto; }
                    </style>
                </head>
                <body>
                    <h1>${title}</h1>
                    <img src="${this.src}" alt="${this.alt}">
                    <p>Model : ${model}</p>
                    <p>Prix : ${price}</p>
                    <p>Commande mini : ${minOrder}</p>
                </body>
                </html>
            `);
        });
    });
});



