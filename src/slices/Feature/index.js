import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { clsx } from "clsx";

/**
 * @typedef {import("@prismicio/client").Content.FeatureSlice} FeatureSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeatureSlice>} FeatureProps
 * @param {FeatureProps}
 */
const Feature = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-[5rem] bg-bone"
    >
      <div className={clsx(
        'flex flex-col md:flex-row relative',
        slice.variation === variations.default ? 'items-start' : 'items-center',
      )}>
        {
          slice.variation === variations.default &&
          <div className='md:absolute mb-16 md:mb-0 z-10 md:mt-[3rem] left-0 top-0 font-seasons text-7xl md:text-[3rem]'>
            <PrismicRichText field={slice.primary.title} />
          </div>
        }
        <figure className={clsx(
          'md:mb-0 mb-16 relative shrink-0 w-full md:w-[32.625rem] md:h-[35.1875rem] overflow-hidden rounded-[15px]',
          slice.variation === variations.default && 'md:h-[23.875rem] md:ml-[6.75rem] md:mr-[4rem]',
          slice.variation === variations.imageRight && 'md:ml-[8rem] md:order-1',
          slice.variation === variations.imageLeft && 'md:mr-[8rem]',
        )}>
          <PrismicNextImage
            className={clsx(
              'object-cover w-full h-full ',
              slice.variation === variations.default && 'filter brightness-120'
            )}

            field={slice.primary.image}
          />

        </figure>
        <div className='flex-col'>
          {
            slice.variation !== variations.default &&
            <div className='font-seasons text-[3rem] mb-8 md:mb-[3rem]'>
              <PrismicRichText field={slice.primary.title} />
            </div>
          }
          <div className={clsx(
            'font-grotesk text-3xl md:text-[1.125rem]',
            slice.variation === variations.default && 'mt-[3rem]'

          )}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
      </div>
    </section>
  );
};

const variations = {
  default: 'default',
  imageLeft: 'imageLeft',
  imageRight: 'imageRight'
}

export default Feature;
