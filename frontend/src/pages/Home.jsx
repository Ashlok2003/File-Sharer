import { Button, ButtonGroup, Card } from 'react-bootstrap'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Review from '../components/Review'
import { Toaster, toast } from 'sonner';

function Home() {

    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (!data) {
            toast("Please Enter The Message !", {
                action: {
                    label: <i className="fa-solid fa-xmark"></i>,
                    onClick: toast.dismiss,
                }
            })

            return;
        }

        const message = `Thanks ${data.email} For Your Feedback ! We will Work On Your Feedback as Soon as Possible :)`;
        toast(message, {
            action: {
                label: <i className="fa-solid fa-xmark"></i>,
                onClick: toast.dismiss
            },
        });
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <Toaster position='bottom-right' />
            </div>
            <div className="row align-items-center justify-content-between mb-3">
                <div className="col-md-6 text-justify">
                    <h1 className='fw-bolder display-3'>File Sharex</h1>
                    <h2 className='fw-bolder mt-3'>Simplify your file sharing experience today</h2>
                    <p className='text-secondary lead mt-3'>Seamlessly upload, organize, and share your documents, images, videos, and more with ease.
                        Our platform ensures top-notch security while providing you with customizable sharing options, collaborative tools,
                        and lightning-fast performance across all devices. Simplify your file sharing experience today with </p>
                    <ButtonGroup className='w-100 mt-3'>
                        <Button variant='dark' className='fw-bolder py-2 px-3 fs-5 rounded-0 w-100 border-0' style={{ 'backgroundColor': '#0D0C46' }}
                            onClick={() => navigate('/dashboard')}>Get Started </Button>
                        <Button variant='light' className='fw-bolder py-2 px-3 fs-5 rounded-0 w-100'>Read More </Button>
                    </ButtonGroup>
                </div>
                <div className="col-md-6">
                    <img src="https://i.ibb.co/2FprGTn/5568497-2867455.jpg" alt="File Sharer" className='img-fluid' />
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <h1 className='fw-bolder display-3 text-uppercase'>Why Choose us ?</h1>
                </div>
                <div className="col-sm-12 d-lg-flex align-items-lg-center justify-content-lg-between">
                    <div className="col-lg-6 col-md-12">
                        <img src="https://i.ibb.co/LkmnBC8/7117863-3369473.jpg" alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <h1 className='fw-bolder text-decoration-underline link-offset-1'>Features Provided by us</h1>
                        <div className='mt-3'>
                            <Card className='mb-2'>
                                <Card.Body>
                                    <Card.Title className='fw-bolder'><i className="fa-solid fa-shield-halved"></i> Secure File Transfer</Card.Title>
                                    <Card.Text>
                                        Prioritizing user privacy and security, the platform employs robust encryption protocols to safeguard files during transit and storage. Users can share sensitive documents or media with confidence.
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card className='mb-2 shadow'>
                                <Card.Body>
                                    <Card.Title className='fw-bolder'><i className="fa-solid fa-circle-chevron-up"></i> Customizable Sharing Options</Card.Title>
                                    <Card.Text>
                                        Users can control file access through various sharing settings, such as setting expiration dates for links, limiting the number of downloads, or restricting access to specific users with password protection.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='mb-2 shadow'>
                                <Card.Body>
                                    <Card.Title className='fw-bolder'><i className="fa-solid fa-gauge-simple-high"></i> Scalability and Performance</Card.Title>
                                    <Card.Text>
                                        The platform is designed to handle varying file sizes and large volumes of data efficiently. Utilizing high-performance servers ensures fast upload and download speeds.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='mb-2 shadow'>
                                <Card.Body>
                                    <Card.Title className='fw-bolder'><i className="fa-solid fa-heart"></i> Cross-Platform Compatibility</Card.Title>
                                    <Card.Text>
                                        The website supports multiple file formats and works seamlessly across different operating systems and devices, including desktops, tablets, and smartphones.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row d-lg-flex align-items-lg-center justify-content-lg-center mt-5">
                <div className="col-sm-12 text-center">
                    <h1 className='fw-bolder display-3 text-uppercase'>Write a Review !</h1>
                </div>
                <div className="col-lg-6 col-md-12">
                    <img src="https://i.ibb.co/pP29qW4/4521631-2391280.jpg" alt="" className='img-fluid'></img>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Review notification={onSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Home