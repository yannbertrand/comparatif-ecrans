<template>
  <main>
    <section id="recherche" class="sticky top-0 p-6 flex w-screen">
      <label id="dalle" class="flex-auto">
        Dalle
        <select v-model="dalle" @change="$fetch">
          <option value=""></option>
          <option value="IPS">IPS</option>
          <option value="VA">VA</option>
          <option value="OLED">OLED</option>
        </select>
      </label>
      <label id="taille" class="flex-auto">
        Taille
        <select v-model="taille" @change="$fetch">
          <option value=""></option>
          <option value="24">24</option>
          <option value="27">27</option>
          <option value="32">32</option>
        </select>
      </label>
      <label id="format" class="flex-auto">
        Format
        <select v-model="format" @change="$fetch">
          <option value="" />
          <option value="16/9">16/9</option>
          <option value="16/10">16/10</option>
          <option value="21/9">21/9</option>
          <option value="32/9">32/9</option>
        </select>
      </label>
      <label id="resolution" class="flex-auto">
        Resolution
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
        Gamut de couleurs
        <select v-model="gamut" @change="$fetch">
          <option value="" />
          <option value="DCI-P3">DCI-P3</option>
          <option value="sRGB">sRGB</option>
        </select>
      </label>
      <label id="contraste" class="flex-auto">
        Contraste
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
        Luminosité
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

    <section id="liste" class="mx-auto px-4 flex justify-evenly w-screen text-center">
      <article v-for="ecran in ecrans" :key="ecran.slug">
        <h2 class="text-lg font-black">{{ ecran.marque }} {{ ecran.nom.commercial }}</h2>
        <p>{{ ecran.prix }}€</p>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  async fetch () {
    const dalle = this.dalle || undefined
    const taille = parseInt(this.taille) || undefined
    const format = this.format || undefined
    const resolution = this.rechercheMinMax(this.resolution) || undefined
    const gamut = this.gamut || undefined
    const contraste = this.rechercheMinMax(this.contraste) || undefined
    const luminosite = this.rechercheMinMax(this.luminosite) || undefined

    let requete = this.$content('ecrans')
    requete = requete.where({
      dalle,
      taille,
      format,
      resolution,
      gamut,
      contraste,
      luminosite
    })

    this.ecrans = await requete.fetch()
  },
  data () {
    return {
      ecrans: [],
      dalle: '',
      taille: '',
      format: '',
      resolution: '',
      gamut: '',
      contraste: '',
      luminosite: ''
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
    }
  }
}
</script>
