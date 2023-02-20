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
import { Stream } from "stream";
import { google } from "googleapis";

export class GoogleDrive {
  private drive;

  constructor(oauth2Client: any) {
    this.drive = google.drive({
      version: "v3",
      auth: oauth2Client,
    });
  }

  async uploadFile(fileObject: any) {
    try {
      const bufferStream = new Stream.PassThrough();
      bufferStream.end(fileObject.buffer);

      const response = await this.drive.files.create({
        requestBody: {
          name: "example.jpg", //This can be name of your choice
          mimeType: "image/jpg",
        },
        media: {
          mimeType: "image/jpg",
          body: bufferStream,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log("uploadFiel Error", error);
    }
  }
}

/* 
filepath which needs to be uploaded
Note: Assumes example.jpg file is in root directory, 
though this can be any filePath
*/
// const filePath = path.join(__dirname, "example.jpg");

// async function uploadFile(path: string) {
//   try {
//     const response = await drive.files.create({
//       requestBody: {
//         name: "example.jpg", //This can be name of your choice
//         mimeType: "image/jpg",
//       },
//       media: {
//         mimeType: "image/jpg",
//         body: fs.createReadStream(filePath),
//       },
//     });

//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // async function deleteFile() {
// //   try {
// //     const response = await drive.files.delete({
// //       fileId: "YOUR FILE ID",
// //     });
// //     console.log(response.data, response.status);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // deleteFile();

// async function generatePublicUrl() {
//   try {
//     const fileId = "YOUR FILE ID";
//     await drive.permissions.create({
//       fileId: fileId,
//       requestBody: {
//         role: "reader",
//         type: "anyone",
//       },
//     });

//     /*
//     webViewLink: View the file in browser
//     webContentLink: Direct download link
//     */
//     const result = await drive.files.get({
//       fileId: fileId,
//       fields: "webViewLink, webContentLink",
//     });
//     console.log(result.data);
//   } catch (error) {
//     console.log(error);
//   }
// }
