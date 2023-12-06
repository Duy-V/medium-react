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
import { useUserLogin } from "../hooks/useUserLogin";
import { useNavigate } from "react-router";
import { useUser } from "../stores/user";

export function LoginCard() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { mutate: $login } = useUserLogin();
  // const navigate = useNavigate();
  const setLoggedIn = useUser((store) => store.setLoggedIn);
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    $login(form, {
      onSuccess: (response) => {
        alert("Login in success");
        //1. Save token in localStorage
        window.localStorage.setItem("conduit_jwt_token", response.token);
        //2. redirect to Home page
        // navigate("/");
        //3. update state of user
        setLoggedIn(true);
      },
      onError: () => {},
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
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              size="lg"
              crossOrigin={undefined}
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
            />
            <Input
              label="Password"
              size="lg"
              crossOrigin={undefined}
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" crossOrigin={undefined} />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
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
