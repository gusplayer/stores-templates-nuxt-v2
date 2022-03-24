<template lang="html">
  <div class="content-wa" id="width">
    <component :is="indexTemplate" />
    <WCountry :dataStore="dataStore" :valueWa="true" />
  </div>
</template>

<script>
import WaTemplate1 from '../../template99/templates/template1/index'
import WaTemplate2 from '../../template99/templates/template2/index'
import WaTemplate3 from '../../template99/templates/template3/index'
import WCountry from '../../../components/footers/footer1/Ko-Footer-Country.vue'

export default {
  name: 'WapiME',
  layout: 'wa',
  components: { WaTemplate1, WaTemplate2, WaTemplate3, WCountry },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    indexTemplate() {
      let componentTemplate = ''
      if (this.settingByTemplate && this.settingByTemplate.tema) {
        switch (this.settingByTemplate.tema) {
          case 1:
            componentTemplate = 'WaTemplate1'
            break
          case 2:
            componentTemplate = 'WaTemplate2'
            break
          case 3:
            componentTemplate = 'WaTemplate3'
            break
        }
      } else {
        return (componentTemplate = 'WaTemplate1')
      }
      return componentTemplate
    },
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width')
      widthOutput.style.width = window.innerWidth + 'px'
    },
  },
}
</script>

<style scoped>
.content-wa {
  @apply w-full flex flex-col justify-center items-center;
}
/* @media (max-width: 800px) {
  .content-wa {
    max-width: 800px;
  }
}
@media (max-width: 770px) {
  .content-wa {
    max-width: 770px;
  }
}
@media (max-width: 768px) {
  .content-wa {
    max-width: 768px;
  }
}
@media (max-width: 750px) {
  .content-wa {
    max-width: 750px;
  }
}
@media (max-width: 700px) {
  .content-wa {
    max-width: 700px;
  }
}
@media (max-width: 600px) {
  .content-wa {
    max-width: 600px;
  }
}
@media (max-width: 500px) {
  .content-wa {
    max-width: 500px;
  }
}
@media (max-width: 450px) {
  .content-wa {
    max-width: 450px;
  }
}
@media (max-width: 400px) {
  .content-wa {
    max-width: 400px;
  }
}
@media (max-width: 395px) {
  .content-wa {
    max-width: 395px;
  }
}
@media (max-width: 390px) {
  .content-wa {
    max-width: 390px;
  }
}
@media (max-width: 385px) {
  .content-wa {
    max-width: 385px;
  }
}
@media (max-width: 380px) {
  .content-wa {
    max-width: 380px;
  }
}
@media (max-width: 375px) {
  .content-wa {
    max-width: 375px;
  }
}
@media (max-width: 370px) {
  .content-wa {
    max-width: 370px;
  }
}
@media (max-width: 365px) {
  .content-wa {
    max-width: 365px;
  }
}
@media (max-width: 360px) {
  .content-wa {
    max-width: 360px;
  }
}
@media (max-width: 355px) {
  .content-wa {
    max-width: 355px;
  }
}
@media (max-width: 350px) {
  .content-wa {
    max-width: 350px;
  }
}
@media (max-width: 345px) {
  .content-wa {
    max-width: 345px;
  }
}
@media (max-width: 340px) {
  .content-wa {
    max-width: 340px;
  }
}
@media (max-width: 335px) {
  .content-wa {
    max-width: 335px;
  }
}
@media (max-width: 330px) {
  .content-wa {
    max-width: 330px;
  }
}
@media (max-width: 325px) {
  .content-wa {
    max-width: 325px;
  }
}
@media (max-width: 320px) {
  .content-wa {
    max-width: 320px;
  }
}
@media (max-width: 310px) {
  .content-wa {
    max-width: 310px;
  }
} */
</style>
