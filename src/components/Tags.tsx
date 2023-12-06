import { Chip, Skeleton } from "@nextui-org/react";
import { useTags } from "../hooks/useTags";
import { useTagsStore } from "../stores/tags";
import { useState } from "react";

function Tags() {
  const { data, isLoading } = useTags();
  console.log(data);
  const [showAll, setShowAll] = useState(false);

  // Function to toggle 'showAll'
  const handleSeeMore = () => {
    setShowAll(!showAll);
  };
  // const selectedTags = useTagsStore((state) => state.selectedTags);

  // const setSelectedTags = useTagsStore((state) => state.setSelectedTags);
 
  return (
    <div className="w-1/4 bg-white rounded-lg shadow-md p-6 self-start">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Popular Tags</h2>
      <div className="flex flex-wrap -m-1">
     
      {data && data.slice(0, showAll ? data.length : 10).map((tag, index) => (
        <Chip
          key={tag}
          className="m-1 text-sm text-green-500 bg-green-100 hover:bg-green-200 rounded-full px-2 py-1"
        >
          {tag.name}
        </Chip>
      ))}

      {data && data.length > 10 && (
        <button onClick={handleSeeMore} className="m-1 text-blue-500">
          {showAll ? "Show Less" : "See More"}
        </button>
      )}
        {/* {isLoading ? (
          <div className="flex-gap-2">
            <Skeleton className="flex w-12 h-6" />
            <Skeleton className="flex w-12 h-6" />
            <Skeleton className="flex w-12 h-6" />
          </div>
        ) : (
          data &&
          data?.map((tag: string) => (
            <Chip
              key={tag}
              // variant={selectedTags.includes(tag) ? "solid":"dot"}
              // onClick={() => setSelectedTags(tag)}
              className="m-1 text-sm text-green-500 bg-green-100 hover:bg-green-200 rounded-full px-2 py-1"
            >
              {tag.name}
            </Chip>
          )) 
        )} */}
      </div>
    </div>
  );
}

export default Tags;
