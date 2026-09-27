# 🚀 Império Digital - Landing Page de Captação para Grupo VIP

Landing Page moderna, ultra-responsiva e otimizada para alta conversão, desenvolvida com **Next.js 16**, **TypeScript**, **Tailwind CSS v4** e pronta para deploy com 1 clique na **Vercel**.

---

## 📋 Funcionalidades Principais

- ⚡ **Hero Section de Alto Impacto**: Headline persuasiva com gradientes, subheadline focada em conversão, stack de avatares com prova social imediata e mockup visual das mensagens do grupo.
- 🎯 **CTA "ENTRAR NO GRUPO"**: Botão magnético com efeito shimmer, microcópia de segurança, redirecionamento dinâmico com preservação de UTMs e disparo do evento `Lead` no Meta Pixel.
- 📊 **Métricas de Autoridade**: Números de faturamento gerado, membros conectados e taxa de satisfação.
- 💎 **Seção de Benefícios Exclusivos**: 6 cards interativos detalhando o que o membro recebe de imediato (networking, estratégias, automações de IA, materiais gratuitos, etc.).
- 🛡️ **Qualificação de Público**: Bloco comparativo *"Para quem é"* vs *"Para quem NÃO é"* para blindar o ambiente contra spam.
- ⭐ **Prova Social & Depoimentos**: Relatos reais com fotos, cargos, estrelas de avaliação e conquistas financeiras.
- ❓ **FAQ Interativo**: Acordeão com as dúvidas mais comuns para quebrar objeções.
- 📱 **CTA Flutuante (Mobile)**: Barra de conversão que surge na rolagem para maximizar a taxa de entrada.
- 🔍 **Painel de Diagnóstico no Rodapé**: Visualizador em tempo real para testar parâmetros UTM e checar o status do Meta Pixel.

---

## 🛠️ Configuração de Variáveis de Ambiente

Crie ou edite o arquivo `.env.local` na raiz do projeto (use `.env.example` como modelo):

```env
# ID numérico do seu Meta Pixel (Facebook Ads)
# Obtido em: Gerenciador de Eventos da Meta -> Configurações do Pixel -> Identificação do Pixel
NEXT_PUBLIC_META_PIXEL_ID=123456789012345

# Link oficial de convite do Grupo (WhatsApp, Telegram, Discord, etc.)
NEXT_PUBLIC_GROUP_INVITE_URL=https://chat.whatsapp.com/seu-link-real-do-grupo

# Nome exibido da marca / comunidade
NEXT_PUBLIC_SITE_NAME=Império Digital - Grupo VIP
```

> **Nota:** Não deixe o Pixel hardcoded. O código consome automaticamente a variável `NEXT_PUBLIC_META_PIXEL_ID`. Caso a variável não esteja definida, a aplicação funciona em modo de simulação registrando no console sem quebrar.

---

## 🎯 Meta Pixel & Rastreamento

| Evento | Momento do Disparo | Dados Enviados |
| :--- | :--- | :--- |
| **`PageView`** | Carregamento inicial da página | Padrão Meta |
| **`Lead`** | Clique em qualquer CTA "ENTRAR NO GRUPO" | `content_name`, `button_location`, parâmetros UTM e timestamp |

O script do Pixel é carregado de forma assíncrona com `next/script` e possui fallback `<noscript>` com pixel de imagem.

---

## 🌐 Suporte Completo a Parâmetros UTM

A página captura, armazena em `sessionStorage`/`localStorage` e anexa automaticamente todos os parâmetros de rastreamento ao link final do grupo:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `src` e `sck` (parâmetros adicionais padrão no mercado de afiliados e lançamentos)

### Exemplo de Teste com UTMs:
Acesse no navegador:
```
http://localhost:3000/?utm_source=facebook&utm_medium=cpc&utm_campaign=grupo_vip&utm_content=video_01&utm_term=marketing
```
Ao clicar em **"ENTRAR NO GRUPO"**, o usuário será direcionado para:
```
https://chat.whatsapp.com/seu-link-real-do-grupo?utm_source=facebook&utm_medium=cpc&utm_campaign=grupo_vip&utm_content=video_01&utm_term=marketing
```

---

## 🚀 Como Executar Localmente

1. **Instale as dependências** (caso ainda não tenha feito):
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

3. **Para gerar o build de produção**:
   ```bash
   npm run build
   npm run start
   ```

---

## ☁️ Deploy na Vercel

1. Envie o projeto para o seu repositório no **GitHub**, **GitLab** ou **Bitbucket**.
2. No painel da **Vercel**, clique em **Add New Project** e selecione o repositório.
3. Na seção **Environment Variables**, adicione as variáveis:
   - `NEXT_PUBLIC_META_PIXEL_ID` = `Seu ID do Pixel`
   - `NEXT_PUBLIC_GROUP_INVITE_URL` = `https://chat.whatsapp.com/seu-link-real`
   - `NEXT_PUBLIC_SITE_NAME` = `Império Digital - Grupo VIP`
4. Clique em **Deploy**. Sua Landing Page estará no ar em segundos com certificado SSL e CDN global automática!
