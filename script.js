const imagemCopo = document.querySelector('.imagem-copo');
const textoDinamico = document.querySelector('.texto-dinamico');
const circulo = document.querySelector('.circulo');
const latasMenu = document.querySelectorAll('.botao-menu');
const latas = [
    {
        imagem: 'Latas/Coca Cola.png',
        texto: '',
        cor: 'hwb(7 4% 13%)'
    },
    {
        imagem: 'Latas/Coca Cola zero.png',
        texto: 'Também em Zero',
        cor: 'black'
    }
];

let estado = 0;

function atualizarLata(index) {
    estado = index;
    imagemCopo.src = latas[index].imagem;
    textoDinamico.textContent = latas[index].texto;
    circulo.style.backgroundColor = latas[index].cor;
}

imagemCopo.addEventListener('click', () => {
    const proximo = (estado + 1) % latas.length;
    atualizarLata(proximo);
});

latasMenu.forEach((lata, index) => {
    lata.addEventListener('click', () => {
        atualizarLata(index);
    });
});
