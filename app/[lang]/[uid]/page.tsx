import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import * as prismic from '@prismicio/client';
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { getLocales } from '@/utils/getLocales';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

type Params = { uid: string };




export default async function Page({ params }: { params: Params }) {
    const client = createClient();
    const page = await client
        .getByUID("page", params.uid)
        .catch(() => notFound());

    const locales = await getLocales(page, client);

    return (
        <>
            <LanguageSwitcher locales={locales} />
            <SliceZone slices={page.data.slices} components={components} />;
        </>
    )
}

export async function generateStaticParams() {
    const client = createClient();

    // ⬇️ Note this line using a '*' for the lang parameter
    const pages = await client.getAllByType('page', {
        predicates: [prismic.filter.not('my.page.uid', 'home')],
        lang: '*',
    });

    return pages.map((page) => ({ uid: page.uid, lang: page.lang }));
}
