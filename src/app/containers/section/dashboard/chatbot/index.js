import React, { useState } from "react";

import Microphone from "./Microphone";

import axios from "axios";

export default function Micro() {
  const [files, setFiles] = useState([]);
  const [bucketUris, setBucketUris] = useState([]);

  const config = { headers: { "Content-Type": "multipart/form-data" } };

  const submitFile = async (file) => {
    if (!file) {
      return;
    }
    console.log(file);
    const formData = new FormData();
    formData.append("Audio", file);

    try {
      const response = await axios.post(
        "http://localhost:4242/api/openai/AudioQuestion",
        formData,
        config
      );
      const bucketUri = response.data.Location;
      setBucketUris([...bucketUris, bucketUri]);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const pushFile = (file) => {
    console.log(file);
    const _file = new File([file.blob], new Date().valueOf(), {
      type: file.blob.type,
    });
    submitFile(_file);
    setFiles([...files, file]);
  };

  return (
    <>
      <Microphone pushFile={pushFile} />
    </>
  );
}
