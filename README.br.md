<img height="15px" src="https://em-content.zobj.net/thumbs/120/twitter/322/flag-united-states_1f1fa-1f1f8.png">[ Read this document in english](README.md)

# <b>Calculadora Digital</b>

Quinto projeto do curso <a href="https://www.theodinproject.com/about">The Odin Project</a>.

Uma calculadora digital construída com JavaScript e manipulação de DOM.

<a href="https://araujodanield.github.io/odin-calculator/" target="_blank">Você pode dar uma olhada na página e testar a calculadora clicando aqui!</a>

</br>

## <b>Funcionalidades</b>

Esta calculadora foi construída baseada na Calculadora do Windows 10, mas apenas com as funcionalidades básicas dela. Aqui está uma lista do que é possível fazer atualmente:

</br>

- <b>Operações Básicas</b>: Você pode realizar as quatro operações matemáticas básicas: adição, subtração, multiplicação e divisão;

</br>

- <b>Operações Continuas</b>: Você pode continuar operações usando os botões de operadores. Por exemplo:

        - "5 + 2"
        - Se ao invés de "=" você pressionar "x" a operação irá virar "7 x" e aguardar por um novo número;
        - Se você pressionar "2" e "+" a operação irá virar "14 +", e assim por diante.


</br>

- <b>Números Decimais</b>: É possível realizar operações com ou que resultam em números decimais;
    * <i>(Perceba que operações que resultam em números decimais grandes como "3,59999" serão automaticamente arredondadas, então neste exemplo o resultado será "3,6")</i>

</br>

- <b>Números Negativos</b>: Você tem um botão que adiciona ou remove o sinal de negativo de um número e que também funciona com números decimais;

</br>

- <b>Botão de Deletar</b>: Este botão te permite deletar o último número pressionado, mas quando você tem o resultado de uma operação na tela este botão deleta apenas a operação, te permitindo usar o resultado como operando para uma nova operação;

</br>

- <b>Botão de Limpar</b>: Apaga tudo que foi feito e reseta os valores da calculadora;

</br>

## <b>Notas:</b>

#### - Lugares diferentes ao redor do mundo possuem diferentes formas de representar milhares e decimais em números. Para este projeto eu optei por usar o método brasileiro de formatação, então o separador de milhares é um ponto ("."), enquanto o separador de decimais é uma vírgula (","). Exemplo:
    "Cinco Milhões Duzentos Mil e Seiscentos vírgula Trinta e Cinco"

        USA: 5,200,600.35
        BRA: 5.200.600,35

#### - Desde o início deste projeto meu objetivo era fazê-lo o mais similar possível à calculadora do Windows, então uma das funcionalidades que eu estava tentando adicionar era aquela em que se você pressiona o botão de igual (=) de novo após uma operação a calculadora repete essa operação mas com o resultado como primeiro operando. </br> Por exemplo, "5 + 2" resulta em "7", se você pressionar o botão de igual então a operação vira "7 + 2" e resulta em "9". </br> Infelizmente não consegui encontrar uma maneira de implementar isto sem quebrar alguma outra funcionalidade da calculadora ou precisar refatorar todo o código do zero. E considerando o tempo que já coloquei neste projeto tentando resolver isso, eu decidi deixar esta funcionalidade de lado por enquanto.
