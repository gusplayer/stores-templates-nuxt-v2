<template>
  <div class="modal-content">
    <div class="modal-header">
      <nuxt-link to="/termsandconditions" class="txt-Legal">
        {{ $t('footer_condicionesLegales') }}
      </nuxt-link>
      <span class="close" @click="closeModalPolitics">&times;</span>
    </div>
    <div class="content-items-modal">
      <button
        class="content-modal accordion"
        v-if="this.dataStore.politicas.datos"
      >
        {{ $t('footer_politicaTratamientos') }}
      </button>
      <div
        class="panel"
        v-html="this.dataStore.politicas.datos"
        v-if="this.dataStore.politicas.datos"
      ></div>
      <button
        class="content-modal accordion"
        v-if="this.dataStore.politicas.garantia"
      >
        {{ $t('footer_politicaGarantia') }}
      </button>
      <div
        class="panel"
        v-html="this.dataStore.politicas.garantia"
        v-if="this.dataStore.politicas.garantia"
      ></div>
      <button
        class="content-modal accordion"
        v-if="this.dataStore.politicas.devolucion"
      >
        {{ $t('footer_politicaDevoluciones') }}
      </button>
      <div
        class="panel"
        v-html="this.dataStore.politicas.devolucion"
        v-if="this.dataStore.politicas.devolucion"
      ></div>
      <button
        class="content-modal accordion"
        v-if="this.dataStore.politicas.cambio"
      >
        {{ $t('footer_politicaCambio') }}
      </button>
      <div
        class="panel"
        v-html="this.dataStore.politicas.cambio"
        v-if="this.dataStore.politicas.cambio"
      ></div>
      <button
        class="content-modal accordion"
        v-if="this.dataStore.politicas.envios"
      >
        {{ $t('footer_politicaEnvios') }}
      </button>
      <div
        class="panel"
        v-html="this.dataStore.politicas.envios"
        v-if="this.dataStore.politicas.envios"
      ></div>

      <button
        class="content-modal accordion"
        v-if="this.dataStore.politicas.pagos"
      >
        {{ $t('footer_politicaPagos') }}
      </button>
      <div
        class="panel"
        v-html="this.dataStore.politicas.pagos"
        v-if="this.dataStore.politicas.pagos"
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
  name: 'Terms-and-Conditions',
  props: {
    dataStore: Object,
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
