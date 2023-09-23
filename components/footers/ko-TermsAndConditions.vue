<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="modal-content">
    <div class="modal-header">
      <nuxt-link to="/termsandconditions" class="txt-Legal">
        {{ $t('footer_condicionesLegales') }}
      </nuxt-link>
      <span class="close" @click="closeModalPolitics">&times;</span>
    </div>
    <div class="content-items-modal">
      <button v-if="dataStore.politicas.datos" class="content-modal accordion">
        {{ $t('footer_politicaTratamientos') }}
      </button>
      <div
        v-if="
          dataStore.politicas.datos && isSafeHTML(dataStore.politicas.datos)
        "
        class="panel"
        v-html="dataStore.politicas.datos"
      ></div>
      <button
        v-if="dataStore.politicas.garantia"
        class="content-modal accordion"
      >
        {{ $t('footer_politicaGarantia') }}
      </button>

      <div
        v-if="
          dataStore.politicas.garantia &&
          isSafeHTML(dataStore.politicas.garantia)
        "
        class="panel"
        v-html="dataStore.politicas.garantia"
      ></div>
      <button
        v-if="dataStore.politicas.devolucion"
        class="content-modal accordion"
      >
        {{ $t('footer_politicaDevoluciones') }}
      </button>
      <div
        v-if="
          dataStore.politicas.devolucion &&
          isSafeHTML(dataStore.politicas.devolucion)
        "
        class="panel"
        v-html="dataStore.politicas.devolucion"
      ></div>
      <button v-if="dataStore.politicas.cambio" class="content-modal accordion">
        {{ $t('footer_politicaCambio') }}
      </button>
      <div
        v-if="
          dataStore.politicas.cambio && isSafeHTML(dataStore.politicas.cambio)
        "
        class="panel"
        v-html="dataStore.politicas.cambio"
      ></div>
      <button v-if="dataStore.politicas.envios" class="content-modal accordion">
        {{ $t('footer_politicaEnvios') }}
      </button>
      <div
        v-if="
          dataStore.politicas.envios && isSafeHTML(dataStore.politicas.envios)
        "
        class="panel"
        v-html="dataStore.politicas.envios"
      ></div>
      <button v-if="dataStore.politicas.pagos" class="content-modal accordion">
        {{ $t('footer_politicaPagos') }}
      </button>
      <div
        v-if="
          dataStore.politicas.pagos && isSafeHTML(dataStore.politicas.pagos)
        "
        class="panel"
        v-html="dataStore.politicas.pagos"
      ></div>
    </div>
    <div class="px-10 py-4" style="background-color: #222">
      <button @click="goRouter" class="txt-Legal">
        🔗 {{ $t('footer_irPagina') }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KoTermsAndConditions',
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    var acc = document.getElementsByClassName('accordion')
    var i
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
          panel.style.marginTop = '0px'
          panel.style.marginBottom = '0px'
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
          panel.style.marginTop = '20px'
          panel.style.marginBottom = '20px'
        }
      })
    }
  },
  methods: {
    isSafeHTML(htmlContent) {
      // Lista de etiquetas y atributos potencialmente peligrosos
      const unsafeTags = ['script', 'iframe']
      const unsafeAttributes = ['onclick', 'onload', 'onerror', 'src']

      // Verificar si el contenido HTML contiene etiquetas o atributos peligrosos
      const containsUnsafeTags = unsafeTags.some((tag) =>
        htmlContent.includes(`<${tag}`)
      )
      const containsUnsafeAttributes = unsafeAttributes.some((attr) =>
        htmlContent.includes(` ${attr}=`)
      )

      // Si se encuentra contenido peligroso, considerarlo inseguro
      return !(containsUnsafeTags || containsUnsafeAttributes)
    },
    closeModalPolitics() {
      this.$store.state.modalpolitics05 = false
    },
    goRouter() {
      this.$router.push({
        path: '/termsandconditions',
      })
      this.closeModalPolitics()
    },
  },
}
</script>
<style scoped>
.accordion {
  color: #222;
  background-color: #eee;
  transition: 0.4s;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply w-full text-left mb-0 border-none outline-none cursor-pointer border;
}
.active,
.accordion:hover {
  background-color: #ccc;
}
.accordion:after {
  content: '\276F';
  color: #222;
  @apply transition-all ease-in duration-0.2 font-semibold float-right;
}
.active:after {
  transform: rotate(90deg);
  @apply transition-all ease-in duration-0.2;
}
.panel {
  background-color: #fff;
  transition: 0.4s ease-out;
  @apply w-full max-h-0 justify-start items-center overflow-hidden px-40;
}

/* Modal Content */
.modal-content {
  max-height: 600px;
  background-color: #fefefe;
  border: 1px solid #888;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
  @apply relative m-auto p-0 overflow-y-auto;
}

.modal-content::-webkit-scrollbar {
  @apply w-5;
}
.modal-content::-webkit-scrollbar-thumb {
  background: #a3a3a3;
  border-radius: 4px;
}
.modal-content::-webkit-scrollbar-thumb:active {
  background-color: #777777;
}
.modal-content::-webkit-scrollbar-thumb:hover {
  background: #686868;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.401);
}
/* Add Animation */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
/* The Close Button */
.close {
  color: #fff;
  font-size: 28px;
  @apply float-right font-semibold;
}
.close:hover,
.close:focus {
  color: #ccc;
  text-decoration: none;
  @apply cursor-pointer;
}

.modal-header {
  background-color: #222;
  color: white;
  @apply w-full flex justify-between items-center py-10 px-20 sticky top-0;
}

.content-items-modal {
  @apply w-full flex flex-col justify-center items-center;
}
.txt-Legal {
  font-size: 16px;
  color: #fff;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply font-semibold;
}
.content-modal {
  color: #222;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply font-semibold py-10 sticky top-62;
}
@screen sm {
  .modal-content {
    @apply w-full;
  }
  .content-modal {
    font-size: 14px;
    @apply px-20;
  }
}
@screen md {
  .modal-content {
    @apply w-7/0;
  }
  .content-modal {
    font-size: 15px;
    @apply px-30;
  }
}
@media (min-width: 1400px) {
  .modal-content {
    @apply w-5/0;
  }
}
</style>
