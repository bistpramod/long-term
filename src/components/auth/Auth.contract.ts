import z from "zod";

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