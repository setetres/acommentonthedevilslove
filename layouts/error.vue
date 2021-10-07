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
              v-if="error.statusCode === 404"
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
              Not found
            </span>
            <span
              v-else
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
              An error occurred
            </span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
