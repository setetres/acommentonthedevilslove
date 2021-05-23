<template>
  <div class="flex flex-col">
    <div
      class="image-02 bg-yellow-500 flex flex-col flex-1 min-h-screen items-center justify-center"
    >
      <img src="~/assets/images/02.png" />
      <div class="max-w-2xl space-y-8 z-10">
        <h1 class="font-extrabold italic text-8xl text-black mb-4">
          A comment on the Devil's love
        </h1>
        <div class="space-y-8 font-medium text-black">
          <p class="text-5xl">
            These poems are respectfully dedicated to The Cheshire-Cat.
          </p>
          <div class="text-2xl space-y-4">
            <div>
              <p>A comment on the Devil's love.</p>
              <p>"Twelve English Poems"</p>
            </div>
            <p>Brasília, Summer 1973.</p>
          </div>
          <p class="text-lg">Fausto Alvim Junior</p>
        </div>
      </div>
    </div>
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
