import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import "./Home.css"
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
        <div class="container">
		
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
		
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			<li data-target="#myCarousel" data-slide-to="1"></li>
			<li data-target="#myCarousel" data-slide-to="2"></li>
		</ol>
		
		
		<div class="carousel-inner">
		
			<div class="item active">
				<img src="https://www.tyka.com/IN/wp-content/uploads/2023/09/cricket-tyka-banner.webp" />
			</div>
			
			<div class="item">
				<img src="https://www.tyka.com/IN/wp-content/uploads/2023/11/tyka-womens-banner-main.webp"/>
			</div>
			
			<div class="item">
				<img src="https://www.tyka.com/IN/wp-content/uploads/2023/11/tyka-training-banner-main.webp"/>
				
			</div>
			
		</div>
		
		
		<a class="left carousel-control" href="#myCarousel" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left"></span>
			<span class="sr-only">Previous</span>
		</a>
		
		<a class="right carousel-control" href="#myCarousel" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right"></span>
			<span class="sr-only">Next</span>
		</a>
		</div>
	</div>
   


    <h3>Best for your categories</h3>
      <Swiper
        loop={true}
        autoplay={{delay:2000}}
        slidesPerView={5}
        
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
    
        <SwiperSlide><img src="https://www.tyka.com/IN/wp-content/uploads/2023/10/shoes-best.webp" alt="hai"/></SwiperSlide>
        <SwiperSlide><img src="https://www.tyka.com/IN/wp-content/uploads/2023/10/cricket-category.webp" alt="hai"/></SwiperSlide>
        <SwiperSlide><img src="https://www.tyka.com/IN/wp-content/uploads/2023/10/compressions-category.webp" alt="hai"/></SwiperSlide>
        <SwiperSlide><img src="https://www.tyka.com/IN/wp-content/uploads/2023/10/mens-category.webp" alt="hai"/></SwiperSlide>
        <SwiperSlide><img src="https://www.tyka.com/IN/wp-content/uploads/2023/10/bags-duffle-best.webp" alt="hai"/></SwiperSlide>
        <SwiperSlide><img src="https://www.tyka.com/IN/wp-content/uploads/2023/10/women-best.webp" alt="hai"/></SwiperSlide>
        
    
      </Swiper>
      
		<Footer/>
 

</div>
  )
    }
export default Home;