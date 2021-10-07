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
    <div class="max-w-4xl">
      <div class="px-4 sm:px-8 lg:px-32">
        <div class="space-y-4 sm:space-y-8">
          <h1>
            <span
              class="
                block
                text-base text-center text-purple-600
                font-bold
                tracking-wide
              "
              >A comment on the Devil's Love</span
            >
            <span
              class="
                mt-2
                block
                text-2xl text-center
                leading-6
                sm:leading-7
                lg:leading-8
                font-extrabold
                tracking-tight
                text-gray-900
                sm:text-3xl
                lg:text-4xl
              "
            >
              Twelve English Poems
            </span>
          </h1>
        </div>
      </div>
    </div>
    <div class="p-4 sm:p-8 lg:p-16">
      <img
        alt="A comment on the Devil's Love"
        src="~/assets/images/home.png"
        class="w-full rounded-2xl pointer-events-none"
      />
    </div>
    <div class="max-w-4xl">
      <div class="px-4 sm:px-8 lg:px-32">
        <div class="text-base sm:text-lg lg:text-xl space-y-4 sm:space-y-8">
          <p class="leading-6 sm:leading-7 lg:leading-8 font-bold">
            These poems are respectfully dedicated to The Cheshire-Cat.
          </p>
          <p class="leading-6 sm:leading-7 lg:leading-8">
            Brasília, Summer 1973.<br />Fausto Alvim Junior
          </p>
        </div>
      </div>
    </div>
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
