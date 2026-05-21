import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

export default function JournalPortfolio() {
  // Data atual formatada automaticamente no estilo de jornal clássico
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Lista de projetos (Mantidos como placeholders para você alterar quando quiser)
  const projetos = [
    {
      titulo: "MANCHETE DO PROJETO ALFA: INSIRA O TÍTULO AQUI",
      subtitulo: "Subtítulo impactante descrevendo a tecnologia principal utilizada.",
      descricao: "Aqui você vai escrever uma breve crônica sobre o seu primeiro grande projeto. Explique qual problema ele resolveu, como foi o processo de desenvolvimento e o impacto que essa solução trouxe.",
      tag: "Web / Desktop"
    },
    {
      titulo: "REVOLUÇÃO MOBILE: SEGUNDO PROJETO EM DESTAQUE",
      subtitulo: "Uma frase curta explicando o objetivo do aplicativo ou sistema.",
      descricao: "Espaço reservado para o seu segundo projeto de orgulho. Conte sobre os desafios técnicos superados, a arquitetura escolhida e as principais funcionalidades implementadas por você.",
      tag: "Mobile / Flutter"
    },
    {
      titulo: "SISTEMA DESKTOP: INOVAÇÃO E PERFORMANCE EXCEPCIONAL",
      subtitulo: "Breve resumo técnico sobre a entrega desta solução robusta.",
      descricao: "Use este terceiro bloco para detalhar mais uma de suas criações. Pode ser um software focado em backend, uma ferramenta de automação ou um projeto acadêmico de peso.",
      tag: "Fullstack / Java"
    }
  ];

  return (
    <div className={styles.journalContainer}>
      {/* TEXTURA DE PAPEL ENVELHECIDO SOBREPOSTA */}
      <div className={styles.paperOverlay}></div>

      <div className={styles.journalBody}>

        {/* CABEÇALHO DO JORNAL (TOP BANNER) */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <span>EDIÇÃO Nº 001</span>
            <span>VOL. XXVI</span>
            <span>PREÇO: UM CAFÉ</span>
          </div>

          <h1 className={styles.mainTitle}>FELIPE P. A. FENSKE</h1>

          <div className={styles.headerBottom}>
            <span className={styles.date}>{currentDate.toUpperCase()}</span>
            <span className={styles.location}>BELO HORIZONTE, MG — BRASIL</span>
          </div>
        </header>

        {/* MANCHETE PRINCIPAL / SOBRE MIM */}
        <section className={styles.mainHeadlineSection}>
          <div className={styles.mainHeadlineLayout}>
            <div className={styles.headlineTextSide}>
              <h2 className={styles.mainHeadlineTitle}>
                FELIPE FENSKE SURPREENDE O MERCADO COM VERSATILIDADE INTERDISCIPLINAR
              </h2>
              <p className={styles.leadParagraph}>
                <strong>URGENTE:</strong> Desenvolvedor mineiro ganha destaque por sua capacidade de atuar sem barreiras tecnológicas, dominando desde plataformas Mobile e Web até ecossistemas Desktop e produção multimídia.
              </p>
              <p className={styles.bodyParagraph}>
                Em um cenário digital que frequentemente exige extrema especialização, Felipe P. A. Fenske trilha o caminho dos grandes poliglotas da tecnologia. Movido pela curiosidade e pela capacidade de resolver problemas complexos na engenharia de software, o desenvolvedor recusa-se a ficar preso a apenas um ecossistema: se a demanda pede mobilidade, o código ganha vida; se exige robustez corporativa, soluções desktop e web são arquitetadas com precisão.
              </p>
              <p className={styles.bodyParagraph}>
                Sua atuação vai além das linhas de código tradicionais. Ao integrar habilidades técnicas de programação com edição de vídeo e design de interfaces, Felipe entrega uma visão holística em seus projetos, unindo a estética visual refinada à lógica matemática rigorosa do backend.
              </p>
            </div>

            <div className={styles.headlinePhotoSide}>
              <div className={styles.photoContainer}>
                {/* SUBSTITUA O BLOCO ANTERIOR POR ESTE: */}
                <img
                  src="/foto3.png" // <-- Coloque o nome exato do seu arquivo aqui (mantendo a barra / na frente)
                  alt="Foto de Felipe Fenske"
                  style={{
                    width: '100%',
                    height: '240px',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    // Esse filtro transforma qualquer imagem em Preto e Branco com alto contraste (estilo jornal)
                    filter: 'grayscale(1) contrast(1.3) brightness(0.95)'
                  }}
                />
              </div>
              <p className={styles.photoCaption}>
                Fig. 1 — Registro fotográfico do engenheiro de software de Belo Horizonte em plena atividade criativa.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE TECNOLOGIAS (ESTILIZADA COMO CLASSIFICADOS DE JORNAL) */}
        <section className={styles.technologiesSection}>
          <div className={styles.sectionTitleBar}>
            <h3>CLASSIFICADOS: ARSENAL TÉCNICO &amp; FERRAMENTAL</h3>
          </div>

          <div className={styles.techGrid}>
            <div className={styles.techCard}>
              <h4>AMBIENTE WEB &amp; FRONT</h4>
              <p>HTML5, CSS3, JavaScript (JS), TypeScript (TS), React, Next.js e Tailwind CSS para interfaces responsivas.</p>
            </div>
            <div className={styles.techCard}>
              <h4>MULTI-PLATAFORMA &amp; MOBILE</h4>
              <p>Flutter e Dart para o desenvolvimento de aplicativos nativos de alta performance (iOS e Android).</p>
            </div>
            <div className={styles.techCard}>
              <h4>BACK-END &amp; ROBUSTEZ</h4>
              <p>Java, Node.js, Express, NestJS e APIs REST robustas para sistemas Desktop e Web escaláveis.</p>
            </div>
            <div className={styles.techCard}>
              <h4>MULTIMÍDIA &amp; DEVOPS</h4>
              <p>Edição de Vídeo profissional, Docker, Git/GitHub, Banco de Dados (PostgreSQL, MongoDB) e infraestrutura.</p>
            </div>
          </div>
        </section>

        {/* SEÇÃO PRINCIPAL: PROJETOS (ESTILIZADOS COMO COLUNAS DE NOTÍCIAS) */}
        <section className={styles.projectsSection}>
          <div className={styles.sectionTitleBar}>
            <h3>CRÔNICAS DE ENGENHARIA: CASOS DE SUCESSO</h3>
          </div>

          <div className={styles.projectsGrid}>
            {projetos.map((proj, idx) => (
              <article key={idx} className={styles.projectArticle}>
                <span className={styles.projectTag}>[ {proj.tag} ]</span>
                <h4 className={styles.projectTitle}>{proj.titulo}</h4>
                <h5 className={styles.projectSubtitle}>{proj.subtitulo}</h5>
                <p className={styles.projectDesc}>{proj.descricao}</p>
                <div className={styles.readMore}>Leia a crônica completa na pág. {idx + 2}...</div>
              </article>
            ))}
          </div>
        </section>

        {/* RODAPÉ DO JORNAL (EXPEDIENTE, CONTATOS E LINKS REAIS) */}
        <footer className={styles.journalFooter}>
          <div className={styles.footerBar}>
            <span>EXPEDIENTE E CONTATOS</span>
            <span>FALE COM O REDATOR</span>
          </div>
          <div className={styles.footerContent}>
            <p><strong>TELEGRAMA DIGITAL / EMAIL:</strong> felipefenske05@gmail.com</p>
            <p><strong>LINKEDIN:</strong> <a href="https://www.linkedin.com/in/felipe-antunes-404398322/" target="_blank" rel="noopener noreferrer">linkedin.com/in/felipe-antunes-404398322/</a></p>
            <p><strong>REPOSITÓRIO GITHUB:</strong> <a href="https://github.com/Lipefsk05" target="_blank" rel="noopener noreferrer">github.com/Lipefsk05</a></p>
            <p className={styles.copyright}>
              © 1926-2026 O Fenske Herald S/A. Impresso em Belo Horizonte/MG. Todos os direitos reservados. Proibida a reprodução sem autorização prévia do autor.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}