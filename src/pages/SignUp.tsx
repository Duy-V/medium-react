import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BasicUserSchema, User } from "../models/user";
import { useUserSignup } from "../hooks/useUserSignup";
import { useNavigate } from "react-router-dom";

export function SignUpCard() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<User>({
    resolver: zodResolver(BasicUserSchema),
  });
  const { mutate: $signup } = useUserSignup();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = (data: any) => {
    $signup(data, {
      onSuccess: () => {
        alert("sign up successfully");
        navigate("/login");
      },
    });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign Up
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="UserName"
              size="lg"
              crossOrigin={undefined}
              id="username"
              type="text"
              {...register("username")}
            />
            {errors.username && (
              <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                {errors?.username?.message}
              </p>
            )}
            <Input
              label="Email"
              size="lg"
              crossOrigin={undefined}
              id="email"
              type="text"
              {...register("email")}
            />
            {errors.email && (
              <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                {errors?.email?.message}
              </p>
            )}
            <Input
              label="Password"
              size="lg"
              crossOrigin={undefined}
              id="password"
              type="text"
              {...register("password")}
            />
            {errors.password && (
              <p className="bg-yellow-100 text-red-500 italic px-2 py-1 rounded-md self-start">
                {errors.password?.message}
              </p>
            )}
            <Input
              label="Confirm Your Password"
              size="lg"
              crossOrigin={undefined}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" crossOrigin={undefined} />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
