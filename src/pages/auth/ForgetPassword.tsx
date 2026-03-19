import Logo from "../../components/logo/Logo";
import { H1 } from "../../components/ui/typography/PageTitle";

export default function ForgetPassword() {
  return (
    <>
      {/* Design  */}
      <section className="flex w-full p-5 h-screen">
        
        <div className="w-1/3 bg-green-900 flex flex-col h-full p-5 text-white items-center justify-center rounded-md gap-5">
          <Logo />
          <div className="flex gap-5 flex-col w-full items-center justify-center">
            <H1 className="text-white">Forget Password</H1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At rerum
              odio harum architecto ut beatae, quos, suscipit placeat quidem
              quibusdam distinctio dicta ipsa molestias natus voluptas pariatur
              dignissimos omnis maxime?
            </p>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}