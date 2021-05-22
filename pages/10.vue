<template>
  <div class="flex flex-col">
    <div
      class="image-10 bg-purple-500 flex flex-col flex-1 min-h-screen items-center justify-center"
    >
      <img src="~/assets/images/10.png" />
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
      title: "A comment on the devil's love",
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
