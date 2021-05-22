<template>
  <div class="flex">
    <div class="flex bg-black">
      <div class="">
        <ul class="sticky top-0 font-mono">
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/"
              exact
            >
              ##
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/about"
              exact
            >
              &&
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/01"
              exact
            >
              01
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/02"
              exact
            >
              02
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/03"
              exact
            >
              03
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/04"
              exact
            >
              04
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/05"
              exact
            >
              05
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/06"
              exact
            >
              06
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/07"
              exact
            >
              07
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/08"
              exact
            >
              08
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/09"
              exact
            >
              09
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/10"
              exact
            >
              10
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/11"
              exact
            >
              11
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-gray-400 hover:text-white px-8 py-4"
              to="/12"
              exact
            >
              12
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
