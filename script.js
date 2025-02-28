const users = {
	"edgard.freitas": "pirelli",
	"alex.cancian": "pirelli123",
	"carlos.buzatto": "pirelli123",
	"mayara.ferreira": "pirelli123",
	"giovanna.meyer": "pirelli123",
	"damares": "pirelli123",
	"rodrigo.silveira": "pirelli123",
    "guilhermesilva.santos@campneus.com.br": "TTPfbz861",
    "rosane.monteiro@campneus.com.br": "PLZhss605",
    "fernanda.teruel@campneus.com.br": "LWUmkl789",
    "bismark.bispo@campneus.com.br": "NCPenn696",
    "adilson.silva@campneus.com.br": "SWUliz821",
    "nilton.santos@campneus.com.br": "UMIkny104",
    "valdir.souza@campneus.com.br": "BJTtut519",
    "ruggero.prata@campneus.com.br": "SLWhzf100",
    "kelson.novaes@campneus.com.br": "RZTpud927",
    "andre.tome@campneus.com.br": "UWQmiw858",
    "elton.milczuk@campneus.com.br": "GYFgrz173",
    "adriano.santana@campneus.com.br": "WOFgbh567"
};

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    
    if (users[username] === password) {
        document.getElementById("loginContainer").classList.add("hidden");
        document.getElementById("welcomeContainer").style.display = "flex";
        document.getElementById("logoutButton").classList.remove("hidden");

        const iframe = document.getElementById("dashboardFrame");
        iframe.src = "https://v2-embednotion.com/1a860e206c8b80f6824ce1e1aceaa610";
        iframe.style.display = "block";
    } else {
        document.getElementById("error").textContent = "Usuário ou senha incorretos";
    }
}

function logout() {
    document.getElementById("loginContainer").classList.remove("hidden");
    document.getElementById("welcomeContainer").style.display = "none";
    document.getElementById("logoutButton").classList.add("hidden");

    const iframe = document.getElementById("dashboardFrame");
    iframe.src = "";
    iframe.style.display = "none";
}

// Adiciona evento de clique no botão "Entrar"
document.getElementById("loginButton").addEventListener("click", login);

// Adiciona evento para capturar "Enter" no campo de senha
document.getElementById("password").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        login();
    }
});
