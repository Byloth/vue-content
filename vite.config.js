const PATH = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    lib: {
      entry: PATH.resolve(__dirname, "src/index.ts"),
      name: "VueContent"
    },
    rollupOptions: {
      external: [
        "defu",
        "destr",
        "detab",
        "flat",
        "html-tags",
        "js-yaml",
        "mdast-util-to-hast",
        "mdast-util-to-markdown",
        "mdurl",
        "micromark-core-commonmark",
        "micromark-factory-space",
        "micromark-factory-whitespace",
        "micromark-util-character",
        "parse-entities",
        "rehype-external-links",
        "rehype-raw",
        "rehype-slug",
        "rehype-sort-attribute-values",
        "rehype-sort-attributes",
        "remark-gfm",
        "remark-parse",
        "remark-rehype",
        "remark-squeeze-paragraphs",
        "scule",
        "slugify",
        "stringify-entities",
        "unified",
        "unist-builder",
        "unist-util-position",
        "unist-util-visit",
        "vue"
      ],
      output: {
        exports: "named",
        globals: {
          "defu": "Defu",
          "destr": "Destr",
          "detab": "Detab",
          "flat": "Flat",
          "html-tags": "HtmlTags",
          "js-yaml": "JsYaml",
          "mdast-util-to-hast": "MdastUtilToHast",
          "mdast-util-to-markdown": "MdastUtilToMarkdown",
          "mdurl": "MdUrl",
          "micromark-core-commonmark": "MicromarkCoreCommonmark",
          "micromark-factory-space": "MicromarkFactorySpace",
          "micromark-factory-whitespace": "MicromarkFactoryWhitespace",
          "micromark-util-character": "MicromarkUtilCharacter",
          "parse-entities": "ParseEntities",
          "rehype-external-links": "RehypeExternalLinks",
          "rehype-raw": "RehypeRaw",
          "rehype-slug": "RehypeSlug",
          "rehype-sort-attribute-values": "RehypeSortAttributeValues",
          "rehype-sort-attributes": "RehypeSortAttributes",
          "remark-gfm": "RemarkGfm",
          "remark-parse": "RemarkParse",
          "remark-rehype": "RemarkRehype",
          "remark-squeeze-paragraphs": "RemarkSqueezeParagraphs",
          "scule": "Scule",
          "slugify": "Slugify",
          "stringify-entities": "StringifyEntities",
          "unified": "Unified",
          "unist-builder": "UnistBuilder",
          "unist-util-position": "UnistUtilPosition",
          "unist-util-visit": "UnistUtilVisit",
          "vue": "Vue"
        }
      }
    },
    sourcemap: true
  },
  resolve: { alias: { "@": PATH.resolve(__dirname, "src") } }
});
