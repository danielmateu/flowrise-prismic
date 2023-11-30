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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 py-10 md:px-6 md:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 place-items-center gap-2">
          <PrismicRichText field={slice.primary.heading} components={{
            heading1: ({ children }) => (
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight  font-display text-slate-700 text-center">{children}</h1>
            )
          }} />
          <PrismicRichText field={slice.primary.body} components={{
            paragraph: ({ children }) => (
              <p className="font-body text-2xl text-slate-600 leading-10 mb-4md:mb-8 max-w-xl text-center">{children}</p>
            )
          }} />
          <PrismicNextLink field={slice.primary.button_link} className="block w-fit bg-cyan-700 hover:bg-cyan-800 transition  px-12 py-3 font-display rounded-full text-white font-bold text-base tracking-wider mb-20 mt-6">
            {slice.primary.button_text}
          </PrismicNextLink>
          <PrismicNextImage field={slice.primary.image} className="drop-shadow-xl max-w-4xl" />
        </div>
      </div>
      {/* Placeholder component for hero (variation: {slice.variation}) Slices!!! */}
    </section>
  );
};

export default Hero;
