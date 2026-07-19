import React, { useState } from 'react';
import './booking.css';

function Booking() {
    const [formData, setFormData] = useState({
        fullName: '',
        movieName:'',
        email: '',
        phone: '',
        date: '',
        guests: '1',
        serviceType: 'Standard'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking submitted successfully!\n\nID: ${'001'}\nName: ${formData.fullName}\nMovie Name: ${formData.movieName}\nDate: ${formData.date}`);
        console.log('Booking Data:', formData);
    };

    return (
        <section className="booking-section py-5" id='booking'>
            <div className="container">
                <h4 className="booking-heading">Booking Now</h4>

                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-12 p-0">
                        <div className="booking-card p-4 p-md-5">
                            <h2 className="booking-title text-center mb-4">Book Your Slot</h2>
                            <p className="booking-subtitle text-center mb-3">Enter your details and make your booking today.</p>
                            
                            {/* Form */}
                            <form onSubmit={handleSubmit}>

                                {/* Full Name */}

                                <div className="mb-4">
                                    <label className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control booking-input"
                                        name="fullName"
                                        placeholder="Enter your name"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Movie Name</label>
                                    <input
                                        type="text"
                                        className="form-control booking-input"
                                        name="movieName"
                                        placeholder="Enter the movie name"
                                        value={formData.movieName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Email and Phone (Row) */}
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control booking-input"
                                            name="email"
                                            placeholder="name@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label">Phone</label>
                                        <input
                                            type="tel"
                                            className="form-control booking-input"
                                            name="phone"
                                            placeholder="Phone number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Date and Guests */}

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label">Date</label>
                                        <input
                                            type="date"
                                            className="form-control booking-input"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <label className="form-label">Number of Guests</label>
                                        <select
                                            className="form-select booking-input"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                        >
                                            <option value="1">1 Person</option>
                                            <option value="2">2 People</option>
                                            <option value="3">3 People</option>
                                            <option value="4">4+ People</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Service Type */}

                                <div className="mb-4">
                                    <label className="form-label">Service Type</label>
                                    <div className="d-flex gap-3 mt-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="serviceType"
                                                id="standard"
                                                value="Standard"
                                                checked={formData.serviceType === 'Standard'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="standard">Standard</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="serviceType"
                                                id="premium"
                                                value="Premium"
                                                checked={formData.serviceType === 'Premium'}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor="premium">Premium</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}

                                <div className="d-grid mt-5">
                                    <button type="submit" className="btn btn-booking py-3 fw-bold">
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;