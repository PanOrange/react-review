import React, { Component } from 'react';
import SocialIcon from '../SocialIcon';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-inner">
                    <div className="social">
                        <h2>Follow us</h2>
                        <ul>
                            <li>
                                <SocialIcon name="fa fa-facebook"></SocialIcon>
                            </li>
                            <li>
                                <SocialIcon name="fa fa-instagram"></SocialIcon>
                            </li>
                            <li>
                                <SocialIcon name="fa fa-dribbble"></SocialIcon>
                            </li>
                            <li>
                                <SocialIcon name="fa fa-github"></SocialIcon>
                            </li>
                            <li>
                                <SocialIcon name="fa fa-500px"></SocialIcon>
                            </li>
                            <li>
                                <SocialIcon name="fa fa-phone"></SocialIcon>
                            </li>
                            <li>
                                <SocialIcon name="fa fa-envelope-o"></SocialIcon>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <div>Central ave, 123</div>
                        <div>01001, Ukraine, Kyiv</div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;