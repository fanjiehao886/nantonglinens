import { defineType, defineField, defineArrayMember } from "sanity";

// Product schema for hotel linen catalog
export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Bed Sheets",
          "Pillowcases",
          "Duvet Covers",
          "Mattress Toppers",
          "Bath Towels",
          "Bath Mats",
          "Bathrobes",
          "Table Linen",
          "Pool & Beach Towels",
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        defineArrayMember({
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
      ],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "object",
      fields: [
        defineField({ name: "material", title: "Material", type: "string" }),
        defineField({ name: "threadCount", title: "Thread Count", type: "number" }),
        defineField({ name: "gsm", title: "GSM (g/m²)", type: "number" }),
        defineField({ name: "sizes", title: "Available Sizes", type: "string" }),
        defineField({ name: "colors", title: "Available Colors", type: "string" }),
      ],
    }),
    defineField({
      name: "moq",
      title: "Minimum Order Quantity",
      type: "number",
      description: "MOQ in pieces per size/color",
    }),
    defineField({
      name: "leadTime",
      title: "Lead Time",
      type: "string",
      description: "e.g. '15-20 days after payment confirmed'",
    }),
    defineField({
      name: "priceRange",
      title: "Price Range (USD)",
      type: "string",
      description: "e.g. '$3.50 - $8.00/pc depending on qty'",
    }),
    defineField({
      name: "hotelTiers",
      title: "Suitable Hotel Tiers",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: ["3-Star", "4-Star", "5-Star / Luxury", "Budget / Economy"],
      },
    }),
    defineField({
      name: "customizations",
      title: "Customization Options",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: [
          "Custom Logo Embroidery",
          "Custom Woven Label",
          "Custom Size",
          "Pantone Color Match",
          "Private Label Packaging",
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "images.0",
    },
  },
});
