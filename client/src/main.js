import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import ImageUploader from 'vue-image-upload-resize'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

library.add(faEllipsisV, faUser, faSignOutAlt, faPlus, faImage, faEdit, faTrashAlt, faTrash)

Vue.use(BootstrapVue)
Vue.use(ImageUploader);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
