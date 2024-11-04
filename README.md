
# Travel Diary

O Travel Diary é um aplicativo de diário de viagens desenvolvido com React Native e integrado ao Firebase. Ele permite que os usuários criem entradas para documentar suas experiências de viagem, incluindo título, descrição, localização, data e imagem. O aplicativo utiliza autenticação de e-mail e senha com Firebase, e todas as entradas são armazenadas no Firestore, enquanto as imagens são armazenadas no Firebase Storage.


## Funcionalidades

- Autenticação de Usuários: Login e registro de usuários com e-mail e senha.
- Criar Entradas de Viagem: Criação de entradas de diário com título, descrição, localização, data e imagem.
- Visualizar Entradas: Listagem de todas as entradas de viagem criadas.
- Upload de Imagens: Upload de imagens das viagens para o Firebase Storage.
- Armazenamento no Firebase Firestore: Armazenamento de todas as informações das entradas de diário no Firestore.

## Estrutura do Projeto

```bash

TravelDiary/
├── assets/                         # Arquivos de mídia (imagens, logo, etc.)
├── screens/                        # Telas do aplicativo
│   ├── LoginScreen.js              # Tela de login
│   ├── RegisterScreen.js           # Tela de registro
│   ├── HomeScreen.js               # Tela inicial (home)
│   ├── CreateEntryScreen.js        # Tela de criação de entradas
│   ├── EditEntryScreen.js          # Tela de edição de entradas
│   └── ViewEntryScreen.js          # Tela de visualização das entradas
├── firebaseConfig.js               # Configuração do Firebase
└── App.js  

```
## Pré-requisitos

- Node.js (>= 12.0)
- Expo CLI (para desenvolvimento e testes com Expo Go)
- Conta no Firebase com projeto configurado para Firestore, Authentication e Storage

## Telas do aplicativo

### **Telas do Aplicativo**

- **LoginScreen**

Tela de autenticação onde os usuários podem inserir seu e-mail e senha para fazer login ou navegar para a tela de cadastro.

- **RegisterScreen**

Tela para criar uma nova conta de usuário usando o e-mail e a senha.

- **HomeScreen**

Tela inicial de boas-vindas, onde o usuário pode navegar para a criação de uma nova entrada ou visualização das entradas existentes.

- **CreateEntryScreen**

Tela para criar uma nova entrada de diário de viagem. O usuário pode preencher o título, descrição, localização, data e adicionar uma imagem para documentar sua viagem.

- **EditEntryScreen**

Tela para editar uma entrada de diário existente. O usuário pode atualizar os detalhes da entrada, como título, descrição, localização, data e imagem.

- **ViewEntryScreen**

Tela que exibe todas as entradas de viagem do usuário em uma lista, incluindo detalhes como título, descrição, localização, data e imagem.

## Principais Componentes e Funcionalidades

### Autenticação

- Login de Usuário com signInWithEmailAndPassword (Firebase Auth).
- Registro de Usuário com createUserWithEmailAndPassword.

### Criação de Entradas

- Formulário de Entrada: Coleta título, descrição, localização e data da viagem.
- Upload de Imagem: Usa o expo-image-picker para selecionar uma imagem e armazena no Firebase Storage.
- Armazenamento no Firestore: Armazena as informações da entrada (com URL da imagem, se fornecida) em uma coleção chamada entries.

### Visualização das Entradas

- Listagem de Entradas: Usa FlatList para exibir as entradas de viagem.
- Imagem das Entradas: Exibe a imagem da entrada caso esteja disponível.

## Estilo

As telas foram estilizadas para uma experiência amigável e responsiva, com uso de StyleSheet do React Native. As cores principais do aplicativo são tons de azul (#1E90FF) e cinza, proporcionando um design limpo e atrativo.

## Executando o projeto

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/Travel_diary.git
```

2. Instale as dependências:

```bash
cd TravelDiary
npm install
```

3. Execute o Projeto:

```bash
npm run web
```
4. Quando a tela de LOgin abrir, faça seu cadastro:

```bash
exemplo: seunome@email.com e senha com 6 dígitos
```

## Dependências Principais

- React Native: Framework para desenvolvimento mobile.
- Firebase: Usado para autenticação, Firestore e armazenamento de imagens.
- Expo: Facilitador para desenvolvimento com React Native.
- Expo Image Picker: Biblioteca para selecionar imagens da galeria.


## Autores

- [@Carla-coder](https://www.github.com/Carla-coder)

## Instituição de Ensino

- Escola Senai unidade Jaguariúna - Curso Técnico em Desenvolvimento de Sistemas FullStack - Terceiro Semestre (2024).

- Prova Somativa 1 - Professor responsável Robson B. Souza https://github.com/robsonbsouzaa 

