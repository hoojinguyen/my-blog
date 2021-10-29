// import anime from 'animejs'
// import { useEffect, useRef } from 'react'
import Headings from './headings'

const Greeting = () => {
    // const animationRef = useRef(null)
    // useEffect(() => {
    //     animationRef.current = anime({
    //         targets: '.textName123',
    //         width: '100%', // -> from '28px' to '100%',
    //         easing: 'easeInOutQuad',
    //         direction: 'alternate',
    //         loop: true,
    //     })
    // }, [])
    return (
        <div className='container p-5 bg-gray-100 mb-5'>
            <Headings.H1 isTighter>Hi, I’m Hoi Nguyen (YanTee)</Headings.H1>
            <Headings.H2>
                I’m Software engineer. This is my blog. At here, I will share
                the articles and also knowledged that was self study. I hope
                that it will be useful and help to your guys and community.
            </Headings.H2>
        </div>
    )
}

export default Greeting
