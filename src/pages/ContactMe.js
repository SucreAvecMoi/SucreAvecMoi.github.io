import React, { useState } from 'react';
import './ContactMe.css';

function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 这里可以添加表单提交逻辑
        console.log('Form submitted:', formData);
        alert('感谢您的留言！我们会尽快回复您。');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>联系我们</h1>
                <p>有任何问题或建议？我们很乐意听到您的声音！</p>
            </div>

            <div className="contact-content">
                {/* 联系信息卡片 */}
                <div className="contact-info">
                    <h2>联系方式</h2>
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-icon">📧</div>
                            <h3>邮箱</h3>
                            <p>sucre_web@163.com</p>
                            <a href="mailto:sucre_web@163.com" className="contact-link">
                                发送邮件
                            </a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">💬</div>
                            <h3>微信</h3>
                            <p>SucreAvecMoi</p>
                            <span className="contact-note">扫码添加好友</span>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">🌐</div>
                            <h3>GitHub</h3>
                            <p>@SucreAvecMoi</p>
                            <a href="https://github.com/SucreAvecMoi" target="_blank" rel="noopener noreferrer" className="contact-link">
                                访问主页
                            </a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">📍</div>
                            <h3>地址</h3>
                            <p>中国 · 北京</p>
                            <span className="contact-note">欢迎线下交流</span>
                        </div>
                    </div>
                </div>

                {/* 联系表单 */}
                <div className="contact-form-container">
                    <h2>发送消息</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">姓名 *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="请输入您的姓名"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">邮箱 *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="请输入您的邮箱地址"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">主题</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="请输入消息主题"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">消息内容 *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                placeholder="请输入您的消息内容..."
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            发送消息
                        </button>
                    </form>
                </div>
            </div>

            {/* 工作时间 */}
            <div className="working-hours">
                <h3>工作时间</h3>
                <div className="hours-grid">
                    <div className="hour-item">
                        <span className="day">周一 - 周五</span>
                        <span className="time">9:00 - 18:00</span>
                    </div>
                    <div className="hour-item">
                        <span className="day">周六</span>
                        <span className="time">10:00 - 16:00</span>
                    </div>
                    <div className="hour-item">
                        <span className="day">周日</span>
                        <span className="time">休息</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;