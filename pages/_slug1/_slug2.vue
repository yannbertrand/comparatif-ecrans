<template>
  <main>
    <section id="recherche" class="sticky top-0 p-6 flex w-screen bg-white border-b mb-2">
      <nuxt-link :to="{ name: 'index', query: $route.query }">
        🔙 Recherche 🔎
      </nuxt-link>
    </section>

    <section class="flex justify-center">
      <aside class="text-right mx-auto px-4 -mx-2 lg:-mx-2 justify-evenly items-center">
        <div class="h-48">
        </div>
        <div>
          <strong>Nom</strong>
        </div>
        <div>
          <strong>Dalle</strong>
        </div>
        <div>
          <strong>Format</strong>
        </div>
        <div>
          <strong>Taille</strong>
        </div>
        <div>
          <strong>Résolution</strong>
        </div>
        <div>
          <strong>Gamut de couleurs</strong>
        </div>
        <div>
          <strong>Contraste moyen</strong>
        </div>
        <div>
          <strong>Luminosité moyenne</strong>
        </div>
        <div>
          <strong>Rafraîchissement</strong>
        </div>
        <div>
          <strong>Thunderbolt 3</strong>
        </div>
        <div>
          <strong>Plus</strong>
        </div>
        <div>
          <strong>Prix</strong>
        </div>
      </aside>
      <section class="ecran" v-for="ecran in ecrans" :key="ecran.slug">
        <div class="w-56 h-48">
          <img :src="`${ecran.slug}/1.png`" :alt="`Photo de l'écran ${ecran.nom.commercial}`">
        </div>
        <p>{{ ecran.marque }} {{ ecran.nom.commercial }}</p>
        <p>{{ ecran.dalle }}</p>
        <p>{{ ecran.format }}</p>
        <p>{{ ecran.taille }}"</p>
        <p>{{ ecran.resolution }}</p>
        <p>{{ ecran.gamut }}</p>
        <p>{{ ecran.contraste }}:1</p>
        <p>{{ ecran.luminosite }} cd/m2</p>
        <p>{{ ecran.raffraichissement }} images par secondes</p>
        <p v-if="ecran.thunderbolt3">{{ ecran.thunderbolt3 }}W</p>
        <p v-else>Non</p>
        <p>{{ ecran.plus.join(', ') }}</p>
        <p>{{ ecran.prix }}€</p>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData (context) {
    const ecrans = [
      await context.$content('ecrans', context.params.slug1).fetch(),
      await context.$content('ecrans', context.params.slug2).fetch()
    ]

    console.log(ecrans)

    return { ecrans }
  }
}
</script>
