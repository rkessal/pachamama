import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.TestimonialsSlice} TestimonialsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TestimonialsSlice>} TestimonialsProps
 * @param {TestimonialsProps}
 */
const Testimonials = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-[5rem] bg-black text-bone"
    >
      <div className="font-seasons leading-[6.4375rem] mb-[24rem] mx-auto text-[6rem] text-center max-w-[52.875rem] w-full">
        <PrismicRichText field={slice.primary.title} />
      </div>
      <div className="max-w-[66.4375rem] w-full ml-auto">
        {slice.items.map((item, index) => (
          <div key={`testimonial-${index}`} className="flex flex-col mb-[12rem] last:mb-0">
            <div className="flex flex-row">
              <div className="font-seasons text-[1.5rem] max-w-[13.5rem] w-full">
                <PrismicRichText field={item.product} />
              </div>
              <div className="font-grotesk text-[2rem] w-auto">
                <PrismicRichText field={item.description} />
              </div>
            </div>
            <div className="font-grotesk italic text-[1.25rem] ml-auto">
              <PrismicRichText field={item.info} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
