/* 
Google Drive API:
Demonstration to:
1. upload 
2. delete 
3. create public URL of a file.
required npm package: googleapis
https://developers.google.com/drive/api/guides/about-files
*/
import fs from "fs";
import path from "path";
import process from "process";
import { google } from "googleapis";

const CLIENT_ID = process.env.GOOGLE_DRIVE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_DRIVE_CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground/";
const REFRESH_TOKEN =
  "1//04LIDhgkqT7xqCgYIARAAGAQSNwF-L9IroovPT-coKLkUHIhlhitL56wGlGV7tjcVx3t-yFy4pS5c7VltF2uU5BviCgphgKAZwqI";

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

/* 
filepath which needs to be uploaded
Note: Assumes example.jpg file is in root directory, 
though this can be any filePath
*/
const filePath = path.join(__dirname, "example.jpg");

async function uploadFile() {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: "example.jpg", //This can be name of your choice
        mimeType: "image/jpg",
      },
      media: {
        mimeType: "image/jpg",
        body: fs.createReadStream(filePath),
      },
    });

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteFile() {
  try {
    const response = await drive.files.delete({
      fileId: "YOUR FILE ID",
    });
    console.log(response.data, response.status);
  } catch (error) {
    console.log(error);
  }
}

// deleteFile();

async function generatePublicUrl() {
  try {
    const fileId = "YOUR FILE ID";
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    /* 
    webViewLink: View the file in browser
    webContentLink: Direct download link 
    */
    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink, webContentLink",
    });
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
}
