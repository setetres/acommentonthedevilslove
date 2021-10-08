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
      Ⅰ
    </h2>
    <img
      alt="Ⅰ"
      src="~/assets/images/01.png"
      class="w-full rounded-2xl pointer-events-none my-8"
    />
    <div class="max-w-6xl px-4 sm:px-8 lg:px-32 text-lg sm:text-xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 leading-7 sm:leading-8">
        <div class="space-y-4 sm:space-y-8">
          <p>
            What is the sound of love?<br />
            The silence of solitude.<br />
            What is the form of love?<br />
            True, but lonely love.
          </p>
          <p>
            This impairing coldness,<br />
            This clear analysis,<br />
            The ironclad crouch -<br />
            Isn't it love's touch?
          </p>
          <p>
            But also all the sorrows,<br />
            Every praised ecstasy<br />
            And disturbing antinomy
          </p>
          <p>
            - Of condemned passion<br />
            The whole flaming multitude -<br />
            Silently play<br />In icy solitude.
          </p>
        </div>
        <div class="space-y-4 sm:space-y-8">
          <p>
            Qual é o som do amor?<br />
            O silêncio da solidão.<br />
            Qual é a forma do amor?<br />
            Verdadeiro, porém solitário amor.
          </p>
          <p>
            Esta corrosiva frieza,<br />
            Esta clara análise,<br />
            Este aviltamento armado de ferro -<br />
            Não é o toque do amor?
          </p>
          <p>
            Todas as dores,<br />
            Cada louvado êxtase<br />
            E perturbante antinomia
          </p>
          <p>
            - De condenada paixão<br />
            A pluralidade em flamas -<br />
            Silenciosamente disputam<br />
            Numa solidão gelada.
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
      title: "A comment on the Devil's Love — Ⅰ",
    }
  },

  mounted() {},
}
</script>
