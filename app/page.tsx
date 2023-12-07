import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { getLocales } from '@/utils/getLocales';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  const locales = await getLocales(page, client);

  return (

    <>
      <LanguageSwitcher locales={locales} />
      <SliceZone slices={page.data.slices} components={components} />
      {/* <SliceZone slices={page.data.slices} components={components} /> */}
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
