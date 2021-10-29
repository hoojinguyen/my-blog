import Header from './header'
import Footer from './footer'

const Main = ({ children }: React.PropsWithChildren<{}>) => (
    <div className='max-w-4xl mx-auto p-8'>
        <Header />
        <main className='mt-10 mb-20 px-5'>{children}</main>
        <Footer />
    </div>
)

export default Main
