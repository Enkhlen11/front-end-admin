"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const CloudinaryUpload = () => {
  const [file, setFile] = useState("");
  const handleFile = (e: any) => {
    const file = e.target.files[0];
    if (!file) {
      setFile(file);
    }
  };
  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
    }
  };
  const formData = new FormData();
  formData.append("file", file);
  formData.append("uploadpresent", PRESENT_NAME);
  formData.append("api_key", CLOUDINARY_NAME);
  try(
    const res =await fetch(`api.cloudinary`)
  )catch(error){}
  return (
    <div>
      <input type="file" onChange={handleFile} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};
