import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { keyId, keySecret, bucketName } from "../config/aws.js";

// Create an S3 client
const s3 = new S3Client({
  endpoint: "https://s3.us-west-004.backblazeb2.com",
  region: "us-west-004",
  credentials: {
    accessKeyId: keyId,
    secretAccessKey: keySecret,
  },
  forcePathStyle: true,
});

// Create a bucket and upload something into it
export const uploadFile = async (filename: string, buffer: Buffer) => {
  console.log(filename, buffer);
  const bucketParams = {
    Bucket: bucketName,
    Key: filename,
    Body: buffer,
    ContentDisposition: "inline",
    ContentType: "application/octet-stream",
  };

  if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) {
    bucketParams.ContentType = "image/jpeg";
  } else if (filename.endsWith(".png")) {
    bucketParams.ContentType = "image/png";
  } else if (filename.endsWith(".mp4")) {
    bucketParams.ContentType = "video/mp4";
  } else if (filename.endsWith(".webm")) {
    bucketParams.ContentType = "video/webm";
  } else if (filename.endsWith(".mov")) {
    bucketParams.ContentType = "video/quicktime";
  } else if (filename.endsWith(".avi")) {
    bucketParams.ContentType = "video/x-msvideo";
  } else if (filename.endsWith(".mkv")) {
    bucketParams.ContentType = "video/x-matroska";
  }

  try {
    console.log("start res");
    const res = await s3.send(new PutObjectCommand(bucketParams));
    console.log("response", res);
  } catch (err) {
    console.log("Error", err);
  }
};

export const getFile = async (filename: string) => {
  if (filename === "undefined" || !filename) {
    return "";
  }
  // Create the S3 command to get the object
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: filename,
  });

  try {
    const presigned = await getSignedUrl(s3, command, {
      expiresIn: 60 * 60, // 1 hour
    });

    // console.log('Success', presigned)
    return presigned;
  } catch (err) {
    console.log("Error", err);
  }
};
