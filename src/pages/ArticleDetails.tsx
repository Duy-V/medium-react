import { useArticle } from "../hooks/useArticle";
import {
  Avatar,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@material-tailwind/react";
import format from "date-fns/format";
import { vi } from "date-fns/locale";
import { useParams } from "react-router-dom";
function ArticleDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { article, isLoading } = useArticle(slug!);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="flex-1 bg-white rounded-lg shadow-md mb-8 container mx-auto px-4 py-6">
      <div className="flex items-start space-x-4">
        <div className="flex-1 ">
          <CardHeader
            className="flex justify-between"
            floated={false}
            shadow={false}
          >
            <div className="flex">
              <Avatar
                isBorderred
                radius="full"
                size="md"
                src={article?.author?.image}
              />
              <div className="flex flex-col justify-left">
                <h3 className="text-sm font-bold text-purple-600">
                  {article?.author?.username}
                </h3>
                <p className="text-sm text-gray-600">
                  {article?.author?.email}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <h1 className=" text-xl font-bold text-gray-900">
              {article?.title}
              <p className=" text-gray-700 text-sm">{article?.description}</p>
            </h1>
            <p className=" text-gray-700 text-sm">{article?.body}</p>
          </CardBody>

          <CardFooter className="flex justify-between">
            <div className="flex flex-wrap gap-2 ">
              {article?.tagList &&
                article?.tagList.map((tag: any, index: number) => (
                  <Chip
                    key={index}
                    variant="ghost"
                    color="green"
                    size="sm"
                    value={tag}
                    icon={
                      <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
                    }
                  />
                ))}
            </div>
            <div className="flex flex-wrap gap-2 ">
              <Button>Follow</Button>
              <Button>Favourite {article?.favoritesCount}</Button>
            </div>
          </CardFooter>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetails;
