import { useState } from 'react';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Carousel() {

    const [img, setImg] = useState();
    const [idImg, setIdImg] = useState();

    const fectchImg = async () => {

        try {

            const imgCarousel = await getCarousel();

            setImg(imgCarousel.data)
            setIdImg(imgCarousel.data)
            
        } catch (error) {

            console.error(error);
            
        }

    }



    return (
        <>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={0.3}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 1s linear"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
                transitionDuration={1000}
            >

                {imgCarousel.map((idImg) =>(

                    <WithStyles 
                    headline = {nomArticle}
                    description = {description}
                    image = {img}

                    />

                ))}
                
            </Carousel>
        </>
    )

}




export default Carousel ;