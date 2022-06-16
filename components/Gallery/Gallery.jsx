import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import { Stack } from "@chakra-ui/react";

const images = [
  {
    original: "/assets/photos/busANDtrailer-1.jpg",
    thumbnail: "/assets/photos/busANDtrailer-1.jpg",
  },
  {
    original: "/assets/photos/busfront-1x1.jpg",
    thumbnail: "/assets/photos/busfront-1x1.jpg",
  },
  {
    original: "/assets/photos/busfront-2-1x1.jpg",
    thumbnail: "/assets/photos/busfront-2-1x1.jpg",
  },
  {
    original: "/assets/photos/busside-1x1.jpg",
    thumbnail: "/assets/photos/busside-1x1.jpg",
  },
];

const Gallery = () => {
  return (
    <Stack>
      <ImageGallery items={images} originalWidth={"200px"} />
    </Stack>
  );
};

export default Gallery;
