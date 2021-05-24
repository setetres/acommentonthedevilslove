<template>
  <div class="flex flex-col">
    <header
      class="home bg-gray-800 flex flex-col flex-1 min-h-screen items-center justify-center overflow-hidden relative"
    >
      <div class="max-w-2xl space-y-4 z-10">
        <h1 class="font-extrabold italic text-8xl text-white mb-4">
          A comment on the Devil's love
        </h1>
        <div class="space-y-8 font-medium text-white">
          <div class="text-5xl">
            <p>"Twelve English Poems"</p>
          </div>
          <div class="text-2xl space-y-4 max-w-xs">
            <p>These poems are respectfully dedicated to The Cheshire-Cat.</p>
          </div>
          <div class="text-lg">
            <p>Brasília, Summer 1973.</p>
            <p>Fausto Alvim Junior</p>
          </div>
        </div>
      </div>
      <img class="top-0 absolute h-full" src="~/assets/images/home.png" />
    </header>
  </div>
</template>
<script>
export default {
  components: {},

  beforeRouteLeave(to, from, next) {
    setTimeout(function () {
      next()
    }, 500)
  },

  head() {
    return {
      title: "A comment on the Devil's love",
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
