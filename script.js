
//Mudar miniatura e informações de preço e qtd

function MudarImg(imgMiniaturaEscolhida)
{
    document.getElementById('imgPrincipal').src = imgMiniaturaEscolhida.src;
    MudarInfo(imgMiniaturaEscolhida.id)

}

//Muda tamanho das roupas

function MudarTamanho(botaoEscolhido) 
{  
    if(botaoEscolhido.id == 'btnTamanhoP')
    {
        document.getElementById('tamanhoSelecionado').innerHTML = 'Tamanho Selecionado: P';
    }
    else if(botaoEscolhido.id == 'btnTamanhoM')
    {
        document.getElementById('tamanhoSelecionado').innerHTML = 'Tamanho Selecionado: M';
    }
    else if(botaoEscolhido.id == 'btnTamanhoG')
    {
        document.getElementById('tamanhoSelecionado').innerHTML = 'Tamanho Selecionado: G';
    }
    else if(botaoEscolhido.id == 'btnTamanhoGG')
    {
        document.getElementById('tamanhoSelecionado').innerHTML = 'Tamanho Selecionado: GG';
    }
  
}

//Mudar preço e qtd pela cor da roupa

function MudarInfo(botaoEscolhido) 
{  
    if(botaoEscolhido == 'Preto')
    {
        document.getElementById('precoProduto').innerHTML = 'R$56,90';
        document.getElementById('qtdDisponivel').innerHTML = '171 peças dísponíveis';
        document.getElementById("imgPrincipal").src = 'img/produto1.png';   
    }
    else if(botaoEscolhido == 'Azul')
    {
        document.getElementById('precoProduto').innerHTML = 'R$45,90';
        document.getElementById('qtdDisponivel').innerHTML = '157 peças dísponíveis';
        document.getElementById("imgPrincipal").src = 'img/produto2.png';   
        
    }
    else if(botaoEscolhido == 'Verde')
    {
        document.getElementById('precoProduto').innerHTML = 'R$70,00';
        document.getElementById('qtdDisponivel').innerHTML = '189 peças dísponíveis';
        document.getElementById("imgPrincipal").src = 'img/produto3.png';   
    }
    else if(botaoEscolhido == 'Cinza')
    {
        document.getElementById('precoProduto').innerHTML = 'R$59,90';
        document.getElementById('qtdDisponivel').innerHTML = '100 peças dísponíveis';
        document.getElementById("imgPrincipal").src = 'img/produto4.png';   
    }
    else if(botaoEscolhido == 'Rosa')
    {
        document.getElementById('precoProduto').innerHTML = 'R$65,90';
        document.getElementById('qtdDisponivel').innerHTML = '120 peças dísponíveis';
        document.getElementById("imgPrincipal").src = 'img/produto5.png';   
    }
}







