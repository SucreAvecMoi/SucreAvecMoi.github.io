import React from 'react';
import { Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
          <h2>Software Development</h2>
          <p>I'm a passionate developer focused on frontend development and user experience design.</p>
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
          <h2>Frontend Development</h2>
          <p>Master modern frontend technology stack, capable of building responsive and user-friendly web applications.</p>
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
          <h2>Project Manager Part</h2>
          <p>I'm not only a developer, but alose a Product Manager. Designing and make it realized is a fancinating thing</p>
          <div className="skills">
            <span className="skill-tag">Project Management</span>
            <span className="skill-tag">Team Collaboration</span>
            <span className="skill-tag">Agile Development</span>
            <span className="skill-tag">Code Review</span>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide className="slide slide-content color4">
        <div>
          <h2>AI & LLM</h2>
          <p>I'm trying to apply AI and LLM in my daily life.</p>
          <div className="skills">
            <span className="skill-tag">ChatGPT</span>
            <span className="skill-tag">Finetune</span>
            <span className="skill-tag">RAG</span>
            <span className="skill-tag">MCP</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export default About;