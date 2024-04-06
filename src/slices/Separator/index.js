import clsx from "clsx";

/**
 * @typedef {import("@prismicio/client").Content.SeparatorSlice} SeparatorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SeparatorSlice>} SeparatorProps
 * @param {SeparatorProps}
 */
const Separator = ({ slice }) => {
  return (
    <span
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        'h-10 rounded-t-[2.5rem] -mt-10 z-40 block relative',
        slice.primary.type === types.light && 'bg-bone',
        slice.primary.type === types.dark && 'bg-black',
      )}
    >
    </span>
  );
};

const types = {
  light: 'Light',
  dark: 'Dark'
}

export default Separator;
