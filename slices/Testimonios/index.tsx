import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { createClient } from "@/prismicio";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as='h2' size="md" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base font-medium font-body text-slate-500 sm:text-left text-center">
      {children}
    </p>
  )
}
/**
 * Props for `Testimonios`.
 */
export type TestimoniosProps = SliceComponentProps<Content.TestimoniosSlice>;

/**
 * Component for "Testimonios" Slices.
 */
const Testimonios = async ({ slice }: TestimoniosProps): Promise<JSX.Element> => {

  const client = createClient();
  const testimonios = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.testimonio) && item.testimonio.uid) {
        return client.getByUID('testimonio', item.testimonio.uid)
      }
    })
  )

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div>
        {testimonios.map((item, index) => item && (
          <div key='index'>
            <PrismicRichText field={item.data.quote} components={components} />
          </div>
        ))}
      </div>

    </Bounded>
  );
};

export default Testimonios;
