import Card from '../../Components/Card/Card'

import React from '../../Images/imgProjects/React.svg'

import './index.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import {register} from 'swiper/element/bundle'
import { EffectCoverflow, Pagination } from 'swiper/modules'

register();

const Projects = () => {
  return (
    <div className='Projects'>

      <h1>Projetos</h1>
      <div className='Projects__Card'>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
          <SwiperSlide>
            <Card
              img={React}
              title="PORTFÓLIO"
              description="Meu portfólio, que estão vendo agora!! Esse foi uma migração do meu primeiro projeto em react, que hoje está com a tipagem do TypeScript. No primeiro momento, foi bem difícil fazer, por se tratar da primeira experiência com react, e para migra-lo para o TS, foi bem mais simples, mas notável que precisa de otimização"
              repo="https://github.com/RoniFebrone/Portifolio-tsx"
              site="https://portifolio-tsx-tau.vercel.app"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Card
              img={React}
              title="PORTFÓLIO"
              description="Meu portfólio, que estão vendo agora!! Esse foi uma migração do meu primeiro projeto em react, que hoje está com a tipagem do TypeScript. No primeiro momento, foi bem difícil fazer, por se tratar da primeira experiência com react, e para migra-lo para o TS, foi bem mais simples, mas notável que precisa de otimização"
              repo="https://github.com/RoniFebrone/Portifolio-tsx"
              site="https://portifolio-tsx-tau.vercel.app"
              
            />
          </SwiperSlide>
          <SwiperSlide >
            <Card
              img={React}
              title="PORTFÓLIO"
              description="Meu portfólio, que estão vendo agora!! Esse foi uma migração do meu primeiro projeto em react, que hoje está com a tipagem do TypeScript. No primeiro momento, foi bem difícil fazer, por se tratar da primeira experiência com react, e para migra-lo para o TS, foi bem mais simples, mas notável que precisa de otimização"
              repo="https://github.com/RoniFebrone/Portifolio-tsx"
              site="https://portifolio-tsx-tau.vercel.app"
            />
          </SwiperSlide>
          <SwiperSlide >
            <Card
              img={React}
              title="PORTFÓLIO"
              description="Meu portfólio, que estão vendo agora!! Esse foi uma migração do meu primeiro projeto em react, que hoje está com a tipagem do TypeScript. No primeiro momento, foi bem difícil fazer, por se tratar da primeira experiência com react, e para migra-lo para o TS, foi bem mais simples, mas notável que precisa de otimização"
              repo="https://github.com/RoniFebrone/Portifolio-tsx"
              site="https://portifolio-tsx-tau.vercel.app"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects