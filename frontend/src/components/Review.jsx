import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import Input from './Input';
function Review({ notification }) {


    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        notification(data);
    }

    return (
        <Form className='mt-2' onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className='mb-3 text-start' controlId='sendersEmail'>
                <Input inputClassName='form-control py-3 border-black' inputType='email' labelText="Senders Email Address" labelClassName="fw-bolder mb-2" placeholder="example@email.com"
                    {...register('email', {
                        required: true,
                    })}
                />
            </Form.Group>
            <Form.Group className='mb-3 text-start' controlId='Message'>
                <Input inputClassName='form-control py-5 border-black' inputType='text' labelText="Feedback" labelClassName="fw-bolder mb-2" placeholder="Please Enter Your Valuable Feedback..."
                    {...register('feedback', {
                        required: true,
                    })} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='senderButton'>
                <Button variant="danger" className="fw-bolder w-100 border-0" type='submit'
                    onClick={() => notification()}>Send The Message</Button>
            </Form.Group>
        </Form>

    )
}

export default Review