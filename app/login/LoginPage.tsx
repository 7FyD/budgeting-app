"use client";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import TextInput from "../components/inputs/TextInput";
import Button from "../Button";

const LoginPage = () => {
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
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
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
    <div className="flex flex-col gap-4">
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
      <Button disabled={false} label="Login" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default LoginPage;
