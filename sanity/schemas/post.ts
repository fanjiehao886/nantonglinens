import { defineType, defineField, defineArrayMember } from "sanity";

// Blog post / buying guide schema
export default defineType({
  name: "post",
  title: "Blog Post / Guide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / Meta Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(160).required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "image", options: { hotspot: true } }),
        defineArrayMember({
          type: "object",
          name: "callout",
          fields: [
            defineField({ name: "content", title: "Content", type: "array", of: [defineArrayMember({ type: "block" })] }),
            defineField({ name: "type", title: "Type", type: "string", options: { list: ["info", "warning", "tip"] } }),
          ],
        }),
        // Comparison tables. Buyer-decision content lives or dies on side-by-side
        // product specs, so this needs to be a first-class block type rather than
        // being flattened into prose.
        defineArrayMember({
          type: "object",
          name: "table",
          title: "Comparison table",
          fields: [
            defineField({ name: "caption", title: "Caption", type: "string" }),
            defineField({
              name: "headers",
              title: "Header cells",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "rows",
              title: "Rows",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "row",
                  fields: [
                    defineField({
                      name: "cells",
                      title: "Cells (same order as headers)",
                      type: "array",
                      of: [defineArrayMember({ type: "string" })],
                    }),
                  ],
                  preview: {
                    select: { cells: "cells" },
                    prepare({ cells }: { cells?: string[] }) {
                      return { title: (cells ?? []).join("  |  ") || "Row" };
                    },
                  },
                }),
              ],
            }),
          ],
          preview: {
            select: { headers: "headers", rows: "rows" },
            prepare({ headers, rows }: { headers?: string[]; rows?: unknown[] }) {
              return {
                title: (headers ?? []).join("  |  ") || "Table",
                subtitle: `${(rows ?? []).length} rows`,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
  ],
});

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
