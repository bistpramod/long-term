// Fixed: Corrected import path from 'Auth.contracts' to 'Auth.contract' to match actual filename
// Fixed: Installed project dependencies to resolve React module not found errors
import type { ReactNode } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";
// Fixed import path: removed 's' from 'contracts' to match actual filename 'Auth.contract.ts'
import { IUserDetail, type ICredentials } from "../../components/auth/Auth.contract";
import Cookies from "js-cookie";
import axiosInstance from "../../config/ApiClient";

export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {

    const [authUser, setAuthUser] = useState<IUserDetail | null>(null);
    const router = useNavigate();

    const getLoggedInUser = async () => {
        try {
            const loggedInUser = (await axiosInstance.get("auth/me")) as IUserDetail;
            setAuthUser(loggedInUser);
            return loggedInUser;
        } catch (exception) {
            console.log(exception);
            throw exception;
        }
    }

    const login = async (credentials: ICredentials): Promise<IUserDetail | void> => {
        try {
            const response = await axiosInstance.post("auth/login", {
                ...credentials,
                expiresInMins: 24 * 60,
            }) as { accessToken: string };

            Cookies.set("auth_key_61", response.accessToken, {
                expires: 1,
                sameSite: "lax",
                secure: true,
            });
             return await getLoggedInUser()
            // const loggedInUser = await axiosInstance.get("auth/me") as IUserDetail;
            // setAuthUser(loggedInUser);
            // router("/" + loggedInUser.role);
        } catch (exception) {
            console.log(exception);
            throw exception;
        }
    };

    return (
        <AuthContext.Provider value={{ login: login, authUser: authUser }}>
            {children}
        </AuthContext.Provider>
    );
}

// auth management 