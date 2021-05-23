<template>
  <div class="flex">
    <div class="flex bg-black select-none">
      <div>
        <ul class="sticky top-0 font-mono text-sm">
          <li>
            <div
              class="flex items-center justify-center text-gray-600 py-4 relative"
            >
              <span class="bg-black px-4 z-10">1973</span>
            </div>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/"
              exact
            >
              <span class="bg-black px-4 z-10">##</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/about"
              exact
            >
              <span class="bg-black px-4 z-10">--</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/01"
              exact
            >
              <span class="bg-black px-4 z-10">01</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/02"
              exact
            >
              <span class="bg-black px-4 z-10">02</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/03"
              exact
            >
              <span class="bg-black px-4 z-10">03</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/04"
              exact
            >
              <span class="bg-black px-4 z-10">04</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/05"
              exact
            >
              <span class="bg-black px-4 z-10">05</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/06"
              exact
            >
              <span class="bg-black px-4 z-10">06</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/07"
              exact
            >
              <span class="bg-black px-4 z-10">07</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/08"
              exact
            >
              <span class="bg-black px-4 z-10">08</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/09"
              exact
            >
              <span class="bg-black px-4 z-10">09</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/10"
              exact
            >
              <span class="bg-black px-4 z-10">10</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/11"
              exact
            >
              <span class="bg-black px-4 z-10">11</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4 relative"
              to="/12"
              exact
            >
              <span class="bg-black px-4 z-10">12</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <main class="flex-1">
      <Nuxt />
    </main>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },

  head() {
    return {
      title: 'Sete Três — Archive',
    }
  },

  mounted() {
    this.$nextTick(() => {})
  },
}
</script>
