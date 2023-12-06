import { IconButton } from "@material-tailwind/react";
import Button from "@material-tailwind/react/components/Button";
import Navbar, { MobileNav } from "@material-tailwind/react/components/Navbar";
import Typography from "@material-tailwind/react/components/Typography";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../stores/user";
import { If, Else, Then } from "react-if";
function Header() {
  const [openNav, setOpenNav] = useState(false);
  const isLoggedIn = useUser((store) => store.isLoggedIn);
  const setLoggedIn = useUser((store) => store.setLoggedIn);
  const handleLogout = () => {
    window.localStorage.removeItem("conduit_jwt_token");
    setLoggedIn(false);
  };
  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-4 lg:px-8 lg:py-4 text-green-500 ">
        <div className="md:container md:mx-auto">
          <div className="flex items-center justify-between  ">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              Medium
            </Typography>
            <div className="flex items-center gap-4 text-blue-gray-900">
              <div className="flex items-center gap-x-1">
                <If condition={isLoggedIn}>
                  <Then>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={`/`}>Home</Link>
                    </Button>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={`creating-new-post`}>Creating new Post</Link>
                    </Button>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={`profile`}>Profile</Link>
                    </Button>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                      onClick={handleLogout}
                    >
                      <Link to={`/`}>Logout</Link>
                    </Button>
                  </Then>
                  <Else>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={`/`}>Home</Link>
                    </Button>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={`login`}>SignIn</Link>
                    </Button>
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden lg:inline-block"
                    >
                      <Link to={`signup`}>SignUp</Link>
                    </Button>
                  </Else>
                </If>

                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
