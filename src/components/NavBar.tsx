import { Typography } from '@material-tailwind/react'

function Navbar() {
  return (
    <div className="mx-auto max-w-full py-4 flex flex-col text-center bg-green-500 ">
        <div className="md:container md:mx-auto">
          <Typography variant="h3" color="white" className="mb-2">
            MEDIUM
          </Typography>
          <p color="white" className="mb-2 text-white">
            A place for share knowledge
          </p>
        </div>
      </div>
  )
}

export default Navbar
