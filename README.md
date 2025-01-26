# eChá - Projeto Interdisciplinar
IFBA - Instituto Federal de Educação, Ciência e Tecnologia da Bahia Campus Eunápolis

## Resumo
O objetivo deste projeto é apresentar a interface desenvolvida para o eChá, um plataforma projetada para simplificar o processo de presentear amigos e familiares que estão se mudando para uma nova casa. O eChá permite aos usuários criar listas de presentes em um modelo similar a um chá de casa nova eletrônico, com opção de conversão em dinheiro para os presentes. A realização da celebração de forma eletrônica visa facilitar o compartilhamento e envio dos presentes escolhidos, tornando a experiência de presentear mais conveniente. Com uma interface intuitiva e recursos modernos, o eChá deverá promover uma maneira eficiente e personalizada de gerenciamento de listas de presentes para casa nova.

![Apresentação](assets/image/readme/presentation.png)

## Pré-requisitos
Verifique se você possui os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (Recomendada a versão v20.11.1 ou superior)
- [Angular CLI](https://angular.io/cli) (se ainda não tiver, você pode instalá-lo globalmente com o comando `npm install -g @angular/cli`)

O projeto foi desenvolvido na versão do Angular 18.1.4

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/YagoSouzaSantos/eCha-ui.git
   ```
   ```bash
   cd eCha-ui
   ```

2. **Instale o Angular CLI caso não tenha**:

   Execute o seguinte comando:

   ```bash
   npm install -g @angular/cli
   ```
   
2. **Instale as dependências**:

   Execute o seguinte comando para instalar todas as dependências necessárias do projeto:

   ```bash
   npm install
   ```

3. **Instale o Angular Material**:

   Para instalar o Angular Material, execute o comando:

   ```bash
   ng add @angular/material
   ```

   Caso o material altere o arquivo styles.scss descarte as alterações pois isso pode impedir a execução do projeto

## Executando o Projeto

Para iniciar o servidor de desenvolvimento e executar o projeto, use o comando:

```bash
ng server
```
ou caso queira iniciar o aplicativo automaticamente em seu navegador padrão:
```bash
ng s -o
```

O aplicativo estará disponível em [http://localhost:4200](http://localhost:4200).

## Tecnologias utilizadas
- Angular versão 18.1.4
- Angular Material
