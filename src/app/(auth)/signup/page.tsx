import { SignupForm } from "./_components/signup-form";

const SignUp = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row overflow-auto bg-gray-light">
      <div className="w-full h-full md:w-1/2 mt-10 md:mt-0">
        <SignupForm />
      </div>
    </section>
  );
};
export default SignUp;
