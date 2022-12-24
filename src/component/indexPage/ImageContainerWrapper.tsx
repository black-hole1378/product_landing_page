import React, { useState, useEffect } from "react";
import Data from "../../utitlity/Data.json";
export interface ImageProps {
  selectedImage: string[];
  index: number;
  thumbnails: string[];
  handleChange: any;
}

export const ImageContainerWrapper = <T extends {}>(
  Component: React.ComponentType<T & ImageProps>
) => {
  const InnerComponent: React.FC<T> = (props) => {
    const [index, setIndex] = useState<number>(0);
    const [images, setImages] = useState<string[]>([]);
    const [thumbnails, setThumbnails] = useState<string[]>([]);
    useEffect(() => {
      setImages(Data.product.images.selected);
      setThumbnails(Data.product.images.thumbnail);
    }, []);

    const handleChange = (index: number) => {
      setIndex(index);
      console.log(index);
    };

    return (
      <Component
        {...props}
        selectedImage={images}
        index={index}
        thumbnails={thumbnails}
        handleChange={handleChange}
      />
    );
  };
  return InnerComponent;
};
