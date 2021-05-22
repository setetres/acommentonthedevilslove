<template>
  <div class="flex">
    <div class="flex bg-gray-900">
      <div class="">
        <ul class="sticky top-0 font-mono">
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/"
              active-class="link--active"
              exact
            >
              ##
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/about"
              active-class="link--active"
              exact
            >
              &&
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/01"
              active-class="link--active"
              exact
            >
              01
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/02"
              active-class="link--active"
              exact
            >
              02
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/03"
              active-class="link--active"
              exact
            >
              03
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/04"
              active-class="link--active"
              exact
            >
              04
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/05"
              active-class="link--active"
              exact
            >
              05
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/06"
              active-class="link--active"
              exact
            >
              06
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/07"
              active-class="link--active"
              exact
            >
              07
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/08"
              active-class="link--active"
              exact
            >
              08
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/09"
              active-class="link--active"
              exact
            >
              09
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/10"
              active-class="link--active"
              exact
            >
              10
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/11"
              active-class="link--active"
              exact
            >
              11
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="flex text-2xl text-white px-8 py-2"
              to="/12"
              active-class="link--active"
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
