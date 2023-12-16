import React, { useState } from 'react'
import { Toaster, toast } from 'sonner';
import FileUploader from '../components/FileUploader';
import EmailSender from '../components/EmailSender';

function Dashboard() {
  const [fileDetails, setFileDetails] = useState(null);

  const notification = (type, message) => {
    if (type === 'error')
      toast.error(message);
    else
      toast.success(message); z
  }

  return (
    <div className='container mt-5'>
      <div className="row">
        <Toaster position="top-right" richColors />
      </div>
      <div className="row d-lg-flex align-items-lg-center justify-content-lg-between">

        <div className="col-lg-6 col-md-12 text-center">
          <FileUploader setFileDetails={setFileDetails} />
        </div>

        {/* This should be hidden when we received out uploaded file window */}
        <div className="col-lg-6 col-md-12 mt-3">
          {
            fileDetails ? <>
              <div className="p-2 text-center order-sm-2">
                <h3 className="fw-bolder text-decoration-underline link-offset-1">Your File is Ready to Download</h3>
                <div className="text-center mb-2">
                  <img className="img-fluid w-50 p-1 border mt-4" src={fileDetails.qr_code} alt="" />
                </div>

                <h6 className="fw-bolder">File Name: {fileDetails.filename}</h6>
                <h6 className="fw-bolder mt-1">Total File Size: {fileDetails.filesize} KB</h6>
                <div className="d-flex align-items-center justify-content-center border mt-3">

                  <input type="text" defaultValue={`${fileDetails.download_url}`} className="form-control rounded-0" readOnly id="downloadInput" />
                  <span className="border-black" onClick={() => {
                    navigator.clipboard.writeText(`${fileDetails.download_url}`);
                    toast.success('Copied To Clipboard !')
                  }}>
                    <i className="fas fa-copy fs-4 mx-2"></i>
                  </span>
                </div>

                <div>
                  <EmailSender emailKey={fileDetails.uuid} notification={notification} />
                </div>
              </div>
            </> :
              <>
                <div className="col-md-12 p-3">
                  <h4 className='fw-bolder text-decoration-underline link-offset-1'>Terms and Conditions</h4>
                  <div className='mt-3 mb-2'>
                    <h6 className='fw-bolder'>1. File Size Limit:</h6>
                    <p>Users can upload files with a maximum size of 100 MB per upload session. Larger files will not be accepted.</p>
                  </div>
                  <div className='mt-3 mb-2'>
                    <h6 className='fw-bolder'>2. File Expiry:</h6>
                    <p>Uploaded files are stored temporarily and will be automatically deleted after 1 hour. Users are advised to ensure timely downloads to avoid loss of data.</p>
                  </div>
                  <div className='mt-3 mb-2'>
                    <h6 className='fw-bolder'>3. Acceptable Use:</h6>
                    <p>Users are solely responsible for the content they upload and share. The platform prohibits the sharing of illegal, explicit, or malicious content. Any violation may result in the immediate removal of content and the suspension of the user's account.</p>
                  </div>
                  <div className='mt-3 mb-2'>
                    <h6 className='fw-bolder'>4. Security:</h6>
                    <p>The platform implements security measures to protect user data during transit and storage. However, users are encouraged to exercise caution and avoid sharing sensitive or confidential information.</p>
                  </div>
                  <div className='mt-3 mb-2'>
                    <h6 className='fw-bolder'>5. Usage Rights:</h6>
                    <p>By uploading files, users grant the platform the right to host, display, and distribute the content solely for the purpose of providing the file-sharing service.</p>
                  </div>
                </div>
              </>
          }
        </div>

      </div>

      <div className="row text-center mb-5">
        <h6 className='fw-bolder text-secondary'> * By using this file-sharing platform, users agree to abide by these terms and conditions. Continued use of the service indicates acceptance of these terms.</h6>
      </div>

    </div>
  )
}

export default Dashboard