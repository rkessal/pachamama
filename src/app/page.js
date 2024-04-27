import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { Layout } from "@/components/Layout";

export default async function Index() {
  const client = createClient();
  const page = await client.getSingle("home", {
    fetchLinks: [
      "product.name",
      "product.description",
      "product.background_image",
      "product.main_image",
      "product.sizes",
      "product.uid"
    ],
  });

  const navigation = await client.getSingle("navigation");

  return (
    <Layout navigation={navigation}>
      <div id="backtotup"></div>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
