import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Authentication = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        countryCode: "",
        phoneNo: "",
    });

    const SignInButton = async () => {

        // Create a script element
        const script = document.createElement('script');
        script.src = 'https://www.phone.email/sign_in_button_v1.js';
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);

        const phoneEmailListener = (userObj) => {
            const {
                user_json_url,
                user_country_code,
                user_phone_number,
            } = userObj;

            setIsAuthenticated(true);

            setUserDetails({
                countryCode: user_country_code,
                phoneNo: user_phone_number,
                url: user_json_url,
            });

        };

        window.phoneEmailListener = phoneEmailListener;

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    };


    useEffect(() => {

        if (!isAuthenticated) {
            SignInButton();
        }

        if (isAuthenticated) {
            navigate("/buyProduct", {
                state:
                {
                    countryCode: userDetails.countryCode,
                    phoneNo: userDetails.phoneNo
                }
            }
        );
        }
    }, [isAuthenticated, navigate]);

    return (
        <React.Fragment>

            <div className="pe_signin_button" data-client-id="18915672557661999725"></div>

        </React.Fragment>
    );
};