import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-6 w-4/5 m-auto gap-10">
      <div>
        <h1 className="text-4xl">DearDairy</h1>
        <p className="text-lg">Welcome to the World of Journal and healing</p>
      </div>
      <SignIn />
    </div>
  );
}
