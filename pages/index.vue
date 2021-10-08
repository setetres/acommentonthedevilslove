<template>
  <section
    class="
      flex flex-col flex-1
      min-h-screen
      items-center
      overflow-hidden
      relative
    "
  >
    <h2
      class="
        text-3xl
        sm:text-4xl
        text-center
        font-extrabold
        tracking-tight
        text-gray-900
        mb-8
      "
    >
      Twelve English Poems
    </h2>
    <div class="max-w-4xl px-4 sm:px-8 lg:px-32 text-lg sm:text-xl">
      <div class="grid grid-cols-1 gap-8 leading-7 sm:leading-8">
        <div class="space-y-4 sm:space-y-8 text-center">
          <p class="font-bold">
            These poems are respectfully dedicated to The Cheshire-Cat.
          </p>
          <p>Brasília, Summer 1973.<br />Fausto Alvim Junior</p>
        </div>
      </div>
    </div>
    <img
      alt="A comment on the Devil's Love"
      src="~/assets/images/home.png"
      class="w-full rounded-2xl pointer-events-none"
    />
  </section>
</template>
<script>
export default {
  head() {
    return {
      title: "A comment on the Devil's Love",
    }
  },

  mounted() {},
}
</script>
