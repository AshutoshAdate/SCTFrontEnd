import React from "react";
export const Donation = (props) => {
    return (
        <div>
            <div id="donation">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>Donation</h2>
                                <p>🙏 <strong>Donate to Sri Chintamani Trust (ಶ್ರೀ ಚಿಂತಾಮಣಿ ಟ್ರಸ್ಟ್) – Support Divine Service & Charity</strong> 🙏</p>

                                <p>Your generous contributions help us construct the <strong>Mahadevi and Sakshi Ganesha Temple</strong> and continue our sacred mission of devotion, service, and community welfare.</p>

                                <p>Every donation supports <strong>daily poojas, temple maintenance, annadanam (food donation), festival celebrations, and charitable initiatives</strong> aimed at helping those in need.</p>

                                <p><strong>How Your Donation Helps:</strong></p>
                                <p>✅ <strong>Temple Construction</strong> – Preserve the sanctity and heritage of our sacred temple.</p>
                                <p>✅ <strong>We are now raising funds to construct a temple and a coaching center, which will serve as pillars of spiritual guidance and education for the community.</strong></p>
                                <p>✅ <strong>Annadanam (Food Donation)</strong> – Serve free meals to devotees and the underprivileged.</p>
                                <p>✅ <strong>Religious & Cultural Activities</strong> – Organize poojas, festivals, and spiritual discourses.</p>
                                <p>✅ <strong>Community Welfare</strong> – Support educational, medical, and social upliftment programs.</p>
                                <p>✅ <strong>Notice</strong> To ensure receipt issuance, please share the donation details with us by email at admin@srichintamanitrust.com or via WhatsApp at 9845780800 or 776087868.</p>

                                <p><strong>📌 Ways to Donate:</strong></p>
                                {/* <p>💳 <strong>Online Payment</strong> – Secure payment through UPI, Net Banking, Credit/Debit Cards.</p> */}
                                <p>🏦 <strong>Bank Transfer</strong> – Direct deposit to our trust’s official account.</p>
                                <p>🏛️ <strong>In-Person Donations</strong> – Offer your seva at the temple donation counter.</p>

                                <p>🙏 <strong>Every offering, big or small, brings divine blessings and makes a difference.</strong></p>
                                <p>📢 <strong>Join us in preserving tradition and spreading kindness!</strong></p>

                                <p>✨ <strong>Donate now and be a part of this sacred journey.</strong> ✨</p>

                                <p><strong>🙏Ganpati Bappa Morya🙏</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">
                        <div className="contact-item">
                            <h3>Bank Details</h3>
                            <p>
                                <span>
                                    <i className="fa fa-university"></i> Bank Name
                                </span>
                                {" "}
                                <strong>- {props.data ? props.data.Name : "loading"}</strong>
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-check"></i> Account Name
                                </span>
                                {" "}
                                <strong>- {props.data ? props.data.AccountName : "loading"}</strong>
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-user"></i> Account Number
                                </span>{" "}
                                <strong>- {props.data ? props.data.AccountNumber : "loading"}</strong>
                            </p>
                        </div>
                        <div className="contact-item">
                            <p>
                                <span>
                                    <i className="fa fa-circle"></i> IFSC Code
                                </span>{" "}
                                <strong>- {props.data ? props.data.IFSCCode : "loading"}</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}