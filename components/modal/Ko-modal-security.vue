<template>
  <div
    class="wrapper-security-modal"
    :style="`background: ${
      dataStore.modal && dataStore.modal.colorBg_1
        ? dataStore.modal.colorBg_1
        : 'rgba(5, 5, 5, 0.897)'
    };`"
    v-if="dataStore.modal && dataStore.modal.stateModal == 1 && !stateModalPwd"
  >
    <div
      class="content-security-modal"
      :style="`background: ${
        dataStore.modal && dataStore.modal.colorBg_2
          ? dataStore.modal.colorBg_2
          : 'White'
      };`"
    >
      <img
        v-if="dataStore.modal && dataStore.modal.img"
        :src="dataStore.modal.img"
        alt="img-modal-block"
        :style="`width: ${
          dataStore.modal && dataStore.modal.width_img
            ? dataStore.modal.width_img
            : '120px'
        };
           margin-bottom: ${
             dataStore.modal && dataStore.modal.marginBottomImg
               ? dataStore.modal.marginBottomImg
               : '10px'
           };
          `"
      />
      <p
        :style="`color: ${
          dataStore.modal && dataStore.modal.colorTitle
            ? dataStore.modal.colorTitle
            : 'White'
        };
             font-size: ${
               dataStore.modal && dataStore.modal.fontSizeTitle
                 ? dataStore.modal.fontSizeTitle
                 : '20px'
             };
            font-weight: ${
              dataStore.modal && dataStore.modal.fontWeighTitle
                ? dataStore.modal.fontWeighTitle
                : 'Bold'
            };
            margin-bottom: ${
              dataStore.modal && dataStore.modal.marginBottomTitle
                ? dataStore.modal.marginBottomTitle
                : '15px'
            };            
            `"
      >
        {{ dataStore.modal.title }}
      </p>
      <p
        :style="`color: ${
          dataStore.modal && dataStore.modal.colorDescription
            ? dataStore.modal.colorDescription
            : 'White'
        };
            font-size: ${
              dataStore.modal && dataStore.modal.fontSizeDescription
                ? dataStore.modal.fontSizeDescription
                : '16px'
            };
            font-weight: ${
              dataStore.modal && dataStore.modal.fontWeighDescription
                ? dataStore.modal.fontWeighDescription
                : '400'
            };
            margin-bottom: ${
              dataStore.modal && dataStore.modal.marginBottomDescription
                ? dataStore.modal.marginBottomDescription
                : '20px'
            };
            `"
      >
        {{ dataStore.modal.description }}
      </p>

      <div class="inputBox">
        <input
          name="password"
          type="password"
          v-model="pwd"
          class="input-text"
          :style="`color: ${
            dataStore.modal && dataStore.modal.colorBorder
              ? dataStore.modal.colorBorder
              : 'Black'
          }; border: solid 2px ${
            dataStore.modal && dataStore.modal.colorBorder
              ? dataStore.modal.colorBorder
              : 'Black'
          };`"
          placeholder="Ingresar contraseña"
          id="password"
        />
        <div id="toggle" @click="switchVisibility()">
          <i class="el-icon-view" />
        </div>
      </div>
      <p v-if="stateMgs" class="alert-modal">
        Contraseña incorrecta, intente de nuevo
      </p>
      <button
        class="btn-acceptModal mt-10"
        :style="`color: ${
          dataStore.modal && dataStore.modal.colorTextBtn
            ? dataStore.modal.colorTextBtn
            : 'White'
        }; 
          background-color: ${
            dataStore.modal && dataStore.modal.colorBgBtn
              ? dataStore.modal.colorBgBtn
              : 'Black'
          };          
          `"
        @click="closedModal"
      >
        Ingresar
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataStore: Object,
  },
  data() {
    return {
      pwd: null,
      stateMgs: false,
    }
  },
  computed: {
    stateModalPwd() {
      return this.$store.state.stateModalPwd
    },
  },
  methods: {
    closedModal() {
      if (this.dataStore.modal && this.dataStore.modal.password) {
        if (this.dataStore.modal.password == this.pwd) {
          this.$store.commit('SET_STATE_MODAL_PWD', true)
        } else {
          this.stateMgs = true
        }
      }
    },
    switchVisibility() {
      const password = document.getElementById('password')
      if (password.type === 'password') {
        password.setAttribute('type', 'text')
      } else {
        password.setAttribute('type', 'password')
      }
    },
  },
}
</script>

<style scoped>
.wrapper-security-modal {
  top: 0;
  opacity: 1;
  z-index: 99999;
  width: 100%;
  height: calc(100vh);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(5, 5, 5, 0.897); */
  transition: all 200ms ease-in;
}
.content-security-modal {
  padding: 30px 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: white; */
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 47px 11px rgba(87, 87, 87, 0.4);
  box-shadow: 0px 0px 47px 11px rgba(87, 87, 87, 0.4);
}
.btn-acceptModal {
  width: 100%;
  max-width: 250px;
  border-radius: 5px;
  padding: 8px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.input-text {
  font-size: 14px;
  border-radius: 5px;
  background-color: transparent;
  padding: 8px 14px;
  width: 100%;
}
.input-text::placeholder {
  opacity: 0.7;
}
.input-text:-internal-autofill-selected {
  -webkit-appearance: menulist-button;
  background-color: transparent !important;
  background-image: none !important;
  color: -internal-light-dark-color(black, white) !important;
}
.input-text:focus,
.input-text:active {
  outline: 0;
  border: solid 2px rgba(127, 127, 139, 0.342);
}
.inputBox {
  max-width: 250px;
  width: 100%;
  position: relative;
}
#toggle {
  position: absolute;
  top: 20%;
  right: 10px;
  cursor: pointer;
}
.alert-modal {
  font-size: 14px;
  color: red;
}
@media (max-width: 500px) {
  .content-security-modal {
    max-width: 350px;
  }
}
</style>
