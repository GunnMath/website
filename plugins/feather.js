import { InstagramIcon, MailIcon } from 'vue-feather-icons'

export default defineNuxtPlugin((nuxtApp) => {
    console.log("omg")
  nuxtApp.vueApp.component(InstagramIcon);
  nuxtApp.vueApp.component(MailIcon)
})
