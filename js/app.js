let quantidadeJogosAlugados = 1;

function alterarStatus(item){
    let items = [];
    let alugar = document.querySelector(`#game-${item} .dashboard__item__button`);
    let img = document.querySelector(`#game-${item} .dashboard__item__img`);
    let nome = document.querySelector(`#game-${item} .dashboard__item__name`);

    if (alugar.classList.contains('dashboard__item__button--return')){
        alugar.classList.remove('dashboard__item__button--return');
        img.classList.remove('dashboard__item__img--rented');
        alugar.innerHTML = 'Alugar';
        alert('O livro ' + nome.innerHTML + ' foi devolvido!');
    } else {
        alugar.classList.add('dashboard__item__button--return');
        img.classList.add('dashboard__item__img--rented');
        alugar.innerHTML = 'Devolver';
        quantidadeJogosAlugados++;
    }
    
    items.push(item);
    console.log(items)
    let palavraAlugados = quantidadeJogosAlugados > 1 ? ' livros alugados' : ' livro alugado';
    console.log(quantidadeJogosAlugados + palavraAlugados + '!');
}