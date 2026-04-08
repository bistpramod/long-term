import z from "zod";
import type { noUnrecognized } from "zod/v3";

export interface IUsername {
  username: string;
}

export interface ICredentials extends IUsername {
  password: string;
}

export interface IResetPassword {
  password: string, 
  confirmPassword: string
}


export const LoginSchema = z.object({
  // username: z.email("Incorrect Email format").nonempty().nonoptional(),
  username: z.string().nonempty().nonoptional(),
  password: z.string().nonempty("Password is Required").nonoptional(),
});


export interface IUserDetails {
   id:string;
    firstName: string;
    lastName: string;
    email: string;
    gneder: string
    phone: string;
    image:string;
    address:{
      address:string,
      city:string,
      state: string,
      stateCodr:string,
      postalCode:string,
      coordinates:{
        lat: number;
        lng: number;

      };
      country:string;

    };
    role:string;

}