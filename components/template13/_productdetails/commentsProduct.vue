<template>
  <div class="wrapper-commentsProduct">
    <div class="content-commentsProduct">
      <div class="wrapper-form">
        <p class="title-comments">Preguntas y respuestas</p>
        <ValidationObserver
          ref="observer"
          tag="form"
          class="content-items-form"
        >
          <P>Escribe una pregunta</P>
          <validation-provider name="comentario" rules="required">
            <template slot-scope="{ errors }">
              <textarea
                class="input-text-rectangule"
                name="comentario"
                placeholder="Escribe aquí tu mensaje"
                v-model="comment"
              ></textarea>
              <span class="text-error" v-show="errors[0]">{{ errors[0] }}</span>
            </template>
          </validation-provider>
          <div class="content-input-form">
            <div>
              <p>Cédula</p>
              <validation-provider name="cedula" rules="required|numeric">
                <template slot-scope="{ errors }">
                  <input
                    name="cedula"
                    type="text"
                    v-model="cedula"
                    class="input-text"
                    placeholder="Escribe tu cédula"
                    id="ContactName"
                  />
                  <span class="text-error" v-show="errors[0]">{{
                    errors[0]
                  }}</span>
                </template>
              </validation-provider>
            </div>
            <div>
              <P>E-Mail</P>
              <validation-provider name="email" rules="required|email">
                <template slot-scope="{ errors }">
                  <input
                    name="email"
                    type="email"
                    v-model="email"
                    placeholder="Escribe tu correo"
                    class="input-text"
                    id="ContactEmail"
                  />
                  <span class="text-error" v-show="errors[0]">{{
                    errors[0]
                  }}</span>
                </template>
              </validation-provider>
            </div>
            <div class="content-btn">
              <button class="btn" v-on:click.prevent="submitComments">
                Preguntar
              </button>
            </div>
          </div>
        </ValidationObserver>
      </div>
      <div class="wrapper-answers">
        <div class="content-answers" v-if="!estado">
          <p
            class="title-answers"
            style="font-weight: bold; margin-bottom: 10px"
          >
            Últimas preguntas
          </p>
          <div>
            <p class="text-question">
              <Message-question-icon class="icon" />Pregunta
            </p>
            <p class="text-answer">
              <Message-answer-icon class="icon" />Respuesta
              <em class="text-answer-date">22/8/2020 15:27</em>
            </p>
          </div>
        </div>
        <div class="answers-empty" v-else>
          <p class="title-answers">
            Nadie hizo preguntas todavía. <strong>¡Sé el primero!</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'commentsProduct13',
  props: {
    dataStore: Object,
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      cedula: '',
      email: '',
      comment: '',
      estado: false,
    }
  },
  methods: {
    submitComments() {
      this.$refs.observer
        .validate()
        .then((response) => {
          if (response) {
            this.$message.success('Comentario enviado!')
          }
        })
        .catch((e) => {
          this.$message.error('error')
        })
    },
  },
}
</script>

<style scoped>
.wrapper-commentsProduct {
  width: 100%;
  padding-top: 10px;
  background: #efefef;
}
.content-commentsProduct {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 25px 20px 0px;
}
.wrapper-form {
  width: 100%;
}
.title-comments {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  color: rgba(21, 20, 57, 0.541);
  margin-bottom: 10px;
}
.content-items-form {
  border-radius: 10px;
  /* background-color: rgba(230, 230, 230, 0.849); */
  padding: 10px 10px 10px;
}
.content-items-form p {
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  color: rgba(21, 20, 57, 0.541);
  margin: 10px;
  margin-left: 0px;
  height: 19px;
}
.content-input-form {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 104px;
}
.content-input-form > div {
  width: 100%;
  flex: 1;
}
.content-input-form > div:nth-child(1) {
  margin-right: 30px;
}
.input-text {
  font-size: 14px;
  color: rgba(21, 20, 57, 0.541);
  border: solid 2px #afafaf;
  border-radius: var(--radius_btn);
  background-color: transparent;
  padding: 8px 14px;
  width: 100%;
  height: 41px;
}
.input-text::placeholder {
  color: rgba(21, 20, 57, 0.541);
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
.input-text-rectangule {
  font-size: 14px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: rgba(21, 20, 57, 0.541);
  border: solid 2px #afafaf;
  border-radius: var(--radius_btn);
  background-color: transparent;
  padding: 4px 14px;
  width: 100%;
  resize: none;
  overflow-y: auto;
  max-height: 80px;
  min-height: 80px;
}
.input-text-rectangule::placeholder {
  color: rgba(21, 20, 57, 0.541);
  opacity: 0.7;
}
.input-text-rectangule:focus,
.input-text-rectangule:active {
  outline: 0;
  border: solid 2px rgba(19, 19, 19, 0.342);
}
.input-text-rectangule::-webkit-scrollbar {
  background: transparent;
  width: 5px;
}
.input-text-rectangule::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px transparent;
  border-radius: 5px;
}
.input-text-rectangule::-webkit-scrollbar-thumb {
  background: rgb(59, 59, 59);
}
.input-text-rectangule::-webkit-scrollbar-thumb:hover {
  background: rgb(138, 138, 138);
}
.text-error {
  font-size: 12px;
  color: #cb2027;
  width: 100%;
  margin-left: 10px;
}
.content-btn {
  flex: 1;
  margin-left: 20px;
}
.btn {
  color: white;
  border-radius: var(--radius_btn);
  border: solid 2px black;
  background-color: black;
  padding: 8px 14px;
  font-size: 16px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
  height: 41px;
  margin-top: 15px;
}
.btn:hover {
  color: white;
  border: solid 2px var(--btnhover);
  background-color: var(--btnhover);
}
.wrapper-answers {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-answers {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title-answers {
  font-size: 16px;
  line-height: 1.2;
  color: rgba(21, 20, 57, 0.541);
}
.answers-empty {
  margin-top: 10px;
}
.text-question {
  font-size: 16px;
  color: rgba(9, 8, 22, 0.692);
}
.text-answer {
  font-size: 16px;
  color: rgba(61, 60, 77, 0.541);
}
.text-answer-date {
  font-size: 14px;
  margin-left: 5px;
  color: rgba(61, 60, 77, 0.541);
}
.icon {
  margin-right: 10px;
  color: rgba(9, 8, 22, 0.692);
}
@media (max-width: 725px) {
  .wrapper-commentsProduct {
    padding-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
  }
}
@media (max-width: 630px) {
  .content-input-form {
    flex-direction: column;
    height: 100%;
  }
  .content-btn {
    flex: 1;
    margin-left: 0px;
  }
}
</style>
