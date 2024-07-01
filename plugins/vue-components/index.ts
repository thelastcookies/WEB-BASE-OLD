import type { PluginOption } from "vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export const VueComponentPluginConfig = Components({
    include: [
        /\.tsx?$/, // .ts, .tsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /FormComponent.vue/,
    ],
    dirs: [
        'src/components',
        'src/views/**/components',
        'src/views/form/lib/configs',
    ],
    dts: './plugins/vue-components/components.d.ts',
    resolvers: [
        AntDesignVueResolver({
            importStyle: false,
        }),
    ],
}) as PluginOption;