<template>
  <div class="upload">
    <h4 class="title-input">{{label}}</h4>
    <button
      @click="uploadImagen()"
      :class="textButton == 'Cargar Imagen'?'button-upload':'button-upload-line'"
    >{{textButton}}</button>
  </div>
</template>

<script>
export default {
  props: ['label'],
  data() {
    return {
      myUploadWidget: null,
      idtienda: 0
    }
  },
  computed: {
    cloudinaryWidgetOptions() {
      return {
        cloud_name: 'komercia-components',
        upload_preset: 'tszivzzr',
        language: 'es',
        text: {
          es: {
            facebook: {
              main_title: 'Facebook',
              no_photos: 'No hay fotos...',
              no_auth_title: 'Subir imagenes de mi cuenta de facebook',
              no_auth_action: 'Conectar con Facebook',
              no_auth_statement: 'No publicaremos nada sin tu permiso',
              album_subtitle: '{{count}} fotos',
              menu: {
                uploaded: 'Fotos',
                tagged: 'Tus Fotos',
                albums: 'Àlbumes'
              }
            },
            menu: {
              files: 'Mi equipo',
              web: 'URL web',
              camera: 'Camera',
              gsearch: 'Google',
              gdrive: 'Google Photos',
              dropbox: 'Dropbox',
              facebook: 'Facebook',
              instagram: 'Instagram'
            },
            actions: {
              upload: 'Upload',
              clear_all: 'Clear all',
              log_out: 'Log out'
            },
            notifications: {
              general_error: 'Un error ha ocurrido',
              general_prompt: 'Estas seguro?',
              limit_reached: 'No more files can be selected',
              invalid_add_url: 'Ingresa una URL válida',
              invalid_public_id: 'Public ID cannot contain \\,?,&,#,%,<,>',
              no_new_files: 'Las imagenes ha sido cargadas'
            },
            image_search: {
              main_title: 'Buscar imágenes en Google',
              inputPlaceholder: 'Escribe que imagen quieres buscar',
              customPlaceholder: 'Buscar {{site}}',
              filters_title: 'site',
              rights: 'Usage rights',
              rights_options: {
                not_filtered: 'not filtered by license',
                free: 'free to use or share',
                free_com: 'free to use or share, even commercially',
                free_mod: 'free to use share or modify',
                free_mod_com: 'free to use, share or modify, even commercially'
              },
              search_error: 'Search failed, please try again.'
            },
            instagram: {
              main_title: 'Instagram',
              no_auth_title: 'Utilizar imagenes de tu cuenta de instagram',
              no_auth_action: 'Connectar con Instagram',
              header_title: 'Tus fotos recientes de Instagram',
              authenticating: 'Autenticando...'
            },
            local: {
              main_title: 'Subir imagenes de mi equipo'
            },
            selection_counter: {
              selected: 'seleccionado'
            },
            actions: {
              upload: 'Subir Imagen',
              clear_all: 'Limpiar Todo',
              log_out: 'Cerrar sesión'
            }
          }
        },
        multiple: false,
        max_file_size: 4500000,
        cropping_default_selection_ratio: 0.9,
        folder: 'user_photos',
        cropping: 'server',
        cropping_show_dimensions: true,
        cropping_show_back_button: true,
        defaultSource: 'local',
        sources: ['local', 'url', 'image_search', 'facebook', 'instagram'],
        google_api_key: 'AIzaSyCHRRTM9jAyT3N4RMZGSGZn5H5QeaWbb3M',
        folder: `${this.idtienda}/images`,
        show_powered_by: false,
        keep_widget_open: true,
        styles: {
          palette: {
            window: '#FFFFFF',
            windowBorder: '#90A0B3',
            tabIcon: '#4429b4',
            menuIcons: '#5A616A',
            textDark: '#2c3e50',
            textLight: '#FFFFFF',
            link: '#4429b4',
            action: '#4429b4',
            inactiveTabIcon: '#0E2F5A',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#E4EBF1'
          }
          // fonts: {
          //   default: null,
          //   "'Fira Sans', sans-serif": {
          //     url: "https://fonts.googleapis.com/css?family=Fira+Sans",
          //     active: true
          //   }
          // }
        }
      }
    },
    textButton() {
      if (this.$store.state.currentSettingsBanner.slides.length == 0) {
        return 'Cargar Imagen'
      } else if (this.$store.state.currentSettingsBanner.slides.length <= 3) {
        return 'Agregar Imagen'
      }
    }
  },
  methods: {
    // handleRemove(file) {
    //   console.log(file);
    // },
    // handlePreview(file) {
    //   console.log(file);
    // },
    uploadImagen() {
      this.myUploadWidget = cloudinary.createUploadWidget(
        this.cloudinaryWidgetOptions,
        (error, result) => {
          if (!error && result && result.event === 'success') {
            this.$emit('upload', result.info)
            console.log('Done! Here is the image info: ', result.info)
          }
        }
      )
      this.myUploadWidget.open()
      setTimeout(() => {
        this.loadingSavePhotoMain = false
      }, 7000)
    }
    // afterUpload(error, result, type) {
    //   if (result.event === "success") {
    //     this.$emit("upload", { payload: result.info, type });
    //     this.myUploadWidget.close();
    //   }
    // },
  }
}
</script>

<style scoped>
.upload {
  width: 100%;
  margin-top: 10px;
}
.title-input {
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 26px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-left: 5px;
}
.button-upload {
  background-color: var(--purple);
  color: #fff;
  border: 0;
  padding: 13px 28px;
  border-radius: 100px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  transition: all ease 0.3s;
}
.button-upload:hover {
  background-color: #7e62ee;
}
.button-upload:focus {
  outline: 0;
}
.button-upload-line {
  background-color: #fff;
  color: var(--purple);
  border: 0;
  padding: 13px 28px;
  border: 2px solid var(--purple);
  border-radius: 100px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  -webkit-transition: all ease 0.3s;
  transition: all ease 0.3s;
}
.button-upload-line:hover {
  background-color: #e1dafd;
}
.button-upload-line:focus {
  outline: 0;
}
</style>
