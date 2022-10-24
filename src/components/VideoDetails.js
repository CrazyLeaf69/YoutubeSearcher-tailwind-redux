import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectResults } from "../features/counterSlice";
import decodeString from "../lib/decodeString";
import PageNotFound from "./PageNotFound";

const VideoDetails = () => {
  const { videoId } = useParams();
  const results = useSelector(selectResults);
  const video = results?.items?.find((item) => item.id.videoId === videoId);
  console.log(video.snippet);
  return (
    <>
      {video !== undefined ? (
        <div className="flex justify-center content-center">
          <div className="h-full p-2 rounded-2xl transition-all dark:bg-transparent dark:text-white">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt="Thumbnail"
              className="rounded-2xl w-full md:w-full lg:w-4/5"
            />
            <div className="font-bold mt-1">{decodeString(video.snippet.title)}</div>
            <div>{decodeString(video.snippet.channelTitle)}</div>
            <div className="mt-2 font-bold">Description:</div>
            <div>{decodeString(video.snippet.description)}</div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default VideoDetails;
