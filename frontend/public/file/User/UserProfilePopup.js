import React, { useState } from "react";
import '../../../src/Popup.css'

const UserProfilePopup = ( {closePopup}) => { // add inserted before
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        password: "",
        email: "",
        formError: "",
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            username: "",
            password: "",
            email: "",
            formError: "",
        };

        if (formData.username.length < 2 || formData.username.length > 60) {
            newErrors.username = "Username must be between 2 and 60 characters.";
            valid = false;
        }

        if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
            valid = false;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted:", formData);
            // Submit the form data db looooooooooooooooooooogic
            setErrors({
                username: "",
                password: "",
                email: "",
                formError: "",
            });
        } else {
            setErrors((prev) => ({
                ...prev,
                formError: "Please correct the errors above.",
            }));
        }
    };

    return (
        <div className='popup-overlay'><div className='popup-content'><form id="EditYourData" onSubmit={handleSubmit}>
            <label htmlFor="username">Username [2; 60] :</label>
            <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <span id="usernameError" className="error">
        {errors.username}
      </span>
            <br/>
            <br/>
            <label htmlFor="password">Password &gt;= 8 :</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <span id="passwordError" className="error">
        {errors.password}
      </span>
            <br/>
            <br/>
            <label htmlFor="email">e-mail:</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <span id="emailError" className="error">
        {errors.email}
      </span>
            <br/>
            <br/>
            <button type="submit">Enter</button>
            <div id="enterError" className="error-message">
                {errors.formError}
            </div>
        </form>
    <button onClick={closePopup}>Close</button>
        </div></div>)
    ;
};

export default UserProfilePopup;
