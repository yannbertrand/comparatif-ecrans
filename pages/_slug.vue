<template>
  <main>
    <section id="recherche" class="sticky top-0 p-6 flex w-screen bg-white border-b mb-2">
      <nuxt-link :to="{ name: 'index', query: $route.query }">
        🔙 Recherche 🔎
      </nuxt-link>
    </section>

    <section id="details" class="mx-auto px-4 w-screen -mx-1 lg:-mx-4 flex flex-col lg:flex-row justify-evenly items-center">
      <aside class="max-w-lg">
        <img :src="`${ecran.slug}/1.png`" :alt="`Photo de l'écran ${ecran.nom.commercial}`" width="500" height="380">
      </aside>
      <article>
        <table class="text-right">
          <tbody>
            <tr>
              <th>Nom</th>
              <td>{{ ecran.nom.commercial }}</td>
            </tr>
            <tr :class="{ 'text-red-700': $route.query.dalle }">
              <th>Dalle</th>
              <td>{{ ecran.dalle }}</td>
            </tr>
            <tr :class="{ 'text-red-700': $route.query.format }">
              <th>Format</th>
              <td>{{ ecran.format }}</td>
            </tr>
            <tr :class="{ 'text-red-700': $route.query.taille }">
              <th>Taille</th>
              <td>{{ ecran.taille }}"</td>
            </tr>
            <tr :class="{ 'text-red-700': $route.query.resolution }">
              <th>Résolution</th>
              <td>{{ ecran.resolution }}</td>
            </tr>
            <tr :class="{ 'text-red-700': $route.query.gamut }">
              <th>Gamut de couleurs</th>
              <td>{{ ecran.gamut }}</td>
            </tr>
            <tr :class="{ 'text-red-700': $route.query.contraste }">
              <th>Contraste moyen</th>
              <td>{{ ecran.contraste }}:1</td>
            </tr>
            <tr :class="{ 'text-red-700': $route.query.luminosite }">
              <th>Luminosité moyenne</th>
              <td>{{ ecran.luminosite }} cd/m2</td>
            </tr>
            <tr>
              <th>Rafraîchissement</th>
              <td>{{ ecran.rafraichissement }} images par secondes</td>
            </tr>
            <tr>
              <th>Thunderbolt 3</th>
              <td v-if="ecran.thunderbolt3">
                Oui, {{ ecran.thunderbolt3 }}W max
              </td>
              <td v-else>
                Non
              </td>
            </tr>
            <tr>
              <th>Plus</th>
              <td>
                <template v-for="plus in ecran.plus">
                  {{ plus }}
                </template>
              </td>
            </tr>
            <tr>
              <th>Prix</th>
              <td>{{ ecran.prix }}€</td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData (context) {
    const ecran = await context.$content('ecrans', context.params.slug).fetch()

    return { ecran }
  }
}
</script>

<style scoped>
th { text-align: right; padding: 0 1rem; }
td { text-align: left; }
</style>
