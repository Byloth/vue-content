import { inject, App, Plugin } from "vue";

import ContentRenderer from "./components/ContentRenderer";
import { injectionKeys, VueContent, VueContentOptions } from "./core";

const vueContent: Plugin = {
    install(app: App, options?: VueContentOptions)
    {
        const $content = new VueContent(options);

        app.config.globalProperties.$content = $content;
        app.component("ContentRenderer", ContentRenderer);
        app.provide(injectionKeys.content, $content);
    }
};

export const useContent = (): VueContent =>
{
    const $content = inject(injectionKeys.content);

    if (!$content)
    {
        throw new Error("`useContent` was called with no active instance. Did you forget to install VueContent?");
    }

    return $content;
};

export default vueContent;
export { injectionKeys, VueContent };
export type { VueContentOptions };
