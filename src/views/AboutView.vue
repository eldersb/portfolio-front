<template>
  
  <section class="sobre">
  <div>
    <p class="section-label">sobre mim</p>
    <h2 class="section-title">Quem sou eu?</h2>
    <p class="sobre-text">
      Estou sempre disposto a aprender e obter novas experiências. Concluí o ensino
      médio-técnico na instituição CEEP/TIC, e neste processo fui consolidando meu
      interesse por tecnologia. Atualmente, sou formado em Sistemas de Informação pela
      UNIME, com foco profissional no Desenvolvimento Web. Tenho experiência na área de
      Suporte, tendo atuado como estagiário e Analista de Suporte Técnico. Hoje, atuo
      como desenvolvedor, possuindo experiência de estágio com a linguagem Java e atuação em projeto voluntário em PHP.
    </p>
    <div class="tags">
      <span v-for="tag in sobreTags" :key="tag" class="tag-pill">{{ tag }}</span>
    </div>
  </div>

  <div class="code-block">
    <div class="code-bar">
      <span class="dot dot-r"></span>
      <span class="dot dot-y"></span>
      <span class="dot dot-g"></span>
      <span class="code-filename">elder.js</span>
    </div>
    <div class="code-body">
      <div v-for="line in codeLines" :key="line.n" class="ln">
        <span class="ln-num">{{ line.n }}</span>
        <span v-html="line.h"></span>
      </div>
    </div>
  </div>
</section>

  <!-- SKILLS (existente) -->
  <div class="divider">
    <div class="divider-line"></div>
    <span class="divider-label">// Skills</span>
    <div class="divider-line"></div>
  </div>

  <section class="skills">
    <p class="section-label">tecnologias</p>
    <h2 class="section-title">Skills</h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-card">
        <div class="card-header">
          <div class="card-icon">{{ skill.icon }}</div>
          <span class="card-name">{{ skill.name }}</span>
        </div>
        <ul class="skill-list">
          <li v-for="item in skill.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- CONTACT ME -->
  <div class="divider">
    <div class="divider-line"></div>
    <span class="divider-label">// Contato</span>
    <div class="divider-line"></div>
  </div>

  <section class="contact">
    <div class="contact-left">
      <p class="section-label">Contato</p>
      <h2 class="section-title">Bora conversar?</h2>
      <p class="sobre-text">
        Se tiver interessado em meus trabalhos, ou deseja me orientar profissionalmente,
        não hesite e entre em contato comigo.
      </p>
    </div>
    <div class="contact-card">
      <p class="contact-card-title">// Contatos</p>
      <ul class="contact-links">
        <li v-for="c in contacts" :key="c.label">
          <span class="link-icon">{{ c.icon }}</span>
          <a :href="c.href" target="_blank">{{ c.label }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const sobreTags = ['CEEP/TIC', 'UNIME', 'Sistemas de Informação', 'Dev Web', 'PHP & Java']

const skills = [
  { icon: '{ }', name: 'Front-End',     items: ['HTML', 'CSS', 'Javascript', 'Vue', 'Next', 'Alpine'] },
  { icon: '{ }', name: 'Back-End',      items: ['PHP', 'Java', 'Laravel', 'Spring Boot'] },
  { icon: '⌥',   name: 'Versionamento', items: ['Git', 'GitHub', 'Gitlab'] },
  { icon: '◈',   name: 'Databases',     items: ['MySQL', 'PostgreSQL'] },
]

const contacts = [
  { icon: 'gh', label: 'GitHub',   href: 'https://github.com/eldersb' },
  { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/elders3288/' },
  { icon: '@',  label: 'E-mail',   href: 'mailto:elders3288@gmail.com' }
]

const codeLines = [
  { n:1,  h: `<span class="kw">const</span> <span class="fn">elder</span> <span class="pun">= {</span>` },
  { n:2,  h: `&nbsp;&nbsp;<span class="prop">name</span><span class="pun">:</span> <span class="str">'Elder Borges'</span><span class="pun">,</span>` },
  { n:3,  h: `&nbsp;&nbsp;<span class="prop">role</span><span class="pun">:</span> <span class="str">'Web Developer'</span><span class="pun">,</span>` },
  { n:4,  h: `&nbsp;&nbsp;<span class="prop">education</span><span class="pun">:</span> <span class="str">'UNIME'</span><span class="pun">,</span>` },
  { n:5,  h: `&nbsp;&nbsp;<span class="prop">stack</span><span class="pun">: {</span>` },
  { n:6,  h: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="prop">frontend</span><span class="pun">: [</span><span class="str">'Vue'</span><span class="pun">,</span> <span class="str">'JS'</span><span class="pun">,</span> <span class="str">'Next'</span><span class="pun">],</span>` },
  { n:7,  h: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="prop">backend</span><span class="pun">: [</span><span class="str">'PHP'</span><span class="pun">,</span> <span class="str">'Java'</span><span class="pun">],</span>` },
  { n:8,  h: `&nbsp;&nbsp;&nbsp;&nbsp;<span class="prop">db</span><span class="pun">: [</span><span class="str">'MySQL'</span><span class="pun">,</span> <span class="str">'PostgreSQL'</span><span class="pun">],</span>` },
  { n:9,  h: `&nbsp;&nbsp;<span class="pun">},</span>` },
  { n:10, h: `&nbsp;&nbsp;<span class="prop">status</span><span class="pun">:</span> <span class="val">openToWork</span><span class="pun">,</span>` },
  { n:11, h: `<span class="pun">}</span>` },
  { n:12, h: `` },
  { n:13, h: `<span class="cm">// always learning 🚀</span>` },
]

</script>

<style scoped>
.code-body :deep(.kw)   { color: #b8aaff; }
.code-body :deep(.fn)   { color: #7c6aff; }
.code-body :deep(.str)  { color: #8affb2; }
.code-body :deep(.cm)   { color: rgba(232,228,255,0.25); font-style: italic; }
.code-body :deep(.prop) { color: #5ee7df; }
.code-body :deep(.val)  { color: #ffbd82; }
.code-body :deep(.pun)  { color: rgba(232,228,255,0.45); }
</style>