import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";


export default function ProtectedRoute({ children }) {

    const apiUrl = import.meta.env.VITE_UserUrl;
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {

        const verifyToken = async () => {

            const token = localStorage.getItem("token");
            // console.log(token,'dekho');

            if (!token) {
                setIsValid(false);
                return;
            }

            try {

                const res = await axios.get(
                    `${apiUrl}/verify-token`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                if (res.data.status) {
                    // console.log(res.data);
                    setIsValid(res.data.status);

                }



            } catch (error) {

                localStorage.removeItem("token");
                localStorage.removeItem("userName");
                setIsValid(false);


            }
        };

        verifyToken();

    }, []);

    if (isValid === null) {
        return <h1>Loading...</h1>;
    }

    return isValid
        ? children
        : <Navigate to="/login-page" replace />;
}