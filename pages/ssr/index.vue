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
  <div>

    <h1>Hello from SSR{{isServer}}!</h1>
    <div>Regenerated at {{  generatedAt }}</div>
  </div>
          

</template>
