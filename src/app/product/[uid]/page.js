import Link from "next/link";
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { HorizontalDivider } from "@/components/HorizontalDivider";
import { notFound } from "next/navigation";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function LatestProduct({ product }) {
  const date = prismic.asDate(
    product.data.publishDate || product.first_publication_date,
  );

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicNextLink document={product}>
          <PrismicText field={product.data.title} />
        </PrismicNextLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {dateFormatter.format(date)}
      </p>
    </li>
  );
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const product = await client
    .getByUID("product", params.uid)
    .catch(() => notFound());

  return {
    title: `${prismic.asText(product.data.title)} | ${prismic.asText(
      settings.data.name,
    )}`,
    description: product.data.meta_description,
    openGraph: {
      title: product.data.meta_title,
      images: [
        {
          url: product.data.meta_image.url,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const client = createClient();

  const product = await client
    .getByUID("product", params.uid)
    .catch(() => notFound());
  const latestProducts = await client.getAllByType("product", {
    limit: 3,
  });
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  const date = prismic.asDate(
    product.data.publishDate || product.first_publication_date,
  );

  return (
    <Layout
      navigation={navigation}
      withHeaderDivider={false}
      withProfile={false}
      settings={settings}
    >
      <Bounded>
        <Link href="/" className="font-semibold tracking-tight text-slate-400">
          &larr; Back to articles
        </Link>
      </Bounded>
      <article>
        <Bounded className="pb-0">
          <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
            {product.data.name}
          </h1>
          <p className="font-serif italic tracking-tighter text-slate-500">
            {dateFormatter.format(date)}
          </p>
        </Bounded>
        <SliceZone slices={product.data.slices} components={components} />
      </article>
      {latestProducts.length > 0 && (
        <Bounded>
          <div className="grid grid-cols-1 gap-16 justify-items-center md:gap-24">
            <HorizontalDivider />
            <div className="w-full">
              <Heading size="2xl" className="mb-10">
                Latest articles
              </Heading>
              <ul className="grid grid-cols-1 gap-12">
                {latestProducts.map((product) => (
                  <LatestProduct key={product.id} product={product} />
                ))}
              </ul>
            </div>
          </div>
        </Bounded>
      )}
    </Layout>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const products = await client.getAllByType("product");

  return products.map((product) => {
    return { uid: product.uid };
  });
}
