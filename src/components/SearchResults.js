import React from "react";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { selectResults } from "../features/counterSlice";

const SearchResults = () => {
  const results = useSelector(selectResults);

  return (
    <>
      {results != null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {results?.items?.map((value) => (
            <VideoCard key={value.id.videoId} video={value} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center text-xl dark:text-white">Search for a Youtube video</div>
      )}
    </>
  );
};

export default SearchResults;
