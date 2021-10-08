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
      "
    >
      Ⅹ
    </h2>
    <img
      alt="Ⅹ"
      src="~/assets/images/10.png"
      class="w-full rounded-2xl pointer-events-none my-8"
    />
    <div class="max-w-6xl px-4 sm:px-8 lg:px-32 text-lg sm:text-xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 leading-7 sm:leading-8">
        <div class="space-y-4 sm:space-y-8">
          <p>
            Alas, Love and Hate!<br />
            Why abide ye both<br />
            At once in my breast?
          </p>
          <p>
            Alas, my timid heart!<br />
            Where were thine eyes?<br />
            All ye sense!<br />
            Where were ye hid?
          </p>
          <p>
            Alas, Malice and Compassion!<br />
            Who will release me? Whiter<br />
            Must I creep? Whiter flee?
          </p>
          <p class="text-right">
            Too late, it is too late.<br />
            Wherever I may be, there<br />
            Of Mercy and Vengeance<br />
            I am a prisoner.
          </p>
        </div>
        <div class="space-y-4 sm:space-y-8">
          <p>
            Alas, Amor e Ódio!<br />
            Por quê habitam vocês ambos<br />
            Juntos em meu seio?
          </p>
          <p>
            Alas, meu tímido coração!<br />
            Onde estão seus olhos?<br />
            Oh, meus sentimentos!<br />
            Onde estão escondidos?
          </p>
          <p>
            Alas, Malícia e Compaixão!<br />
            Quando vocês me libertarão? Para onde<br />
            Devo arrastar-me? Para onde fugir?
          </p>
          <p class="text-right">
            Muito tarde, é muito tarde.<br />
            Onde quer que eu esteja, lá<br />
            Do Perdão e Vingança,<br />
            Sou um prisioneiro.
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
      title: "A comment on the Devil's Love — Ⅹ",
    }
  },

  mounted() {},
}
</script>
