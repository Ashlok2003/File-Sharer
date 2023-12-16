import React, { useState, useEffect, useCallback } from 'react'
import { ProgressBar } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUploader = ({ setFileDetails }) => {

    const [key, setKey] = useState(null);

    const [progress, setProgress] = useState(false);

    const onDrop = useCallback(async (data) => {

        if (data.length !== 1) {
            console.log('Please Upload Only One File');
            return;
        }

        const fileToUpload = data[0];
        const formData = new FormData();
        formData.append('myfile', fileToUpload);

        try {
            const response = await axios.post("https://file-sharer-server.onrender.com/api/files", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setKey(response.data.uuid);
            setProgress(true);
        } catch (error) {
            console.log('Error : ', error);
        }
    }, []);

    useEffect(() => {

        const fetchFileDetails = async () => {
            if (key) {
                try {
                    const response = await axios.post(`https://file-sharer-server.onrender.com/files/${key}`);
                    setProgress(false);
                    setFileDetails(response.data);
                    
                } catch (error) {
                    console.log('Error : ', error)
                }
            }
        }

        setTimeout(() => {
            fetchFileDetails();
        }, 2000);
    }, [key]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, maxFiles: 1, });

    return (
        <div {...getRootProps()} style={isDragActive ? { border: '2px dashed #aaaaaa', padding: '20px', textAlign: 'center' } : {}}>
            <div>
                <input {...getInputProps()} />
                <img src="https://i.ibb.co/0C3PhGt/5566821-2888068.jpg" alt="upload file" className='img-fluid' style={{ cursor: 'pointer' }} />
            </div>
            {
                progress ?
                    <div>
                        {
                            progress < 100 ? <h6 className='fw-bolder'>Files are Uploading</h6>
                                : <h6 className='fw-bolder'>Files are Uploaded Successfully</h6>
                        }
                        <ProgressBar variant="success" animated now={100} label='Uploading in Progress....' />
                    </div> : <h6 className='fw-bolder'>Drag and Drop Your File Here</h6>
            }

        </div>
    )
}

export default FileUploader