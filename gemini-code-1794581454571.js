document.addEventListener('DOMContentLoaded', function () {
    // 1. Fechar o menu mobile automaticamente após clicar em um link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });

    // 2. Máscara simples para o campo de telefone
    const inputTelefone = document.getElementById('telefone');
    inputTelefone.addEventListener('input', function (e) {
        let valor = e.target.value.replace(/\D/g, '');
        if (valor.length > 11) valor = valor.slice(0, 11);

        if (valor.length > 6) {
            e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
        } else if (valor.length > 2) {
            e.target.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        } else if (valor.length > 0) {
            e.target.value = `(${valor}`;
        }
    });

    // 3. Simulação de envio do formulário de contato
    const formContato = document.getElementById('formContato');
    const alertaSucesso = document.getElementById('alertaSucesso');

    formContato.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o recarregamento da página

        // Exibe a mensagem de sucesso
        alertaSucesso.classList.remove('d-none');

        // Limpa os campos do formulário
        formContato.reset();

        // Esconde o alerta após 5 segundos
        setTimeout(() => {
            alertaSucesso.classList.add('d-none');
        }, 5000);
    });
});