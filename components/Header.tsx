import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Bounded from './Bounded';
import Logo from './Logo';

export default async function Header() {

    const client = createClient();

    const settings = await client.getSingle('settings')

    return (
        <Bounded as='header' className="py-4 md:py-6 lg:py-8">
            <nav className='flex flex-col items-center justify-center sm:flex-row sm:justify-between w-full '>
                <Link href="/">
                    {/* {settings.data.site_title} */}
                    <Logo />
                </Link>
                <ul className='flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-0 sm:gap-6'>
                    {settings.data.navigation.map(({ label, link }) => (
                        <li key={label} className='cursor-pointer'>
                            <PrismicNextLink field={link}>{label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </Bounded>
    )
}
