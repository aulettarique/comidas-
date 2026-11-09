const produtos = [
    {
        nome: "Hambúrguer",
        categoria: "Lanches",
        quantidade: 20,
        preco: 25.90
    },
    {
        nome: "Pizza",
        categoria: "Massas",
        quantidade: 15,
        preco: 45.00
    },
    {
        nome: "Batata Frita",
        categoria: "Porções",
        quantidade: 30,
        preco: 18.90
    },
    {
        nome: "Coxinha",
        categoria: "Salgados",
        quantidade: 40,
        preco: 7.50
    },
    {
        nome: "Pastel",
        categoria: "Salgados",
        quantidade: 25,
        preco: 10.00
    },
    {
        nome: "Refrigerante",
        categoria: "Bebidas",
        quantidade: 50,
        preco: 6.00
    },
    {
        nome: "Suco Natural",
        categoria: "Bebidas",
        quantidade: 20,
        preco: 8.90
    },
    {
        nome: "Bolo de Chocolate",
        categoria: "Sobremesas",
        quantidade: 12,
        preco: 12.90
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let produto of produtos) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })}</td>
    `;

    corpoTabela.appendChild(linha);
}