import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";
import "./App.css";

function App() {
  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setimages(data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [term]);

  return (
    <div className="container mx-auto mt-8">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">No images found </h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">
          it is loading some images
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
