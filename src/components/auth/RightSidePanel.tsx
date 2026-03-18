import { H1 } from "../ui/typography/PageTitle";
import LoginForm from "./LoginForm";

export default function RightSidePanel() {
  return (
    <div className="w-2/3 flex flex-col gap-10 bg-gray-100 p-10 rounded-md">
      <div className="flex border-b border-b-green-900/30 pb-5">
        
        <H1 className="text-green-900">
          <em>Login Form</em>
        </H1>

      </div>

      <LoginForm />
    </div>
  );
}