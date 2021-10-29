import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'

const Header = () => {
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const liClass =
        'hover:text-green-500 cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
    const bgClass = theme === 'light' ? 'bg-gray-50' : 'bg-black-50'

    return (
        <header className='sticky top-0 z-50 flex flex-row justify-between items-center backdrop-filter backdrop-blur p-3'>
            <div>
                <Icon icon='noto:astronaut' width='48' height='48' />
            </div>
            <nav className='flex items-center space-x-4'>
                <ul className='flex flex-row space-x-4 text-lg'>
                    <li className={liClass}>Home</li>
                    <li className={liClass}>Blog</li>
                    <li className={liClass}>About</li>
                </ul>
                <button
                    className={`rounded-lg border p-2 ${bgClass}`}
                    onClick={changeTheme}
                >
                    {theme === 'light' ? (
                        <Icon icon='carbon:moon' />
                    ) : (
                        <Icon icon='carbon:sun' />
                    )}
                </button>
            </nav>
        </header>
    )
}

export default Header
