import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';

export default async function Header() {

    const client = createClient();

    const settings = await client.getSingle('settings')

    return (
        <header className="flex justify-between py-2 px-4">
            <Link href="/">
                {settings.data.site_title}
            </Link>
            <nav>
                <ul className='flex gap-2'>
                    {settings.data.navigation.map(({ label, link }) => (
                        <li key={label}>
                            <PrismicNextLink field={link}>{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
