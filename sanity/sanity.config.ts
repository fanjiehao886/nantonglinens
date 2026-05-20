import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import product from "./schemas/product";
import post, { category, author } from "./schemas/post";
import siteSettings from "./schemas/siteSettings";

export default defineConfig({
  name: "nantong-linens",
  title: "Nantong Linens - Hotel Linen B2B",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: [
      product,
      post,
      category,
      author,
      siteSettings,
    ],
  },
});
