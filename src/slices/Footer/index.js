import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import Link from "next/link";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const Footer = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-[5rem] pb-[5rem] pt-[16rem] bg-black text-bone"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-[9rem]">
        <ul>
          {slice.items.map(
            (item, index) =>
              !item.external && (
                <li key={`footer-link-${index}`}>
                  <PrismicNextLink
                    field={item.link}
                    className="uppercase font-grotesk mb-4 last:mb-0 text-6xl md:text-[2.5rem]"
                  >
                    <PrismicRichText field={item.name} />
                  </PrismicNextLink>
                </li>
              ),
          )}
        </ul>
        <Link
          href="#backtotop"
          className="mt-8 md:mt-0 uppercase font-grotesk text-6xl md:text-[2.5rem]"
        >
          Back to top{" "}
        </Link>
      </div>
      <figure className="w-full mb-[1.5rem]">
        {prismic.isFilled.image(slice.primary.logo) && (
          <PrismicNextImage field={slice.primary.logo} className="w-full h-full" />
        )}
      </figure>
      <div className="flex flex-col  md:flex-row items-center md:justify-between font-grotesk  text-3xl md:text-[1.125rem]">
        <ul className="flex flex-row mb-16 md:mb-0">
          {slice.items.map((item) => {
            return (
              item.external && (
                <li className="mr-[1.5rem] last:mr-0">
                  <PrismicNextLink field={item.link}>
                    <PrismicRichText field={item.name} />
                  </PrismicNextLink>
                </li>
              )
            );
          })}
        </ul>
        <PrismicRichText field={slice.primary.copyrights} />
      </div>
    </section>
  );
};

export default Footer;
