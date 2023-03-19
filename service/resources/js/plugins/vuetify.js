import {createVuetify} from "vuetify/dist/vuetify";
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    directives,
    components,
    icons: {
        iconfont: 'mdi'
    }
})

export default vuetify;
