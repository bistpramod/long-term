import Logo from "../logo/Logo";
import { H1 } from "../ui/typography/PageTitle";

export default function LeftSidePanel() {
  return (
    <div className="w-1/3 bg-emerald-800 rounded-md p-10 items-center justify-center flex flex-col gap-5 text-white">
      <Logo />
      <H1 className="text-green-100">
        Login Page
      </H1>
      <p className="text-center p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
        doloremque accusantium facilis nostrum amet? Eveniet eius quae beatae
        voluptates odit ullam nostrum temporibus animi iusto laborum.
        Consectetur libero repudiandae quibusdam!
      </p>
    </div>
  );  
}