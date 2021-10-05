<template>
  <div class="flex px-16 pr-24 py-32">
    <div class="flex bg-gray-50 rounded-2xl select-none">
      <div>
        <ul class="sticky top-0 font-mono font-bold text-base w-16">
          <li>
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/"
              exact
            >
              <span class="w-full z-10">✹</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/prefacio"
              exact
            >
              <span class="w-full z-10">⊟</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/noticia-bibliografica"
              exact
            >
              <span class="w-full z-10">≋</span>
            </nuxt-link>
          </li>
          <li class="border-b-2 border-white">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/dentro-e-fora-do-humano"
              exact
            >
              <span class="w-full z-10">⊙</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/01"
              exact
            >
              <span class="w-full z-10">Ⅰ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/02"
              exact
            >
              <span class="w-full z-10">Ⅱ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/03"
              exact
            >
              <span class="w-full z-10">Ⅲ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/04"
              exact
            >
              <span class="w-full z-10">Ⅳ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/05"
              exact
            >
              <span class="w-full z-10">Ⅴ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/06"
              exact
            >
              <span class="w-full z-10">Ⅵ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/07"
              exact
            >
              <span class="w-full z-10">Ⅶ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/08"
              exact
            >
              <span class="w-full z-10">Ⅷ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/09"
              exact
            >
              <span class="w-full z-10">Ⅸ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/10"
              exact
            >
              <span class="w-full z-10">Ⅹ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/11"
              exact
            >
              <span class="w-full z-10">Ⅺ</span>
            </nuxt-link>
          </li>
          <li class="bg-gray-100">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/12"
              exact
            >
              <span class="w-full z-10">Ⅻ</span>
            </nuxt-link>
          </li>
          <li class="border-t-2 border-white">
            <nuxt-link
              class="
                flex
                text-gray-400
                hover:text-black
                py-4
                relative
                w-full
                text-center
              "
              to="/extras"
              exact
            >
              <span class="w-full z-10">∅</span>
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
  head() {
    return {
      title: "A comment on the Devil's love",
    }
  },

  mounted() {},
}
</script>
