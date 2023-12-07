import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import * as prismic from '@prismicio/client';
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  const client = createClient();
  // const page = await client.getSingle("homepage");

  const home = await client.getByUID('homepage', 'home', { lang })

  console.log(home);

  return <SliceZone slices={home.data.slices} components={components} />;

  // return <SliceZone slices={page.data.slices} components={components} />;
  // return <SliceZone slices={home.data.slices} components={components} />;
}

export async function generateMetadata({
  params: { lang },
}: { params: { lang: string } }): Promise<Metadata> {
  const client = createClient();

  // const page = await client.getSingle("homepage");
  const page = await client.getByUID('page', 'home', { lang });
  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };

  // return {
  //   title: prismic.asText(home.data.title),
  //   description: home.data.meta_description,
  // };

}
