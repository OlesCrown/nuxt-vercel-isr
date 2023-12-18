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
        <h1>Hello from Vercel!</h1>
          
      <div>Regenerated at {{ generatedAt }}</div>

</template>
