import React from 'react'
import { FormGroup } from 'react-bootstrap'

import './style.css'

export default function AdminContact() {
    return (
        <div className='Contact'>
            <div class="slider">
                <p class="text-center fs-1">Liên hệ với chúng tôi</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="headquarter">
                            <h2>Trụ sở chính</h2>
                            <p>
                                The Mina Studio <br/>
                                8241 Us 41, <br/>
                                Monteagle, <br/>
                                TN, 37356
                            </p>
                        </div>
                        <div class="collaboration">
                            <h2>Cộng tác</h2>
                            <p>
                                Reach out to collaborate at 
                                collab@mina.com
                            </p>
                        </div>
                    </div>
                    <div class="col-6">
                        <FormGroup>
                            <div class="mb-3">
                                <div class="col">
                                <label for="exampleInputEmail1" class="form-label">Name*</label>
                                    <input type="text" class="form-control" id="firstname" placeholder="Your Name" aria-label="First name" maxlength="30"/>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="col">
                                <label for="exampleInputEmail1" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="firstname" placeholder="Your last name" aria-label="First name" maxlength="30"/>
                                </div>
                            </div>
                            <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Your email*</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Your email address" aria-describedby="emailHelp"/>
                            </div>
                            <div class="about mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message*</label>
                                <textarea class="form-control" id="about" placeholder="Enter your message" rows="3" maxlength="10000"></textarea>
                            </div>
                            <button type="submit" class="btn">Submit</button>
                        </FormGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}