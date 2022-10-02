import Dropzone from "react-dropzone";
import cameraSvg from "../assets/camera.svg";
import RoundButton from "./RoundButton";
import { getUploadFileUrl } from "../utils";

const FileUpload = () => {
  const handleChange = (e) => {
    const payload = new FormData();
    payload.append("sampleFile", e[0], e[0].name);
    fetch(getUploadFileUrl(), {
      method: "POST",
      body: payload,
    });
  };

  return (
    <Dropzone onDrop={handleChange}>
      {({ getRootProps, getInputProps }) => (
        <RoundButton {...getRootProps()}>
          <input {...getInputProps()} />
          <img src={cameraSvg} />
        </RoundButton>
      )}
    </Dropzone>
  );
};

export default FileUpload;
