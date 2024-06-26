import { Marquee } from "@/components/Marquee";
import { PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";

/**
 * @typedef {import("@prismicio/client").Content.BenefitSlice} BenefitSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BenefitSlice>} BenefitProps
 * @param {BenefitProps}
 */
const Benefit = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-[5rem] bg-bone"
    >
      <Marquee>
        <PrismicRichText field={slice.primary.title} />
      </Marquee>
      <div className="p-[5rem]">
        {slice.items.map((item, index) => (
          <div key={`benefit-${index}`} className="md:mx-auto md:text-center flex flex-col items-center justify-center max-w-[73.25rem] w-full">
            <div className="font-grotesk text-[2rem] max-w-[52.9375rem]">
              <PrismicRichText field={item.description} />
            </div>
            {prismic.isFilled.richText(item.quote) && (
              <div className="py-[5rem] font-seasons text-[3rem]">
                <PrismicRichText field={item.quote} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefit;
