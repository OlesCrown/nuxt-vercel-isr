<script setup lang="ts">
import ms from 'ms'

const { data: info } = await useFetch('/api/info')

const isServer = process.server
const generatedAt = useState(() => new Date().toISOString())
const date = new Date(generatedAt.value)
const timeAgo = ref()
onMounted(() => {
  timeAgo.value = ms(Date.now() - date.valueOf(), { long: true })
})
</script>

<template>
  <div id="container">
    <Head>
      <Title>Nuxt on Vercel </Title>
      <Meta
        name="description"
        content="HTML, dynamically rendered in a city near you"
      />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:site" content="@nuxt_js" />
      <Meta name="twitter:creator" content="@nuxt_js" />
      <Meta name="twitter:title" content="Nuxt on the edge" />
      <Meta
        name="twitter:description"
        content="HTML, dynamically rendered in a city near you"
      />
      <Meta
        name="twitter:image"
        content="https://nuxt-on-the-edge.vercel.app/og-card.png"
      />
      <Meta name="twitter:image:alt" content="The Vercel and Nuxt logos" />
      <Meta
        name="og:image"
        content="https://nuxt-on-the-edge.vercel.app/og-card.png"
      />
    </Head>
    <div style="height: 100%">
      <AppBackground />
      <main>
        <h1>Nuxt  STATIC process.server=@{{isServer}}@ </h1>
        <div class="info">
          <div class="block">
            <div v-if="info" class="contents">
              <span>Served by</span>
              <strong style="text-transform: uppercase;">
                {{ info.region || '-' }}
              </strong>
            </div>
          </div>

          <div class="block">
            <div class="contents">
              <span>Generated</span>
              <span>
                <strong v-if="timeAgo">{{ timeAgo }} ago</strong>
                <strong v-else>...</strong>
              </span>
            </div>
          </div>
        </div>
      </main>
      <div class="debug">Regenerated at {{ generatedAt }}</div>
    </div>
    <footer>
      <p class="company">
        <a target="_blank" href="https://vercel.com" aria-label="Vercel">
          <LogoVercel />
        </a>
      </p>
      <p class="details">
        Built with
        <NuxtLink to="https://nuxt.com" target="_blank">Nuxt</NuxtLink>
        on
        <NuxtLink to="https://vercel.com" target="_blank">Vercel</NuxtLink>
      </p>
      <NuxtLink
        target="_blank"
        href="https://github.com/danielroe/nuxt-vercel-isr"
        class="source"
      >
        <LogoGithub />
        Source
      </NuxtLink>
    </footer>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

body {
  --fg: black;
  --bg: white;
  --primary: #00dc82;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--bg);
  color: var(--fg);
}

#__nuxt,
#container {
  height: 100%;
  overflow: hidden;
}

::selection {
  background: var(--primary);
  color: var(--bg);
}

@media (prefers-color-scheme: dark) {
  body {
    --fg: white;
    --bg: black;
  }
}

/* main */

main {
  position: relative;
  width: 100vw;
  height: 100%;
  padding: 2.5rem;
  box-sizing: border-box;
}

main h1 {
  font-size: min(16vw, 4rem);
  font-weight: 600;
  margin: 0;
  text-align: center;
  position: absolute;
  top: 10vh;
  left: 0;
  width: 100%;
  padding: 0 2.5rem;
  box-sizing: border-box;
  line-height: 1;
}

main h1 span {
  display: block;
  max-width: 6em;
  margin: 0 auto;
}

main .info {
  --border-color: rgba(0, 0, 0, 0.08);
  position: absolute;
  bottom: 9rem;
  left: 0;
  width: 100%;
  display: grid;
  padding: 0 2.5rem;
  font-size: min(5vw, 2rem);
  box-sizing: border-box;
}

main .block {
  display: flex;
  margin: 0;
  padding: 1rem 0;
}

main .block:nth-child(1) {
  border-bottom: 1px solid var(--border-color);
}

main .block span {
  display: block;
  margin: 0 0 0.2em 0;
  font-size: 0.6em;
}

main .block strong {
  display: block;
  font-size: 1.4em;
  margin: 0;
  font-weight: 600;
}

main .block strong.na {
  color: #ccc;
  font-weight: normal;
}

.debug {
  position: absolute;
  bottom: 20px;
  text-align: center;
  width: 100%;
  font-size: 11px;
  color: #999;
}

@media (min-width: 640px) {
  main h1 {
    font-size: min(8vw, 4rem);
  }

  main h1 span {
    max-width: none;
  }

  main .info {
    display: flex;
    justify-content: center;
    position: relative;
    top: 60vh;
    gap: 4rem;
    grid-template-columns: 1fr 1fr;
  }

  main .block:nth-child(1) {
    border-bottom: none;
    justify-content: end;
  }

  main .block:nth-child(2) {
    justify-content: start;
  }
}

@media (prefers-color-scheme: dark) {
  main .block:nth-child(1) {
    --border-color: rgba(255, 255, 255, 0.35);
  }
}

/* card */
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes grow {
  0% {
    opacity: 0;
    transform: scale(0.96);
  }

  3% {
    opacity: 0.7;
    transform: scale(1.03);
  }

  3.6% {
    opacity: 0.8;
    transform: scale(1.05);
  }

  4.2% {
    opacity: 0.9;
    transform: scale(1.03);
  }

  6% {
    opacity: 1;
    transform: scale(1);
  }

  95% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
}

svg.card {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
}

.card .satellite {
  fill: var(--bg);
  stroke-width: 1.165;
  /* animation: fade-in 1s both; */
}

.card .orange.satellite {
  stroke: var(--primary);
}

.card .gray.satellite {
  stroke: #999;
}

.card .orbit {
  fill: none;
  stroke-width: 1.165;
  animation: grow 5s linear both infinite;
}

.card .orbits > g {
  animation: spin 60s linear both infinite;
}

.card .orbits > g:nth-child(2) {
  animation-duration: 80s;
}

.card .orbits > g:nth-child(3) {
  animation-duration: 100s;
}

.card .orbits > g:nth-child(4) {
  animation-duration: 120s;
}

.card #gradient-vercel {
  --g1: #000;
  --g2: #333;
}

.card stop {
  stop-color: rgba(0, 0, 0, 0.3);
}

@media (min-width: 800px) {
  .card .orbits > g:nth-child(2) {
    animation-duration: 120s;
  }

  .card .orbits > g:nth-child(3) {
    animation-duration: 150s;
  }

  .card .orbits > g:nth-child(4) {
    animation-duration: 180s;
  }
}

@media (prefers-color-scheme: dark) {
  .card #gradient-vercel {
    --g1: #eee;
    --g2: #fff;
  }

  .card stop {
    stop-color: white;
  }
}

@media (prefers-reduced-motion) {
  .card .satellite,
  .card .orbit,
  .card .orbits > g {
    animation: none;
  }
}

/* footer */

footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 2.5rem;
  box-sizing: border-box;
  font-size: 16px;
}

footer p {
  margin: 0.5em 0;
}

footer a {
  text-decoration: none;
}

footer a:hover {
  text-decoration: hover;
}

footer .details {
  order: 3;
  grid-column: 1/3;
  white-space: nowrap;
}

footer .details a {
  color: var(--primary);
}

footer .source,
footer .company {
  display: flex;
  align-items: center;
}

footer .source {
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-end;
}

footer .company {
  font-weight: 600;
  white-space: nowrap;
  justify-content: start;
}

footer .company svg {
  height: 1em;
  position: relative;
  top: 0.2em;
}

footer .source,
footer .company a {
  color: var(--fg);
}

@media (min-width: 800px) {
  footer {
    display: flex;
    justify-content: space-around;
  }

  footer .source,
  footer .company {
    width: 10em;
  }

  footer .details {
    order: 0;
    grid-column: 1/3;
  }
}
</style>
