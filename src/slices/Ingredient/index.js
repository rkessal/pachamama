/**
 * @typedef {import("@prismicio/client").Content.IngredientSlice} IngredientSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IngredientSlice>} IngredientProps
 * @param {IngredientProps}
 */
const Ingredient = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for ingredient (variation: {slice.variation}) Slices
    </section>
  );
};

export default Ingredient;
