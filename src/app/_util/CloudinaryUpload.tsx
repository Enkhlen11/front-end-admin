"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

export const CloudinaryUpload = () => {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const PRESENT_NAME = process.env.PRESENT_NAME!;
  const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME!;

  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploadpresent", PRESENT_NAME);
    formData.append("api_key", CLOUDINARY_NAME);
    try {
      const res = await fetch(
        `api.cloudnary.com/v1_1/${CLOUDINARY_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setImage(data.secure_url);
      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Failed to upload file");
    }
  };
  console.log(file);
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <Button
        onClick={handleUpload}
        className="bg-green-500 px-4 py-2 rounded-lg"
      >
        Upload
      </Button>
      {!image && (
        <div>
          <Image
            width={500}
            height={500}
            alt="uploaded"
            src={
              "https://res.cloudinary.com/dwvh6k0kb/image/upload/v1740111684/Food_Image_iuuebm.png"
            }
          />
        </div>
      )}
    </div>
  );
};
