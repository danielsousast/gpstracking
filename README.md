# Gps Tracking 

Um aplicação fictícia que envia localização do usuário para um API. Caso o usuário não tenha acesso a internet os dados são salvos no banco local e sincronizados posteriormente.

## 🚀 Sobre o funcionamento básico

Para salvar os dados offline no app foi utilizado o banco de dados RealmDB. 

Ao enviar uma localização é feito o tratamento pra saber se o app vai ser enviado para a API ou só vai ser salvo no banco local.

Para lidar com a conexão com a internet foi utilizado a biblioteca NetInfo. 

Quando o usuário está desconectado os dados são salvos com uma propriedade synced como false. No caso contrário como true.

Ao identificar a conexão com a internet o app busca todos os dados salvos no banco filtrando pela propriedade synced. Com a lista de pacotes a serem sincronizados o app as envia para o servidor e atualiza o registro no banco local

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local:

### 📋 Pré-requisitos

Para executar o projeto você precisa ter um ambiente react native configurado. Siga as instruções do link abaixo:

https://react-native.rocketseat.dev/

### 🔧 Instalação

Depois de baixado o repositório e configurado o ambiente basta executar o seguinte comando no terminal (na pasta do projeto)

Instalar dependências:

```
yarn
```

Instalar Pods

```
npx pod-install ios
```

Depois basta executar o comando para rodar para a plataforma específica:

```
yarn ios
```
ou
```
yarn android
```
## ⚙️ Executando os testes

O projeto possui alguns poucos testes feitos. Para rodar bastar executar:

```
yarn test
```


## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [React Native](https://reactnative.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Zustand](https://github.com/pmndrs/zustand)
* [React Native Geolocation](https://github.com/michalchudziak/react-native-geolocation)
* [React Native NetInfo](https://github.com/react-native-netinfo/react-native-netinfo)



## 🎁 Algumas funcionalidades que poderiam entrar/próximos passos

* Sincronizar em background
* Lidar com todos os erros
* Melhorar Tipografia
* Adicionar mais testes unitários
* Adicionar testes de integração


---
⌨️ com ❤️ por [Daniel de Sousa](https://gist.github.com/lohhans) 😊