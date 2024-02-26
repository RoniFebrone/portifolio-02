import Card from '../../Components/Card/Card'
import Data from '../../DataCard.json'

import './index.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'

register();

const Projects = () => {
  const [slidePerView, setSlidePerview] = useState(2)


useEffect(() => {
  function handleResize() {
    if (window.innerWidth < 680) {
      setSlidePerview(1);
    } else {
      setSlidePerview(2);
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); 



  return (
    <div className='Projects'>

      <h1>Projetos</h1>
      <div className='Projects__Card'>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidePerView}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >

          {Data.map((result, index) => (
            <SwiperSlide key={index}>
              <Card
                img={result.img}
                title={result.title}
                description={result.description}
                repo={result.repo}
                site={result.site}
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  )
}

export default Projects