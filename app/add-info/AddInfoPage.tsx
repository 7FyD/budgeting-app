"use client";

import { useRouter } from "next/navigation";
import TextInput from "../components/inputs/TextInput";
import { useRequireBudget } from "../hooks/useRequireBudget";
import { SafeUser } from "../types";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "../components/Button";

interface AddInfoPageProps {
  currentUser?: SafeUser | null;
}

const AddInfoPage: React.FC<AddInfoPageProps> = ({ currentUser }) => {
  if (!currentUser) return <div>Please log in first.</div>;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      monthlyIncome: "",
      rentAndUtilities: "",
      extraExpenses: "0",
      extraIncome: "0",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/settings", data)
      .then(() => {
        toast.success("Budged works!");
        router.push("/");
      })
      .catch((error) => {
        toast.error(
          " Invalid password confirmation. \n If the error persists, please contact support."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="flex flex-col gap-4">
      Input your budgeting info! (total monthly budget, rent, other mandatory
      expenses such as debts/mortgage, etc)
      <TextInput
        id="monthlyIncome"
        label="How much do you make per month? (NET)"
        register={register}
        errors={errors}
      />
      <TextInput
        id="rentAndUtilities"
        label="How much do you pay for housing? (rent or mortgage)"
        register={register}
        errors={errors}
      />
      <TextInput
        id="extraExpenses"
        label="Do you have any other payments or debts such as a car loan or credit card debt?"
        register={register}
        errors={errors}
      />
      <TextInput
        id="extraIncome"
        label="Do you receive any other income, such as performance bonuses or dividend payments?"
        register={register}
        errors={errors}
      />
      <Button
        disabled={false}
        label="Register"
        onClick={handleSubmit(onSubmit)}
      />
      {/* // to do, add more currencies */}
    </div>
  );
};

export default AddInfoPage;
