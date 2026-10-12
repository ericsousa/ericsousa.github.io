# Eric Miranda Sousa — Portfólio v0.1

Página pessoal minimalista, em português, com os projetos Nortea e Campus Telemetry e links profissionais. HTML, CSS e JavaScript puro, sem build, frameworks, fontes remotas ou dependências obrigatórias.

Endereço previsto após a publicação: **https://ericsousa.github.io/**.

## Prévia local

Abra `index.html` diretamente no navegador. Não há instalação necessária. Para servir por HTTP, se tiver Node.js, execute `node preview.cjs` e abra http://127.0.0.1:4173. Encerre com Ctrl+C. O servidor é opcional e não participa da página publicada.

## Personalização

- **Links dos projetos:** preencha `projects.nortea` e `projects.campusTelemetry` em `config.js` com URLs reais e completas (`https://...`). Um valor vazio ou inválido mantém o card sem link, com “Link em breve”. Não há links ou resultados inventados.
- **Foto:** `assets/profile.png` é uma cópia local da foto pública do GitHub de Eric, baixada com sua autorização. Substitua o arquivo para trocar a imagem. Se mudar o nome ou formato, ajuste `src` e `og:image` em `index.html`. Prefira uma imagem quadrada e pequena.
- **Apresentação, descrições e redes sociais:** edite `index.html`.
- **Cores e layout:** edite `styles.css`.
- **SEO:** título, descrição, canonical e Open Graph estão em `index.html`. Ao mudar o domínio, atualize também `robots.txt` e `sitemap.xml`.

Sem JavaScript, a apresentação, as descrições e os links sociais continuam disponíveis. Os links configuráveis dos projetos precisam de JavaScript. Para links de projetos que funcionem sem JavaScript, substitua os respectivos `<article>` por `<a href="URL_REAL">` no HTML, mantendo a classe e o conteúdo e atualizando o texto da ação.

## Publicação no GitHub Pages

**Esta entrega não publica o site. Faça os passos abaixo somente após aprovar a versão.** O envio à branch já selecionada pelo Pages pode iniciar uma publicação automaticamente.

1. Confirme que o repositório da conta `ericsousa` se chama exatamente `ericsousa.github.io`.
2. Revise a foto, os textos e os links na prévia. Os projetos podem permanecer sem link até seus endereços estarem disponíveis.
3. Faça commit e push dos arquivos para a branch `main`, preservando `index.html` na raiz.
4. No GitHub, abra **Settings → Pages**. Em **Build and deployment**, selecione **Deploy from a branch**, branch **main** e pasta **/ (root)**. Salve. Não é necessário criar um workflow ou configurar um domínio personalizado.
5. Aguarde o deploy e confira a execução em **Actions** e o endereço **https://ericsousa.github.io/**.

O arquivo `.nojekyll` permite servir os arquivos estáticos diretamente. Atualizações futuras são feitas editando os arquivos e enviando novos commits à branch configurada.

Referência: [documentação oficial sobre a origem de publicação do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Estrutura

```text
index.html          Conteúdo, estrutura semântica e metadados
styles.css          Layout responsivo e estilos de foco
config.js           Endereços configuráveis dos projetos
script.js           Ativação dos links válidos
assets/profile.png  Foto local de perfil
assets/favicon.svg  Ícone do site
robots.txt          Orientações para indexação
sitemap.xml         URL canônica
.nojekyll           Arquivos estáticos no GitHub Pages
preview.cjs         Servidor local opcional, sem dependências
```

## Decisões da versão 0.1

HTML semântico, link para pular ao conteúdo, navegação por teclado, foco visível, imagens decorativas ocultas de leitores de tela e foto com texto alternativo. Layout adaptável a celulares, fonte do sistema e foto com dimensões explícitas. Sem rastreamento, bibliotecas, animações de movimento ou requisições a terceiros durante a visita.
