import React from 'react';
import "./Index.css"; // 确保样式文件存在
const Index = () => (
  <div id="first-id" class="holy-grail">
        <div class="sidebar-left">
            <div class="avatar">👨‍💻</div>
            <div style={{textAlign: "center"}}>sucre_web@163.com</div>
        
        </div>

        <div class="main-content">
            <div class="header">
                <h1>Sucre</h1>
                <p class="subtitle">Fullstack Engineer / Product Manager / Tech. Blogger</p>
            </div>

            <div class="section">
                <h2 class="section-title">Hello World</h2>
                <div>Welcome to my personal site. I'm Sucre from Shanghai, China.</div>
            </div>

            <div class="section">
                <h2 class="section-title">Education</h2>
                <div class="education-grid">
                    {/* <div class="education-item">
                        <div class="education-icon">🎓</div>
                        <div class="education-content">
                            <h3 class="education-degree">Master of Computer Science</h3>
                            <p class="education-school">Shanghai Jiao Tong University</p>
                            <p class="education-year">2018 - 2021</p>
                            <p class="education-description">Specialized in Software Engineering and Artificial Intelligence</p>
                        </div>
                    </div> */}
                    
                    <div class="education-item">
                        <div class="education-icon">🏫</div>
                        <div class="education-content">
                            <h3 class="education-degree">Bachelor of Computer Science</h3>
                            <p class="education-school">Wuhan University</p>
                            <p class="education-year">2010 - 2014</p>
                            <p class="education-description">Major in Software Engineering</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="section">
                <h2 class="section-title">Project Showcase</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <h3 class="project-title">E-commerce Management System</h3>
                        <p class="project-description">
                            A modern e-commerce management platform developed with React and Node.js, featuring product management, order processing, user management, and other functional modules. Built with microservices architecture to support high-concurrency access.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">Docker</span>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <h3 class="project-title">Intelligent Customer Service System</h3>
                        <p class="project-description">
                            An AI-powered customer service system with natural language processing, automatic responses, and sentiment analysis capabilities. Significantly improved customer service efficiency and user satisfaction.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">TensorFlow</span>
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">Redis</span>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <h3 class="project-title">Mobile Application</h3>
                        <p class="project-description">
                            A cross-platform mobile application developed with React Native, supporting both iOS and Android platforms. Features social networking, content sharing, real-time messaging, and other core functionalities.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">Redux</span>
                            <span class="tech-tag">Socket.io</span>
                        </div>
                    </div>
                </div>
            </div> */}

            <div class="section">
                <h2 class="section-title">Career</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">2025 - Present</div>
                        <h3 class="timeline-title">Moonton</h3>
                        <p class="timeline-description">
                            Responsible for frontend architecture design and development of company core products, leading a 5-person team to complete multiple important projects. Optimized frontend performance, enhanced user experience, and received the company's annual outstanding employee award.
                        </p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2018 - 2024</div>
                        <h3 class="timeline-title">Netease</h3>
                        <p class="timeline-description">
                            Participated in developing enterprise-level web applications, responsible for both frontend and backend development. Independently completed the development of core functional modules such as user management system and data visualization platform.
                        </p>
                    </div>
                    
                    <div class="timeline-item">
                        <div class="timeline-date">2014 - 2018</div>
                        <h3 class="timeline-title">Huawei</h3>
                        <p class="timeline-description">
                            Focused on frontend development, proficient in mainstream frameworks like Vue.js and React. Participated in developing multiple commercial projects, accumulating rich practical experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* <div class="sidebar-right">
            <h2 class="sidebar-title">Education</h2>
            <div class="contact-info">
                <div class="contact-item">
                    <span class="contact-icon">🎓</span>
                    <span>Computer Science and Technology</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">🏫</span>
                    <span>Peking University</span>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">📅</span>
                    <span>2015-2019</span>
                </div>
            </div>

            <h2 class="sidebar-title">Certifications</h2>
            <ul class="skills-list">
                <li class="skill-item">
                    <div class="skill-name">AWS Certified Solutions Architect</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">Google Cloud Certified</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">PMP Project Management</div>
                </li>
            </ul>

            <h2 class="sidebar-title">Interests</h2>
            <ul class="skills-list">
                <li class="skill-item">
                    <div class="skill-name">📚 Technical Reading</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">🏃‍♂️ Fitness</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">🎵 Music Appreciation</div>
                </li>
                <li class="skill-item">
                    <div class="skill-name">✈️ Travel Exploration</div>
                </li>
            </ul>
        </div> */}
    </div>
);

export default Index;