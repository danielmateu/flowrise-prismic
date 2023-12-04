import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonios`.
 */
export type TestimoniosProps = SliceComponentProps<Content.TestimoniosSlice>;

/**
 * Component for "Testimonios" Slices.
 */
const Testimonios = ({ slice }: TestimoniosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for testimonios (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Testimonios;
