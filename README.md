# bellissare-agendamentos

**bellissare-agendamentos** é um aplicativo de agendamento desenvolvido para otimizar o fluxo de atendimento na clínica **Bellissare**, especializada em estética e bem-estar. O aplicativo facilita o gerenciamento de horários, reduz cancelamentos e melhora a experiência dos clientes com uma interface intuitiva e prática.

## 📌 Visão Geral do Projeto

Este projeto foi criado como parte de um trabalho acadêmico e utiliza o framework **React Native** para oferecer uma solução multiplataforma. O objetivo do **bellissare-agendamentos** é permitir que os clientes da clínica Bellissare realizem e acompanhem agendamentos com praticidade, enquanto os profissionais da clínica conseguem gerenciar suas agendas de forma organizada e eficiente.

## 🚀 Funcionalidades Principais

- **📅 Agendamento de Consultas**: Clientes podem agendar e visualizar suas consultas de maneira autônoma.
- **🔔 Lembretes Automáticos**: Notificações são enviadas para lembrar os clientes sobre os horários marcados.

## 📁 Estrutura de Pastas

```plaintext
.babelrc
.gitignore
app.json
App.js
package.json
yarn.lock
src/
├── assets/               # Imagens, fontes, ícones personalizados
│   ├── images/
│   └── fonts/
├── components/           # Componentes reutilizáveis
│   ├── Button.js
│   ├── Input.js
│   ├── Card.js
│   └── styles/           # Estilos isolados para componentes (opcional)
│       ├── ButtonStyles.js
│       └── InputStyles.js
├── main/                 # Arquivo principal de inicialização
│   └── Main.js           
├── mocks/                # Dados fictícios para testes
│   └── servicesMock.js   
├── navigation/           # Configuração de navegação
│   ├── AppNavigator.js
│   ├── TabNavigator.js
│   └── StackNavigator.js
├── screens/              # Telas principais do app
│   ├── HomeScreen/
│   │   ├── HomeScreen.js
│   │   └── styles.js
│   ├── LoginScreen/
│   │   ├── LoginScreen.js
│   │   └── styles.js
│   ├── ProfileScreen/
│   │   ├── ProfileScreen.js
│   │   └── styles.js
├── styles/               # Estilos globais e temas
│   ├── GlobalStyles.js
│   ├── colors.js
│   └── theme.js
└── utils/                # Funções utilitárias e helpers
    ├── api.js
    ├── constants.js
    └── formatDate.js
```
## 🛠️ Ferramentas e Tecnologias

- **React Native**: Framework de desenvolvimento mobile multiplataforma.
- **Expo**: Ferramenta para desenvolvimento rápido em React Native.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript. //não foi implementado ainda
- **Styled Components**: Biblioteca para estilização de componentes com CSS-in-JS.
- **React Navigation**: Navegação entre telas. //não foi implementado ainda
- **Git e GitHub**: Controle de versão e repositório.

## 🖥️ Configuração do Projeto

Para configurar o ambiente e rodar o projeto, siga os passos abaixo:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/TarsisDev/bellissare-agendamentos.git

2. **Navegue até o diretório do projeto**:
   ```bash
   cd bellissare-agendamentos
   
3. **Instale as dependências**:
   ```bash
   yarn install
  
4. **Inicie o aplicativo**:
   ```bash
   yarn start
     
5. **Inicie o aplicativo**

## 🧩 Como Contribuir
1. **Fork o repositório**:

2. **Crie uma nova branch**:
   ```bash
   git checkout -b minha-feature
   
3. **Faça suas alterações e commit**:
   ```bash
   git commit -m "Adiciona nova funcionalidade X"
  
4. **Envie suas alteraçõe**:
    ```bash
    git push origin minha-feature

5. **Abra um Pull Request no GitHub.**

## 👥 Desenvolvido por:

- **Laion de Araújo Hora**
- **Rodrigo Silva Wynne**
- **Társis Nascimento Santos**

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais detalhes.
