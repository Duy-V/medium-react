import {
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { TArticle } from "../types/article";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import useSlugStore from "../stores/slug";

type Props = {
  post: TArticle;
};
const CardItem = ({ post }: Props) => {
  const { setSelectedArticle } = useSlugStore();
  console.log(post);
  return (
    <div className="flex-1 bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-1 ">
          <CardHeader
            className="flex justify-between"
            floated={false}
            shadow={false}
          >
            <div className="flex">
              <img
                className="w-10 h-10 rounded-full mr-5"
                src="/path-to-your-avatar.jpg"
                alt="Anah Benešová"
              />
              <div className="flex flex-col justify-left">
                <h3 className="text-sm font-bold text-purple-600">
                  {post.author.username}
                </h3>
                <p className="text-sm text-gray-600">
                  {format(new Date(post?.createdAt), "h:m 'Date:' MM dd yyyy")}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <h1 className=" text-xl font-bold text-gray-900">
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            </h1>
            <p className=" text-gray-700 text-sm">{post.description}</p>
          </CardBody>

          <CardFooter className="flex justify-between">
            <a
              href="#"
              className="text-green-500  inline-block hover:text-green-600"
            >
              Read more...
            </a>
            <div className="flex flex-wrap gap-2 ">
              {post.tags.map((tag: string, index: number) => (
                <Chip
                  key={index}
                  variant="ghost"
                  color="green"
                  size="sm"
                  value={tag?.name}
                  icon={
                    <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                  }
                />
              ))}
            </div>
          </CardFooter>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
