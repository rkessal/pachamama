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
        'flex flex-row relative',
        slice.variation === variations.default ? 'items-start' : 'items-center',
      )}>
        {
          slice.variation === variations.default &&
          <div className='absolute z-10 mt-[3rem] left-0 top-0 font-seasons text-[3rem]'>
            <PrismicRichText field={slice.primary.title} />
          </div>
        }
        <figure className={clsx(
          'relative shrink-0 w-[32.625rem] h-[35.1875rem] overflow-hidden rounded-[15px]',
          slice.variation === variations.default && 'h-[23.875rem] ml-[6.75rem] mr-[4rem]',
          slice.variation === variations.imageRight && 'ml-[8rem] order-1',
          slice.variation === variations.imageLeft && 'mr-[8rem]',
        )}>
          <PrismicNextImage
            className={clsx(
              'object-cover w-full h-full',
              slice.variation === variations.default && 'filter brightness-120'
            )}

            field={slice.primary.image}
          />

        </figure>
        <div className='flex-col'>
          {
            slice.variation !== variations.default &&
            <div className='font-seasons text-[3rem]'>
              <PrismicRichText field={slice.primary.title} />
            </div>
          }
          <div className={clsx(
            'font-grotesk text-[1.125rem]',
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
