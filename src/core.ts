import { InjectionKey } from "vue";
import slugify from "slugify";

import markdown from "./transformers/markdown";
import { MarkdownOptions, ParsedContent } from "./types";

slugify.extend({"/": "-"});

export interface VueContentOptions
{
    markdown?: Partial<MarkdownOptions>;
}

export class VueContent
{
    public static GetDefaultOptions(): Required<VueContentOptions>
    {
        return ({ markdown: { } });
    }

    protected _options: Required<VueContentOptions>;

    public constructor(options: VueContentOptions = { })
    {
        this._options = { ...VueContent.GetDefaultOptions(), ...options };
    }

    public async fetch(...path: string[]): Promise<ParsedContent>
    {
        const filename = path.join("/");
        const filepath = `/content/${filename}.md`;
        const mdFile = await fetch(filepath).then((response) =>
        {
            if (response.ok)
            {
                return response.text();
            }

            throw new Error(`Could not fetch "${filepath}" content file.`);
        });

        const content = mdFile;

        return markdown.parse(slugify(filename), content, this._options.markdown);
    }
}

export const injectionKeys = { content: Symbol("[vue-content]: content") as InjectionKey<VueContent> };
