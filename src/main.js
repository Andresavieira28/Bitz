import data from "./data/cpf/cpf.js";
import data from "./data/cnpj/cnpj.js";

const charactersPrint = document.getElementById('lista');
const fullcpf = data.cpf;
const fullcnpj = data.cnpj;

function filtrarCPF() {
    var cpfInput = document.getElementById('cpfInput').value;
    // Remove caracteres não numéricos do CPF
    var cpfFiltrado = cpfInput.replace(/\D/g, '');
    // Formata o CPF
    cpfFiltrado = cpfFiltrado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    document.getElementById('cpfFiltrado').textContent = cpfFiltrado;
}