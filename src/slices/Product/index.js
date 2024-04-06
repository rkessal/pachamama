import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.ProductSlice} ProductSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductSlice>} ProductProps
 * @param {ProductProps}
 */
const Product = async ({ slice, index, context }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-[5rem] bg-bone"
    >
      <div className="relative flex md:flex-row items-center pl-[5rem]">
        <div className="max-w-[32.625rem] w-full ">
          <h1 className="font-seasons md:text-[6rem] leading-[6.4375rem] mb-[4.5rem] max-w-[27.5rem] w-full ">
            {slice.primary.product.data.name}
          </h1>
          <div className="mb-[3.375rem] font-grotesk">
            <PrismicRichText field={slice.primary.product.data.description} />
          </div>
          <div className="font-grotesk font-semibold text-[1.5rem] uppercase">
            <PrismicRichText field={slice.primary.product.data.sizes} />
          </div>
          <div className="mt-24">
            <a
              href="https://wa.me/34622894455"
              className="py-[1.5rem] px-[5rem]  rounded-[20px] overflow-hidden bg-tan text-white font-grotesk  font-semibold uppercase w-full min-w-[18.75rem]"
              target="_blank"
            >
              order
            </a>
          </div>
        </div>
        <figure className="rounded-l-[20px] overflow-hidden max-w-[44.375rem] w-full h-[59rem] ml-auto">
          <PrismicNextImage
            className="object-cover w-full h-full"
            field={slice.primary.product.data.background_image}
          />
        </figure>
        <figure className="absolute bottom-0 mb-[8.75rem] mr-[28.125rem] right-0 rounded-[20px] overflow-hidden bg-white max-w-[21.9375rem] w-full h-[29.0625rem] ml-auto">
          <PrismicNextImage
            className="object-cover w-full h-full"
            field={slice.primary.product.data.main_image}
          />
        </figure>
      </div>
    </section>
  );
};

export default Product;
