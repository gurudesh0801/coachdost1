/* Import these in your CSS file or inside the component */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import "./Home.css"; // Link to your CSS file for styling

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };
  /*------------------------------
        Album Cover Slider
--------------------------------*/
  //start added by Chase
  var a = document.getElementsByTagName("a");
  var cfImg = document.getElementsByClassName("coverflow__image");

  var scaleI = 0;
  for (scaleI; scaleI < a.length; scaleI++) {
    if (scaleI === 3) {
      continue;
    } else {
      a[scaleI].style.cursor = "default";
      a[scaleI].addEventListener("click", prevDef);
    }
  }

  function prevDef(e) {
    e.preventDefault();
  }

  function forScale(coverflowPos) {
    for (scaleI = 0; scaleI < a.length; scaleI++) {
      a[scaleI].style.cursor = "default";
      a[scaleI].addEventListener("click", prevDef);
    }
    for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
      if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
        cfImg[scaleI].parentElement.style.cursor = "pointer";
        cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
      }
    }
  }
  //end added by Chase

  function setupCoverflow(coverflowContainer) {
    var coverflowContainers;

    if (typeof coverflowContainer !== "undefined") {
      if (Array.isArray(coverflowContainer)) {
        coverflowContainers = coverflowContainer;
      } else {
        coverflowContainers = [coverflowContainer];
      }
    } else {
      coverflowContainers = Array.prototype.slice.apply(
        document.getElementsByClassName("coverflow")
      );
    }

    coverflowContainers.forEach(function (containerElement) {
      var coverflow = {};
      var prevArrows, nextArrows;

      //capture coverflow elements
      coverflow.container = containerElement;
      coverflow.images = Array.prototype.slice.apply(
        containerElement.getElementsByClassName("coverflow__image")
      );
      coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

      //set indicies on images
      coverflow.images.forEach(function (coverflowImage, i) {
        coverflowImage.dataset.coverflowIndex = i + 1;
      });

      //set initial position
      coverflow.container.dataset.coverflowPosition = coverflow.position;

      //get prev/next arrows
      prevArrows = Array.prototype.slice.apply(
        coverflow.container.getElementsByClassName("prev-arrow")
      );
      nextArrows = Array.prototype.slice.apply(
        coverflow.container.getElementsByClassName("next-arrow")
      );

      //add event handlers
      function setPrevImage() {
        coverflow.position = Math.max(1, coverflow.position - 1);
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //call the functin forScale added
        forScale(coverflow.position);
      }

      function setNextImage() {
        coverflow.position = Math.min(
          coverflow.images.length,
          coverflow.position + 1
        );
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //call the function Chase added
        forScale(coverflow.position);
      }

      function jumpToImage(evt) {
        coverflow.position = Math.min(
          coverflow.images.length,
          Math.max(1, evt.target.dataset.coverflowIndex)
        );
        coverflow.container.dataset.coverflowPosition = coverflow.position;
        //start added by Chase
        setTimeout(function () {
          forScale(coverflow.position);
        }, 1);
        //end added by Chase
      }

      function onKeyPress(evt) {
        switch (evt.which) {
          case 37: //left arrow
            setPrevImage();
            break;
          case 39: //right arrow
            setNextImage();
            break;
        }
      }
      prevArrows.forEach(function (prevArrow) {
        prevArrow.addEventListener("click", setPrevImage);
      });
      nextArrows.forEach(function (nextArrow) {
        nextArrow.addEventListener("click", setNextImage);
      });
      coverflow.images.forEach(function (image) {
        image.addEventListener("click", jumpToImage);
      });
      window.addEventListener("keyup", onKeyPress);
    });
  }

  setupCoverflow();

  return (
    <section className="hero-section">
      <div className="hero-text">
        <div className="texts">
          <h1>
            <span className="coach">COACH</span>
            <span className="dost">DOST</span>
          </h1>
          <p>
            Transform Your Life With Personalised Coaching And Valuable Guidance
          </p>
        </div>
      </div>

      <section class="row">
        <div class="nine columns">
          <div class="coverflow top10 bot10">
            <a class="prev-arrow"></a>
            <a href="">
              <img
                src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg"
                class="coverflow__image"
              />
            </a>
            <a href="">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                class="coverflow__image"
              />
            </a>
            <a href="">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg"
                class="coverflow__image"
              />
            </a>
            <a href="">
              <img
                src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg"
                class="coverflow__image"
              />
            </a>
            <a href="">
              <img
                src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                class="coverflow__image"
              />
            </a>
            <a class="next-arrow"></a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
