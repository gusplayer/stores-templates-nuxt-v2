<template>
  <div
    class="wrapper-item-advertising"
    :style="[settingKAdvertising, settingGeneral]"
  >
    <div class="separador-blog" v-if="!settingKAdvertising.visible"></div>
    <div
      class="advertising-content-background"
      id="BgAdvertising"
      :style="[
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Great Vibes',
        },
        {
          '--font-style-3':
            this.settingGeneral && this.settingGeneral.fount_3
              ? this.settingGeneral.fount_3
              : 'Lora',
        },
      ]"
    >
      <div class="advertising-items">
        <div class="advertising-border">
          <div class="wrapper-img">
            <img
              class="max-w-auto"
              v-lazy="
                idCloudinaryBanner(settingKAdvertising.ur_img_card, 'banner')
              "
              alt="icon"
            />
          </div>
          <div class="advertising-text">
            <span class="tittle">{{ settingKAdvertising.title }}</span>
            <div class="subtittles-items">
              <span class="subtittle">
                {{ settingKAdvertising.description }}
              </span>
            </div>
          </div>
          <button class="content-bttns-shop">
            <a
              :href="`${settingKAdvertising.url_redirect}`"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span class="content-textbutton-shop">
                {{ $t('productdetail_btnComprar') }}
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinaryBanner from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinaryBanner],
  name: 'Ko-advertising',
  props: {
    settingGeneral: Object,
    settingKAdvertising: Object,
  },
  mounted() {
    if (
      this.settingKAdvertising &&
      this.settingKAdvertising['--url_img_background']
    ) {
      this.setBg()
    }
  },
  methods: {
    setBg() {
      if (this.settingKAdvertising) {
        if (!this.mobileCheck()) {
          if (this.settingKAdvertising['--url_img_background']) {
            var imagen = document.getElementById('BgAdvertising')
            imagen.style.backgroundImage = `url(${this.idCloudinaryBanner(
              this.settingKAdvertising['--url_img_background'],
              'banner'
            )})`
          }
        }
      }
    },
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      }
      return window.mobilecheck()
    },
  },
  watch: {
    settingKAdvertising() {
      if (
        this.settingKAdvertising &&
        this.settingKAdvertising['--url_img_background']
      ) {
        this.setBg()
      }
    },
  },
}
</script>
<style scoped>
.wrapper-item-advertising {
  background: var(--background_color_1);
  padding: 40px 0;
  @apply w-full flex flex-col justify-center items-center;
}
.separador-blog {
  padding-top: 100px;
}
.advertising-content-background {
  @apply flex justify-center items-center bg-cover z-auto;
  padding-top: 66px;
  padding-bottom: 66px;
}
.wrapper-img {
  max-width: 160px;
  max-height: 80px;
}
.advertising-items {
  background: var(--background_color_1_card);
  width: 596px;
  height: 449px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  @apply flex justify-center items-center shadow-2xl z-auto;
}
.advertising-border {
  border-color: var(--color_border);
  @apply w-full h-full flex flex-col justify-center items-center border border-opacity-50 z-auto;
}
.content-bttns-shop {
  background: var(--color_background_btn_card);
  border-radius: var(--radius_btn);
  padding: 10px 20px;
  @apply mt-20;
}
.content-bttns-shop:hover {
  background: var(--hover_card);
  transition: all 0.2s ease-out;
}
.content-textbutton-shop {
  color: var(--color_text_btn_card);
  font-size: 13px;
  line-height: 18px;
  font-family: var(--font-style-3) !important;
  @apply uppercase font-semibold;
}
.advertising-text {
  margin-top: 15px;
  text-align: center;
  padding: 2px;
  @apply w-full flex flex-col justify-center items-center;
}
.tittle {
  @apply py-4;
  font-family: var(--font-style-2) !important;
  color: var(--color_text_card);
}
.subtittle {
  font-family: var(--font-style-3) !important;
  color: var(--color_subtext_card);
  @apply text-center;
}
.subtittles-items {
  @apply flex flex-col justify-center items-center pb-4 w-full;
}
@screen sm {
  .advertising-content-background {
    @apply w-9/0 h-full;
  }
  .advertising-items {
    @apply w-8/5;
  }
  .tittle {
    line-height: 44px;
    font-size: 34px;
  }
  .subtittle {
    line-height: 24px;
    font-size: 14px;
  }
}
@screen md {
  .advertising-content-background {
    @apply w-9/5 h-full;
  }
  .advertising-items {
    @apply w-8/5;
  }
  .tittle {
    line-height: 50px;
    font-size: 40px;
  }
  .subtittle {
    line-height: 24px;
    font-size: 18px;
  }
}
@screen lg {
  .advertising-content-background {
    @apply w-9/7 h-full;
  }
  .advertising-items {
    @apply w-6/5;
  }
  .tittle {
    line-height: 60px;
    font-size: 50px;
  }
  .subtittle {
    line-height: 36px;
    font-size: 26px;
  }
}
@screen mlg {
  .advertising-content-background {
    @apply w-9/3 h-full;
  }
  .advertising-items {
    @apply w-5/0;
  }
}
@media (min-width: 1192px) {
  .advertising-content-background {
    width: 1192px;
  }
}
</style>
