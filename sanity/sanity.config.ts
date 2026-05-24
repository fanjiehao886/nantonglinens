import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import product from "./schemas/product";
import post from "./schemas/post";
import { category, author } from "./schemas/post";
import siteSettings from "./schemas/siteSettings";

export default defineConfig({
  name: "nantong-linens",
  title: "Nantong Linens - Hotel Linen B2B",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "nk89o1k8",
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
