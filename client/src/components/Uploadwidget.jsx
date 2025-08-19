import { useEffect, useRef } from "react";

const UploadWidget = ({ uwConfig, setState }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    if (!window.cloudinary) {
      console.error("Cloudinary script not loaded");
      return;
    }

    // Create the upload widget instance
    uploadWidgetRef.current = window.cloudinary.createUploadWidget(
      uwConfig,
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Upload successful:", result.info);
          setState(prev=>[...prev,result.info.secure_url]); // ✅ Update state with uploaded image URL
        }
      }
    );

    const handleUploadClick = () => {
      if (uploadWidgetRef.current) {
        uploadWidgetRef.current.open();
      }
    };

    const buttonElement = uploadButtonRef.current;
    buttonElement.addEventListener("click", handleUploadClick);

    return () => {
      buttonElement.removeEventListener("click", handleUploadClick);
    };
  }, [uwConfig, setState]); // ✅ dependency array

  return (
    <button ref={uploadButtonRef} className="cloudinary-button">
      Upload
    </button>
  );
};

export default UploadWidget;
