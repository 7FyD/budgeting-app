"use client";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import TextInput from "../components/inputs/TextInput";
import Button from "../components/Button";
import getCurrentUser from "../actions/getCurrentUser";

import Image from "next/image";
import Heading from "../components/Heading";
import { SafeUser } from "../types";

interface LoginPageProps {
  currentUser?: SafeUser | null;
}

const LoginPage: React.FC<LoginPageProps> = ({ currentUser }) => {
  if (currentUser?.id) {
    return <div>You are already logged in.</div>;
  }

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.refresh();
        router.push("/"); // change to dashboard after impleneting that
        toast.success("Logged in");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <div
      className={`
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        relative
        inset-0
        z-1
        outline-none
        focus:outline-none
        bg-cover
        bg-center 
        min-h-[75vh]
      `}
    >
      <div
        className="
          relative
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto
          h-full
          lg:h-auto
          md:h-auto
        "
      >
        <Heading title="Welcome back!" center />
        <div className="flex flex-col gap-4 py-6">
          <TextInput
            id="email"
            label="Email"
            disabled={false}
            register={register}
            errors={errors}
            required
          />
          <TextInput
            id="password"
            label="Password"
            type="password"
            disabled={false}
            register={register}
            errors={errors}
            required
          />
        </div>
        <Button
          label="Login"
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default LoginPage;
