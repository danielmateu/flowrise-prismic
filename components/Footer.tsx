import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

export default async function Footer() {

    const client = createClient();

    const settings = await client.getSingle('settings')

    return (
        <footer className="flex justify-between py-2 px-4">
            <Link href="/">
                {settings.data.site_title}
            </Link>

            {/* Simbolo copyright + año actual */}
            <p className="text-xs">© {new Date().getFullYear()} {settings.data.site_title}</p>

            <nav>
                <ul className='flex gap-2'>
                    {settings.data.navigation.map(({ label, link }) => (
                        <li key={label}>
                            <PrismicNextLink field={link}>{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    )
}
