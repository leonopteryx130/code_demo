import Banner1 from './banner1.jpg'
import Banner2 from './banner2.jpg'

import './Carousel.css'

const Carousel = () => {

    return(
        <div className='container'>
            <img src={Banner1} className='item item1' />
            <img src={Banner2} className='item item1' />
            <img src={Banner1} className='item item1' />
        </div>
    )
}


export default Carousel