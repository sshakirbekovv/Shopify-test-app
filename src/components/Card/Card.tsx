import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import LikeButton from "../LikeButton/LikeButton";

import {
  CardMain,
  CardHeader,
  CardHeaderImg,
  CardBody,
  CardBodyExplanation,
  CardBodyTitle,
  Iframe,
  CardFooter,
} from "./Card.styles";

type Props = {
  url: string;
  title: string;
  date: string;
  explanation: string;
  media_type: string;
};

const Card: React.FC<Props> = ({
  url,
  title,
  date,
  explanation,
  media_type,
}) => {

  const [isVideo, setIsVideo] = useState<string>("");
  const [liked, setLiked] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  useEffect(() => {
    setIsVideo(media_type);
  }, [media_type]);

  return (
    <CardMain>
      <CardHeader>
        {isVideo === "image" ? (
          <CardHeaderImg src={url} alt={media_type} />
        ) : (
          <Iframe src={url} title={media_type} frameBorder={0} />
        )}
      </CardHeader>
      <CardBody>
        <CardBodyTitle>
          {title} - {date}
        </CardBodyTitle>
        <CardBodyExplanation>{explanation}</CardBodyExplanation>
      </CardBody>
      <CardFooter>
        <LikeButton
          title={"Like"}
          onAnimationEnd={() => setClicked(false)}
          onClick={() => {
            setLiked(!liked); 
            setClicked(true);
          }}
          color={liked ? "#FFF" : ""}
          background={liked ? "#DC143C" : ""}
          className={clicked ? "clicked" : ""}
        />
        {
          liked ? (
            <FontAwesomeIcon icon={faHeart} color="#DC143C" className={clicked ? "clicked" : ""}/>
          ) : (
            null
          )
        }
      </CardFooter>
    </CardMain>
  );
};

export default Card;
