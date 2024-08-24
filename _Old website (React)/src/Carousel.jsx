import React, { useEffect } from "react";
import ProjectData from "./ProjectData";
import Card from "./Card";
import "./carousel.css";

const Carousel = () => {
  useEffect(() => {
    const track = document.getElementById("image-track");

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;

      const maxDelta = window.innerWidth / 2;

      //Get the pixel value of the left and right edge of image-track
      const trackLeft = track.getBoundingClientRect().left;
      const trackRight = track.getBoundingClientRect().right;
      const trackWidth = trackRight - trackLeft;

      //A percentage of 0 is when the left side of the track is at the left side of the screen.
      //Compute the negative percentage which will occur when the right side of the track is at the right side of the screen
      const negativePercentage = (100 * -(trackWidth - window.innerWidth)) / trackWidth;

      const percentage = (mouseDelta / maxDelta) * -100;
      const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
      const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), negativePercentage);

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translateX(${nextPercentage}%)`,
        },
        { duration: 500, fill: "forwards" }
      );

      const images = track.getElementsByClassName("project-image");
      // Map nextPercentage from [negativePercentage, 0] to [-100, 0]
      const imageScrollAmount = (nextPercentage * -100) / negativePercentage;
      const effectReduce = 0.8;
      for (const image of images) {
        image.animate(
          {
            objectPosition: `${50 + (imageScrollAmount + 50) * effectReduce}% center`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    window.onmousedown = (e) => handleOnDown(e);

    window.ontouchstart = (e) => handleOnDown(e.touches[0]);

    window.onmouseup = (e) => handleOnUp(e);

    window.ontouchend = (e) => handleOnUp(e.touches[0]);

    window.onmousemove = (e) => handleOnMove(e);

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, []);

  useEffect(() => {
    const track = document.getElementById("image-track");
    const images = track.getElementsByClassName("project-image");
    for (const image of images) {
      image.animate(
        {
          objectPosition: `60% center`,
        },
        { duration: 0, fill: "forwards" }
      );
    }
  });

  return (
    <div className="image-track" id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
      {ProjectData.map((projects, i) => (
        // Each object at this level is a list of projects with a common type and a bookend
        <>
          <div className="bookend" key={"bookend" + i}>
            {projects.type}
          </div>
          {projects["content"].map((project, j) => (
            // Each object at this level is a project
            <Card project={project} i={100 * i + j} />
          ))}
        </>
      ))}
    </div>
  );
};

export default Carousel;
