## CHATBOT

### Ollama

Para começar, é necessário instalar o [Ollama](https://ollama.com/) em seu computador. O Ollama é um modelo de linguagem de grande porte (LLM) que roda localmente, permitindo que você tenha controle total sobre seus dados e privacidade.

Após a instalação, abra o terminal e verifique se o Ollama foi instalado corretamente com o seguinte comando:
```bash
ollama -v
```

Agora, você precisa baixar um modelo. Para esta aplicação, utilizaremos o modelo `gemma2`. Execute o seguinte comando para fazer o download:
```bash
ollama pull gemma2
```

##

### Rodando o projeto Next.js

Clone este repositório:
```bash
git clone https://github.com/JeanNesi/Chatbot-AI.git
```

Acesse a pasta:
```bash
cd Chatbot-AI
```

Instale os pacotes:
```bash
npm install
```

Rode o projeto:
```bash
npm run dev
```

Abra http://localhost:3000 em seu navegador para ver o resultado.
