import Vue from "vue";

declare module "vue" {
    import { VueContent } from ".";
    import ContentRenderer from "../components/ContentRenderer";

    interface ComponentCustomProperties
    {
        $content: VueContent;
    }
    interface GlobalComponents
    {
        ContentRenderer: ContentRenderer;
    }
}
