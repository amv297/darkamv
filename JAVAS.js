
        document.getElementById('loginForm').addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Vérification de l'e-mail et du mot de passe (exemple simplifié)
            if (email === "votre@email.com" && password === "votreMotDePasse") {
                // Rediriger vers la page d'accueil
                window.location.href = "esp.html";
                console.log("votre code est bon");
            } else {
                alert("Identifiants incorrects. Veuillez réessayer.");
            }
        });

                // Lorsque le formulaire est soumis
                document.getElementById('loginForm').addEventListener('submit', function(event) {
                    event.preventDefault();
        
                    // Récupérer les valeurs des champs
                    var email = document.getElementById('email').value;
                    var password = document.getElementById('password').value;
        
                    // Enregistrer les identifiants dans le stockage local
                    localStorage.setItem('email', email);
                    localStorage.setItem('password', password);
        
                    // Rediriger vers la page d'accueil
                    window.location.href = 'esp.html';
                });
        
                // Lors du chargement de la page, vérifier si les identifiants sont enregistrés
                window.onload = function() {
                    var storedEmail = localStorage.getItem('email');
                    var storedPassword = localStorage.getItem('password');
        
                    // Si les identifiants sont enregistrés, remplir automatiquement les champs
                    if(storedEmail && storedPassword) {
                        window.location.href = "esp.html";
                        document.getElementById('email').value = storedEmail;
                        document.getElementById('password').value = storedPassword;
                    }
                };
                
          
