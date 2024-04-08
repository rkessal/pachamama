import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.QuoteSlice} QuoteSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<QuoteSlice>} QuoteProps
 * @param {QuoteProps}
 */

const Quote = ({ slice }) => {
  return (
        <section className="py-[5rem] bg-bone  text-center" data-slice-type='quote' data-slice-variation='default'>
          <div className="flex flex-col items-center w-full">
            <div className="font-seasons text-7xl md:leading-[6.4375rem] max-w-[52.875rem] md:text-[6rem]">
              <PrismicText field={slice.primary.quote} />
            </div>
            <PrismicNextLink 
              className="my-[3rem] py-[1.5rem] px-[5rem]  rounded-[20px] overflow-hidden bg-tan text-white font-grotesk  font-semibold uppercase min-w-[18.75rem]" 
              document={slice.primary.cta_link}
            >
              <PrismicText field={slice.primary.cta_label} />
            </PrismicNextLink>
          </div>
        </section>
  );
};

export default Quote;
