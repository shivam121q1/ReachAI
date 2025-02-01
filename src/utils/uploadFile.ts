export const uploadFileToS3 = async (file: File): Promise<string | null> => {
    try {
      // 1. Get pre-signed URL from API
      const response = await fetch("/api/uploadFile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: file.name,
          filetype: file.type,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to get presigned URL");
      }
  
      const { url, fileUrl } = await response.json();
  
      // 2. Upload file directly to S3 using the pre-signed URL
      const uploadResponse = await fetch(url, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      });
  
      if (!uploadResponse.ok) {
        throw new Error("File upload failed");
      }
  
      console.log("File uploaded successfully:", fileUrl);
      return fileUrl; // Return S3 file URL
    } catch (error) {
      console.error("Upload error:", error);
      return null;
    }
  };
  