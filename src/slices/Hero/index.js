import { isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 *
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 *
 * @param {HeroProps}
 */

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.image
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative flex items-center justify-center h-[80vh] md:h-[43.75rem] overflow-y-hidden"
    >
      <figure className="absolute top-0 left-0 h-full md:w-full">
        <PrismicNextImage
          field={backgroundImage}
          className="object-cover h-full md:w-full"
        />
      </figure>
      <div className="font-seasons leading-[6.4375rem] z-10 text-[6rem] text-center w-[56.25rem] text-bone">
        <PrismicRichText field={slice.primary.title} />
      </div>
    </section>
  );
};

export default Hero;
