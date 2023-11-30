import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded as='section'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={{
        heading1: ({ children }) => (
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight  font-display text-slate-700 text-center">{children}</h1>
        )
      }} />
      <PrismicRichText field={slice.primary.body} components={{
        paragraph: ({ children }) => (
          <p className="font-body text-2xl text-slate-600 leading-10 mb-4 md:mb-8 max-w-xl text-center">{children}</p>
        )
      }} />
      <Button field={slice.primary.button_link}
        className="mb-20">
        {slice.primary.button_text}
      </Button>

      <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl" />

      {/* Placeholder component for hero (variation: {slice.variation}) Slices!!! */}

    </Bounded>
  );
};

export default Hero;
