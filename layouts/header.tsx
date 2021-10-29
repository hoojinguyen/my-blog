import { Icon } from '@iconify/react'
import classNames from 'classnames'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import logo from '../public/images/logo.png'

const navigation = [
    { href: '/', name: 'Home' },
    { href: '/blog', name: 'Blog' },
    { href: '/about', name: 'About' },
]

const Header = () => {
    const { pathname } = useRouter()

    const { theme, setTheme } = useTheme()
    const [isMounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const onClickToggleDark = () =>
        setTheme(theme === 'dark' ? 'light' : 'dark')

    return (
        <header className='sticky top-0 z-50 flex flex-row justify-between items-center backdrop-filter backdrop-blur p-3'>
            <div className='rounded-full h-14 w-14 flex items-center justify-center ring-4 ring-white ring-opacity-50 bg-blue-300 shadow-2xl'>
                <Image alt='Next.js logo' src={logo} width={45} height={45} />
            </div>
            <nav className='flex items-center space-x-4'>
                {navigation.map(({ href, name }, index) => (
                    <Link key={href} href={href}>
                        <a
                            className={classNames(
                                'sm:ml-6 md:ml-8 text-gray-900 dark:text-gray-100',
                                'transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110',
                                {
                                    'ml-4': index > 0,
                                    'font-semibold cursor-not-allowed':
                                        pathname === href,
                                }
                            )}
                        >
                            {name}
                        </a>
                    </Link>
                ))}

                <button
                    className='rounded-lg border ml-auto p-2 bg-gray-50 dark:bg-gray-950'
                    aria-label='Toggle Dark mode'
                    onClick={onClickToggleDark}
                >
                    {!isMounted ? (
                        <Icon icon='carbon:sun' />
                    ) : theme === 'dark' ? (
                        <Icon icon='carbon:sun' />
                    ) : (
                        <Icon icon='carbon:moon' />
                    )}
                </button>
            </nav>
        </header>
    )
}

export default Header
