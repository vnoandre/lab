document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var successMessage = document.getElementById("successMessage");

    // Aqui você pode adicionar a lógica para enviar os dados do formulário

    successMessage.innerText = "Contato recebido com sucesso!";
    setTimeout(function() {
        successMessage.innerText = "";
    }, 3000);
});

// Script para rolar para a seção de serviços quando clicar no link "Serviços"
document.querySelector('a[href="#servicos"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#servicos').scrollIntoView({
        behavior: 'smooth'
    });
});

//evento de clique ao ícone do menu para alternar a exibição do menu quando ele for clicado
document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

