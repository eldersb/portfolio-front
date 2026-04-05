<template>
  <section class="hero">
    <div class="hero-left">
      <p class="hero-eyebrow">Desenvolvedor Web</p>

      <h1 class="hero-name">
        <span class="hero-name-outline">Elder</span> Borges
      </h1>

      <p class="hero-role">
        &lt; desenvolvedor() <span class="blink"></span>&gt;
      </p>

      <blockquote class="hero-quote">
        "A repetição é a mãe da aprendizagem, o pai da ação,
        o que a torna o arquiteto da concretização."
        <cite>— Zig Ziglar</cite>
      </blockquote>

      <router-link to="/about" @click="scroll">
        <button class="btn-primary">&lt;/&gt; Contact me!!</button>
      </router-link>
    </div>

    <div class="hero-right">
      <div class="photo-frame">
        <div class="photo-border"></div>
        <img src="/public/elder-principal.jpeg" alt="Elder Borges" class="photo-img" />
        <div class="status-badge">
          <span class="status-dot"></span>
          Open to work
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    scroll() {
      this.$router.push('/about').then(() => {
        this.$nextTick(() => {
          setTimeout(() => { window.scrollTo(0, document.body.scrollHeight) }, 0)
        })
      })
    }
  }
}
</script>

<style scoped>
.hero {
  min-height: 88vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 48px;
  gap: 48px;
}

.hero-left { padding: 48px 0; }

.hero-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.15em;
  color: #b8aaff;
  text-transform: uppercase;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.hero-eyebrow::before {
  content: '';
  display: inline-block;
  width: 32px;
  height: 1px;
  background: #7c6aff;
}

.hero-name {
  font-family: 'Syne', sans-serif;
  font-size: clamp(40px, 5vw, 50px);
  font-weight: 800;
  line-height: 1.05;
  color: #e8e4ff;
  margin-bottom: 16px;
}
.hero-name-outline {
  color: transparent;
  -webkit-text-stroke: 1.5px #b8aaff;
}

.hero-role {
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: #7c6aff;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.blink {
  display: inline-block;
  width: 2px;
  height: 18px;
  background: #7c6aff;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.hero-quote {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: rgba(232,228,255,0.5);
  line-height: 1.7;
  max-width: 440px;
  border-left: 2px solid rgba(124,106,255,0.35);
  padding-left: 16px;
  margin-bottom: 36px;
}
.hero-quote cite {
  display: block;
  margin-top: 8px;
  font-style: normal;
  font-size: 12px;
}

.btn-primary {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  padding: 12px 28px;
  background: #4a3ff7;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 0.04em;
  transition: background 0.2s, transform 0.1s;
  text-decoration: none;
  display: inline-block;
}
.btn-primary:hover { background: #7c6aff; transform: translateY(-1px); }

/* FOTO */
.hero-right {
  display: flex;
  justify-content: center;
  padding: 48px 0;
}
.photo-frame {
  position: relative;
  width: 320px;
  height: 380px;
}
.photo-border {
  position: absolute;
  inset: -12px;
  border: 1px solid rgba(124,106,255,0.35);
  border-radius: 20px;
  pointer-events: none;
}
.photo-border::before {
  content: '';
  position: absolute;
  top: -1px; left: 20px; right: 20px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #b8aaff, transparent);
}
.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  display: block;
}
.status-badge {
  position: absolute;
  bottom: -16px;
  left: 16px;
  background: #10101a;
  border: 1px solid rgba(124,106,255,0.35);
  border-radius: 100px;
  padding: 8px 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: #8affb2;
  display: flex;
  align-items: center;
  gap: 6px;
}
.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #8affb2;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

/* RESPONSIVO */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 48px 32px;
    min-height: unset;
    gap: 40px;
  }
  .hero-left { padding: 32px 0 0; }
  .hero-right { padding: 0 0 48px; }
}

@media (max-width: 640px) {
  .hero { padding: 32px 20px; }
  .photo-frame { width: 260px; height: 310px; }
}
</style>