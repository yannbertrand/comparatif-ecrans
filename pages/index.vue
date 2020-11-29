<template>
  <main>
    <section id="recherche" class="sticky top-0 p-6 flex w-screen bg-white border-b mb-2">
      <label id="dalle" class="flex-auto">
        Dalle<br>
        <select v-model="dalle" @change="$fetch">
          <option value="" />
          <option value="IPS">IPS</option>
          <option value="VA">VA</option>
          <option value="OLED">OLED</option>
        </select>
      </label>
      <label id="taille" class="flex-auto">
        Taille<br>
        <select v-model="taille" @change="$fetch">
          <option value="" />
          <option value="24">24</option>
          <option value="27">27</option>
          <option value="32">32</option>
        </select>
        "
      </label>
      <label id="format" class="flex-auto">
        Format<br>
        <select v-model="format" @change="$fetch">
          <option value="" />
          <option value="16/9">16/9</option>
          <option value="16/10">16/10</option>
          <option value="21/9">21/9</option>
          <option value="32/9">32/9</option>
        </select>
      </label>
      <label id="resolution" class="flex-auto">
        Résolution<br>
        <select v-model="resolution" @change="$fetch">
          <option value="" />
          <option value="-160">- de 160</option>
          <option value="160-179">160-179</option>
          <option value="180-199">180-199</option>
          <option value="200-219">200-219</option>
          <option value="+220">+ de 220</option>
        </select>
        ppi
      </label>
      <label id="gamut" class="flex-auto">
        Gamut de couleurs<br>
        <select v-model="gamut" @change="$fetch">
          <option value="" />
          <option value="DCI-P3">DCI-P3</option>
          <option value="sRGB">sRGB</option>
        </select>
      </label>
      <label id="contraste" class="flex-auto">
        Contraste<br>
        <select v-model="contraste" @change="$fetch">
          <option value="" />
          <option value="-1000">- de 1000:1</option>
          <option value="1000-1099">1000:1 - 1099:1</option>
          <option value="1100-1199">1100:1 - 1199:1</option>
          <option value="1200-1299">1200:1 - 1299:1</option>
          <option value="+1300">+ de 1300:1</option>
        </select>
      </label>
      <label id="luminosite" class="flex-auto">
        Luminosité<br>
        <select v-model="luminosite" @change="$fetch">
          <option value="" />
          <option value="-300">- de 300</option>
          <option value="300-399">300-399</option>
          <option value="400-499">400-499</option>
          <option value="+500">+ de 500</option>
        </select>
        cd/m2
      </label>
    </section>

    <section id="liste" class="mx-auto px-4 w-screen text-center flex flex-wrap -mx-1 lg:-mx-4">
      <div v-for="ecran in ecrans" :key="ecran.slug" class="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article class="overflow-hidden rounded-lg shadow-lg">
          <nuxt-link :to="{ path: `${ecran.slug}`, query: $route.query }">
            <img :src="`${ecran.slug}/1.png`" :alt="`Photo du ${ecran.nom.commercial}`" class="block w-full h-64 object-contain" width="437" height="256">
          </nuxt-link>
          <h2 class="text-lg font-black">
            {{ ecran.marque }} {{ ecran.nom.commercial }}
          </h2>
          <p>{{ ecran.prix.toFixed(2) }}€</p>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async fetch () {
    const preferences = await this.storePreferences()

    const requete = this.$content('ecrans')
      .sortBy('prix', 'desc')
      .where(this.where(preferences))

    this.ecrans = await requete.fetch()
  },
  data () {
    return {
      ecrans: [],
      dalle: this.$route.query.dalle || '',
      taille: this.$route.query.taille || '',
      format: this.$route.query.format || '',
      resolution: this.$route.query.resolution || '',
      gamut: this.$route.query.gamut || '',
      contraste: this.$route.query.contraste || '',
      luminosite: this.$route.query.luminosite || ''
    }
  },
  methods: {
    rechercheMinMax (valueSouhaitee) {
      if (valueSouhaitee === '') {
        return undefined
      }

      const resultat = {}
      if (valueSouhaitee[0] === '-') {
        resultat.$lt = parseInt(valueSouhaitee.substring(1))
      } else if (valueSouhaitee[0] === '+') {
        resultat.$gte = parseInt(valueSouhaitee.substring(1))
      } else {
        const minMax = valueSouhaitee.split('-')
        resultat.$between = [parseInt(minMax[0]), parseInt(minMax[1])]
      }

      return resultat
    },
    storePreferences () {
      const champsRecherche = ['dalle', 'taille', 'format', 'resolution', 'gamut', 'contraste', 'luminosite']
      const queryParams = champsRecherche.reduce((result, champ) => {
        if (this[champ]) { result[champ] = this[champ] }
        return result
      }, {})

      this.$router.push({ query: queryParams })
      return queryParams
    },
    where (parameters) {
      return {
        dalle: parameters.dalle,
        taille: parameters.taille ? parseInt(parameters.taille) : undefined,
        format: parameters.format,
        resolution: parameters.resolution ? this.rechercheMinMax(parameters.resolution) : undefined,
        gamut: parameters.gamut,
        contraste: parameters.contraste ? this.rechercheMinMax(parameters.contraste) : undefined,
        luminosite: parameters.luminosite ? this.rechercheMinMax(parameters.luminosite) : undefined
      }
    }
  }
}
</script>
