import { TextInput } from "../ui/form/Input";
import { FormLabel } from "../ui/form/Label";
import { LoginSchema, type ICredentials } from "./Auth.contract";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AxiosInstance from "../../config/ApiClient";
import Cookies from "js-cookie";

export default function LoginForm() {
  
  const {control, handleSubmit, formState: {errors}} = useForm<ICredentials>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema)
  });

  const login = async(credentials: ICredentials) => {
    try {
    //  let response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}auth/login`, {
    //     method: "POST",
    //     headers:{ "Content-Type": "application/json"},
    //     // headers:{ "Content-Type": "application/x-www-form-urlencoded"},
    //     // headers:{ "Content-Type": "multipart/form-data"},

    //     body: JSON.stringify(credentials)
    //  });
    //  response = await response.json();
    //  console.log(response)


     

     const response = await AxiosInstance.post("auth/login",{...credentials,
      expiresInMins: 50 ,

    }) as {accessToken:string}
    Cookies.set("auth_key_61" , response.accessToken, {expires: 1, sameSite : "lax", secure: true }),
    

     const loggedInUser = await AxiosInstance.get("auth/me") as {roles:string}
     router('/'+loggedInUser.role)
     catch(exception){console.log(exception)}}





    } catch(exception) {
      console.log(exception)
    }


  }

  return (
    <form onSubmit={handleSubmit(login)} className="flex flex-col gap-5">
      <div className="flex w-full items-center">
        <FormLabel htmlFor="username">User Name: </FormLabel>
        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            control={control}
            errMsg={errors?.username?.message}
            type="text"
            name="username"
          />
        </div>
      </div>

      <div className="flex w-full items-center">
        <FormLabel htmlFor="password">Password: </FormLabel>
        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            errMsg={errors?.password?.message}
            control={control}
            type="password"
            name="password"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-end">
        <a
          href="/forget-password"
          className="text-teal-700 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96"
        >
          Forgot password?
        </a>
      </div>
      <div className="flex w-full items-center gap-3">
        <button
          type="reset"
          className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-red-700 w-full bg-red-800 text-white flex items-center justify-center p-2"
        >
          Reset
        </button>
        <button className="rounded-md cursor-pointer transition hover:scale-98 hover:bg-teal-700 w-full bg-teal-800 text-white flex items-center justify-center p-2">
          Submit
        </button>
      </div>
    </form>
  );
}