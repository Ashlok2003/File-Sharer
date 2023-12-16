import React from 'react';

function Technologies() {
    const techItems = [
        {
            image: 'https://i.ibb.co/dpCgtjC/node-js-736399-1280.png',
            title: 'Node.js - Backend Development',
            description: 'Node.js is a powerful JavaScript runtime that allows developers to build scalable network applications.'
        },
        {
            image: 'https://i.ibb.co/98xW1zY/React.png',
            title: 'React - Frontend Development',
            description: 'React is a popular JavaScript library used for building user interfaces, emphasizing reusability and efficiency.'
        },
        {
            image: 'https://i.ibb.co/mD1t6K9/Bootstrap.png',
            title: 'Bootstrap - CSS Framework for Design',
            description: 'Bootstrap is a front-end framework that enables the creation of responsive and sleek designs using HTML, CSS, and JavaScript.'
        },
        {
            image: 'https://i.ibb.co/jMZ2Hwn/MongoDB.webp',
            title: 'MongoDB Atlas - Database Management',
            description: 'MongoDB Atlas is a fully managed cloud database service designed to store and manage large volumes of data.'
        },
    ];

    return (
        <div className='container mt-5'>
            <div className="row">
                {techItems.map((item, index) => (
                    <div key={index} className="col-sm-12">
                        <div className="card mb-3">
                            <img src={item.image} alt="" className='card-img-top img-fluid w-25 mx-auto mt-3' />
                            <div className="card-body text-center">
                                <h5 className='card-title fw-bolder text-decoration-underline link-offset-1'>{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Technologies;
