import React from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Card, CardHeader, Avatar, Button, CardBody } from "@nextui-org/react";

function Profile() {
  const { data } = useCurrentUser();

  return (
    <Card className="max-w-[540px] m-auto mt-10 mb-10">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={data?.image} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {data?.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {data?.email}
            </h5>
          </div>
        </div>
        <Button
          
          color="primary"
          radius="full"
          size="sm"
        >
         Edit
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
    </Card>
  );
}

export default Profile;
