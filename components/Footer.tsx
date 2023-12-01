import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Bounded from './Bounded';
import Logo from './Logo';

export default async function Footer() {

    const client = createClient();

    const settings = await client.getSingle('settings')

    return (
        <Bounded as='footer' className="py-4 md:py-6 lg:py-8">
            <div className='flex justify-between w-full flex-col sm:flex-row items-center'>
                <Link href="/">
                    {/* {settings.data.site_title} */}
                    <Logo />
                </Link>

                {/* Simbolo copyright + año actual */}
                <p className="text-xs">© {new Date().getFullYear()} {settings.data.site_title}</p>


                <nav>
                    <ul className='flex gap-4'>
                        {settings.data.navigation.map(({ label, link }) => (
                            <li key={label}>
                                <PrismicNextLink field={link}>{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </Bounded>
    )
}
