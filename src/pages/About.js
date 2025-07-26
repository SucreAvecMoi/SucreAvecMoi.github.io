import React from 'react';
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { DownOutlined } from "@ant-design/icons";
import './About.css';

const About = () => (
  <div className="about-container">
    <Swiper
      direction="vertical"
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={0}
      mousewheel={true}
      pagination={{
        clickable: true,
        el: '.swiper-pagination',
      }}
      keyboard={true}
      modules={[Pagination, Mousewheel, Keyboard]}
      onSwiper={(swiper) => {
        console.log('Swiper initialized:', swiper);
      }}
    >
      <SwiperSlide className="slide slide-content color1">
        <div>
          <h2>关于我</h2>
          <p>你好！我是一名热爱技术的开发者，专注于前端开发和用户体验设计。</p>
          <div className="skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">HTML5</span>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className="slide slide-content color2">
        <div>
          <h2>我的技能</h2>
          <p>掌握现代前端技术栈，能够构建响应式和用户友好的 Web 应用。</p>
          <div className="skills">
            <span className="skill-tag">Vue.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className="slide slide-content color3">
        <div>
          <h2>项目经验</h2>
          <p>参与过多个商业项目，具备从需求分析到部署上线的完整开发经验。</p>
          <div className="skills">
            <span className="skill-tag">项目管理</span>
            <span className="skill-tag">团队协作</span>
            <span className="skill-tag">敏捷开发</span>
            <span className="skill-tag">代码审查</span>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className="slide slide-content color4">
        <div>
          <h2>联系方式</h2>
          <p>如果你对我的工作感兴趣，或者想要合作，欢迎随时联系我！</p>
          <div className="skills">
            <span className="skill-tag">邮箱: sucre_web@163.com</span>
            <span className="skill-tag">微信: SucreAvecMoi</span>
            <span className="skill-tag">GitHub: @SucreAvecMoi</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    
    <Button 
      className="button" 
      onClick={() => {
        const swiper = document.querySelector(".mySwiper")?.swiper;
        if (swiper) {
          swiper.slideNext();
        }
      }} 
      icon={<DownOutlined />}
    />
  </div>
);

export default About;