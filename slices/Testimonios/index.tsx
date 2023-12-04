import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { createClient } from "@/prismicio";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as='h2' size="md" className="text-center mb-10">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {testimonios.map((item, index) => item && (
          <div key={index} className="border bg-white shadow-lg hover:shadow-sm transition rounded-lg px-8 md:px-14 py-10 md:py-16 flex flex-col gap-6">
            <PrismicRichText field={item.data.quote} components={components} />
            {/* Imagen */}
            <div className="flex gap-2 items-center">
              <PrismicNextImage field={item.data.avatar} width={56} height={56} className="rounded-full" imgixParams={{ ar: "1:1", fit: "crop" }} />
              <div>
                <p className="font-semibold">{item.data.name} </p>
                <p className="text-slate-500 text-sm">{item.data.job_title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </Bounded>
  );
};

export default Testimonios;
