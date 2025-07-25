import React from 'react';
import "./Index.css"; // 确保样式文件存在
const Index = () => (
  <div id="first-id" class="holy-grail">
        <div class="sidebar-left">
            <div class="avatar">👨‍💻</div>
            <h2 class="sidebar-title">个人信息</h2>
            
            <div class="contact-info">
                <div class="contact-item">
                    <span class="contact-icon">📧</span>
                    <span>example@email.com</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📱</span>
                    <span>+86 138 0000 0000</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📍</span>
                    <span>北京市朝阳区</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">🌐</span>
                    <span>www.example.com</span>
                </div>
            </div>

            <h2 class="sidebar-title">技能专长</h2>
            <ul class="skills-list">
                <li class="skill-item">
                    <div class="skill-name">前端开发</div>
                    <div class="skill-level">
                        <div class="skill-progress" ></div>
                    </div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">后端开发</div>
                    <div class="skill-level">
                        <div class="skill-progress"></div>
                    </div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">UI/UX设计</div>
                    <div class="skill-level">
                        <div class="skill-progress"></div>
                    </div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">项目管理</div>
                    <div class="skill-level">
                        <div class="skill-progress"></div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="main-content">
            <div class="header">
                <h1>张三</h1>
                <p class="subtitle">全栈开发工程师 / UI设计师 / 技术博主</p>
            </div>

            <div class="section">
                <h2 class="section-title">关于我</h2>
               
            </div>

            <div class="section">
                <h2 class="section-title">项目展示</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <h3 class="project-title">电商平台管理系统</h3>
                        <p class="project-description">
                            基于React和Node.js开发的现代化电商管理平台，包含商品管理、订单处理、用户管理等功能模块。
                            采用微服务架构，支持高并发访问。
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">Docker</span>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <h3 class="project-title">智能客服系统</h3>
                        <p class="project-description">
                            集成AI技术的智能客服系统，支持自然语言处理、自动回复、情感分析等功能。
                            显著提升了客户服务效率和用户满意度。
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">TensorFlow</span>
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Redis</span>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <h3 class="project-title">移动端应用</h3>
                        <p class="project-description">
                            跨平台移动应用，使用React Native开发，支持iOS和Android双平台。
                            包含社交功能、内容分享、实时通讯等核心功能。
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">Redux</span>
                            <span class="tech-tag">Socket.io</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2 class="section-title">工作经历</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">2022 - 至今</div>
                        <h3 class="timeline-title">高级前端开发工程师</h3>
                        <p class="timeline-description">
                            负责公司核心产品的前端架构设计和开发，带领5人团队完成多个重要项目。
                            优化了前端性能，提升了用户体验，获得了公司年度优秀员工奖。
                        </p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2020 - 2022</div>
                        <h3 class="timeline-title">全栈开发工程师</h3>
                        <p class="timeline-description">
                            参与开发企业级Web应用，负责前后端开发工作。独立完成了用户管理系统、
                            数据可视化平台等核心功能模块的开发。
                        </p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2019 - 2020</div>
                        <h3 class="timeline-title">前端开发工程师</h3>
                        <p class="timeline-description">
                            专注于前端开发工作，熟练使用Vue.js、React等主流框架。
                            参与开发了多个商业项目，积累了丰富的实战经验。
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="sidebar-right">
            <h2 class="sidebar-title">教育背景</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <span class="contact-icon">🎓</span>
                    <span>计算机科学与技术</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">🏫</span>
                    <span>北京大学</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📅</span>
                    <span>2015-2019</span>
                </div>
            </div>

            <h2 class="sidebar-title">证书认证</h2>
            <ul class="skills-list">
                <li class="skill-item">
                    <div class="skill-name">AWS认证解决方案架构师</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">Google Cloud认证</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">PMP项目管理认证</div>
                </li>
            </ul>

            <h2 class="sidebar-title">兴趣爱好</h2>
            <ul class="skills-list">
                <li class="skill-item">
                    <div class="skill-name">📚 技术阅读</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">🏃‍♂️ 健身运动</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">🎵 音乐欣赏</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">✈️ 旅行探索</div>
                </li>
            </ul>
        </div>
    </div>
);

export default Index;