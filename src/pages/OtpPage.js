import React from "react";
import "./OtpPage.css";
const OtpPage = () => {
    return (
        <> 
        <div className="step my-2 mr-2 p-3">Step -2</div>
            <div className="Otpbody">
                <div class="container">
                    <h2>Verify Your Mobile Number</h2>
                    <p>
                        We emailed you the six digit code to linked mobile number <br />
                        Enter the code below to confirm your phone number
                    </p>

                    <div class="code-container">
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                        <input type="number" class="code" placeholder="0" min="0" max="9" required />
                    </div>

                    <div>
                        <button type="button" class="btn btn-primary">Verify</button>
                    </div>

                    <small class="info">
                        If you didn't receive a code !! <strong> RESEND</strong>
                    </small>

                </div>

            </div>
        </>
    );
};

export default OtpPage;