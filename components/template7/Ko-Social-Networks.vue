<template>
  <div class="content-SocialNet">
    <div class="icon-social">
      <div class="icons-networks" v-if="dataStore.tienda.red_facebook != null">
        <a
          target="_blank"
          rel="noreferrer noopener"
          :href="dataStore.tienda.red_facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook"
            class="facebook-icon"
            role="img"
            viewBox="0 0 512 512"
          >
            <path
              fill="#3b5998"
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
            />
          </svg>
        </a>
      </div>
      <div class="icons-networks" v-if="dataStore.tienda.red_twitter != null">
        <a
          target="_blank"
          rel="noreferrer noopener"
          :href="dataStore.tienda.red_twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            class="twitter-icon"
            role="img"
            viewBox="0 0 512 512"
          >
            <path
              fill="#00acee"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            />
          </svg>
        </a>
      </div>
      <div class="icons-networks" v-if="dataStore.tienda.red_instagram != null">
        <a
          target="_blank"
          rel="noreferrer noopener"
          :href="dataStore.tienda.red_instagram"
        >
          <svg
            class="instagram-icon"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 551.034 551.034"
            style="enable-background: new 0 0 551.034 551.034;"
            xml:space="preserve"
          >
            <g>
              <linearGradient
                id="SVGID_1_"
                gradientUnits="userSpaceOnUse"
                x1="275.517"
                y1="4.57"
                x2="275.517"
                y2="549.72"
                gradientTransform="matrix(1 0 0 -1 0 554)"
              >
                <stop offset="0" style="stop-color: #e09b3d;" />
                <stop offset="0.3" style="stop-color: #c74c4d;" />
                <stop offset="0.6" style="stop-color: #c21975;" />
                <stop offset="1" style="stop-color: #7024c4;" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_1_);"
                d="M386.878,0H164.156C73.64,0,0,73.64,0,164.156v222.722   c0,90.516,73.64,164.156,164.156,164.156h222.722c90.516,0,164.156-73.64,164.156-164.156V164.156   C551.033,73.64,477.393,0,386.878,0z M495.6,386.878c0,60.045-48.677,108.722-108.722,108.722H164.156   c-60.045,0-108.722-48.677-108.722-108.722V164.156c0-60.046,48.677-108.722,108.722-108.722h222.722   c60.045,0,108.722,48.676,108.722,108.722L495.6,386.878L495.6,386.878z"
              />

              <linearGradient
                id="SVGID_2_"
                gradientUnits="userSpaceOnUse"
                x1="275.517"
                y1="4.57"
                x2="275.517"
                y2="549.72"
                gradientTransform="matrix(1 0 0 -1 0 554)"
              >
                <stop offset="0" style="stop-color: #e09b3d;" />
                <stop offset="0.3" style="stop-color: #c74c4d;" />
                <stop offset="0.6" style="stop-color: #c21975;" />
                <stop offset="1" style="stop-color: #7024c4;" />
              </linearGradient>
              <path
                style="fill: url(#SVGID_2_);"
                d="M275.517,133C196.933,133,133,196.933,133,275.516s63.933,142.517,142.517,142.517   S418.034,354.1,418.034,275.516S354.101,133,275.517,133z M275.517,362.6c-48.095,0-87.083-38.988-87.083-87.083   s38.989-87.083,87.083-87.083c48.095,0,87.083,38.988,87.083,87.083C362.6,323.611,323.611,362.6,275.517,362.6z"
              />

              <linearGradient
                id="SVGID_3_"
                gradientUnits="userSpaceOnUse"
                x1="418.31"
                y1="4.57"
                x2="418.31"
                y2="549.72"
                gradientTransform="matrix(1 0 0 -1 0 554)"
              >
                <stop offset="0" style="stop-color: #e09b3d;" />
                <stop offset="0.3" style="stop-color: #c74c4d;" />
                <stop offset="0.6" style="stop-color: #c21975;" />
                <stop offset="1" style="stop-color: #7024c4;" />
              </linearGradient>
              <circle
                style="fill: url(#SVGID_3_);"
                cx="418.31"
                cy="134.07"
                r="34.15"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </a>
      </div>
      <div class="icons-networks" v-if="dataStore.tienda.red_youtube != null">
        <a
          target="_blank"
          rel="noreferrer noopener"
          :href="dataStore.tienda.red_youtube"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="youtube"
            class="youtube-icon"
            role="img"
            viewBox="0 0 576 512"
          >
            <path
              fill="#c4302b"
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  data() {
    return {}
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
  },
}
</script>
<style scoped>
.content-SocialNet {
  @apply w-full flex flex-row justify-center items-center mt-8;
}
.icon-social {
  @apply w-auto flex flex-wrap justify-center items-center;
}
.icons-networks {
  @apply mx-4;
}
.facebook-icon,
.twitter-icon,
.instagram-icon,
.youtube-icon {
  width: 22px;
  height: 22px;
  cursor: pointer;
}
</style>
