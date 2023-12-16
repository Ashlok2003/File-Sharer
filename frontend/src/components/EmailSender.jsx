import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Input from './Input';


function EmailSender({ emailKey, notification }) {

  const onSubmit = async (data, event) => {
    event.preventDefault();

    const mailCredentials = {
      "uuid": emailKey,
      "emailTo": data.receiver,
      "emailFrom": data.sender,
    };

    try {
      /* Since the error handling has been done on server side */
      const response = await axios.post('https://file-sharer-server.onrender.com/api/files/send', mailCredentials, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response && response.data.status) {
        notification('success', 'Email sent successfully');
      }
      else if (response) {
        notification('error', 'Already send The files !');
      }
      else {
        notification('error', 'Try After Sometime later !');
      }

    } catch (error) {

    }


  }


  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Form className='border' onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid py-1 px-2">
        <div className="row d-lg-flex align-items-lg-center justify-content-lg-between">
          <div className='col-lg-1 col-md-12'>
            <div className="d-none d-lg-block">
              <Button variant='light'><i className="fa-solid fa-envelope fs-4"></i></Button>
            </div>
            <div className="d-lg-none d-md-block">
              <Button variant='light' className='fw-bolder'><i className="fa-solid fa-envelope"></i> Mail me My Files </Button>
            </div>
          </div>
          <div className="col-lg-11 col-md-12 d-lg-flex align-items-lg-center justify-content-lg-between">
            <Input inputType='email' inputClassName='form-control py-2'
              labelClassName='fw-bolder mb-2' label='Sender' placeholder='sender@email.com'
              {...register('receiver', {
                required: true,
                validate: {
                  matchPattern: (value) => {
                    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return regex.test(value) || "Invalid Email Address";
                  }
                }
              })}
            />
            <Input inputType='email' inputClassName='form-control py-2 ms-lg-2 my-2'
              labelClassName='fw-bolder mb-2' label='Sender' placeholder='receiver@email.com'
              {...register('sender', {
                required: true,
                validate: {
                  matchPattern: (value) => {
                    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return regex.test(value) || "Invalid Email Address";
                  }
                }
              })}
            />
            <Button variant='light' className='ms-2' type='submit'><i className="fa-solid fa-paper-plane fs-4"></i></Button>
          </div>
        </div>
        <div className="row">

          {errors.sender && <span>{errors.sender.message}</span>}
          {errors.receiver && <span>{errors.receiver.message}</span>}
        </div>
      </div>
    </Form>

  )
}

export default EmailSender