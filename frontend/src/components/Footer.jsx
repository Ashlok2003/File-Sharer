import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <div className="container p-4 pb-0">
                <section className="mb-4">


                    <Button
                        variant="info"
                        className="text-white btn-floating m-1"
                        href="https://www.twitter.com/ashlok2003"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </Button>

                    <Button
                        variant="primary"
                        className="text-white btn-floating m-1"
                        href="https://www.linkedin.com/in/ashlok-chaudhary-6841b9292/"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </Button>


                    <Button
                        variant="dark"
                        className="text-white btn-floating m-1"
                        href="https://www.github.com/ashlok2003"
                        role="button"
                    >
                        <i className="fab fa-github"></i>
                    </Button>
                </section>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright: &emsp;
                <a className="text-body" href="https://github.com/Ashlok2003/">Ashlok@Junior_Developer</a>
            </div>
        </footer>
    );
};

export default Footer;
