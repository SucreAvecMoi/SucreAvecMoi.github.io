import React from 'react';
import './ContactMe.css';

function ContactMe() {

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Contact Me</h1>
                <p>Have any questions or suggestions? I'd love to hear from you!</p>
            </div>

            <div className="contact-content">
                {/* 联系信息卡片 */}
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <div className="contact-cards">
                        <div className="contact-card">
                            <div className="contact-icon">📧</div>
                            <h3>Email</h3>
                            <p>sucre_web@163.com</p>
                            <a href="mailto:sucre_web@163.com" className="contact-link">
                                Send email to me
                            </a>
                        </div>

                        {/* <div className="contact-card">
                            <div className="contact-icon">💬</div>
                            <h3>WeChat</h3>
                            <p>SucreAvecMoi</p>
                            <span className="contact-note">Scan QR code to add friend</span>
                        </div> */}

                        <div className="contact-card">
                            <div className="contact-icon">🌐</div>
                            <h3>GitHub</h3>
                            <p>@SucreAvecMoi</p>
                            <a href="https://github.com/SucreAvecMoi" target="_blank" rel="noopener noreferrer" className="contact-link">
                                Visit Profile
                            </a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">📍</div>
                            <h3>Address</h3>
                            <p>Shanghai · China</p>
                            <span className="contact-note">Welcome for offline communication</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 工作时间 */}
            <div className="working-hours">
                <h3>Working Hours</h3>
                <div className="hours-grid">
                    <div className="hour-item">
                        <span className="day">Monday - Friday</span>
                        <span className="time">9:00 - 18:00</span>
                    </div>
                    <div className="hour-item">
                        <span className="day">Saturday</span>
                        <span className="time">10:00 - 16:00</span>
                    </div>
                    <div className="hour-item">
                        <span className="day">Sunday</span>
                        <span className="time">Rest</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;