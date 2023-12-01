import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as='h1' size="xl" className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0">{children}</Heading>
  ),
  paragraph: ({ children }) => (
    <p className="font-body text-2xl text-slate-600 leading-10 mb-4 md:mb-8 max-w-xl text-center">{children}</p>
  )
}
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
      <PrismicRichText field={slice.primary.heading} components={components} />
      <PrismicRichText field={slice.primary.body} components={components} />
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
