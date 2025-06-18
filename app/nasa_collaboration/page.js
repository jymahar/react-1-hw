"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import RoverPhoto from "./components/RoverPhoto";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "dR9Z1qhclj9gQxnsmbmBy0zE9qB5JW4mrV7LoAFX";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );

      setRoverPhoto(roverPhotoResponse);
    };

    fetchRoverPhotos();

    const fetchNasaPhotos = async () => {
      const picOfTheday = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      console.log(fetchNasaPhotos);
      setDailyImg(picOfTheday);
    };

    fetchNasaPhotos();

    // fetch the extra data for NASA_URLs.astronomyPicOfTheDay and save it to the dailyImg state variable
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <h4>{dailyImg.title}</h4>
          <div className={styles.nasaContainer}>
            <img
              className={styles.nasaPicOfTheDayImg}
              src={dailyImg.url}
              alt={dailyImg.title}
            />
            <p>{dailyImg.explanation}</p>
          </div>
        </section>
        <section className="card">
          <h2>Rover Photos</h2>
          {roverPhoto?.photos?.length ? (
            <>
              {roverPhoto.photos.map((photo, index) => {
                console.log(index);
                console.log(photo.img_src);
                return (
                  <RoverPhoto
                    key={photo.id}
                    url={photo.img_src}
                    date={photo.earth_date}
                    title={photo.camera.full_name}
                  />
                );
              })}
            </>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
