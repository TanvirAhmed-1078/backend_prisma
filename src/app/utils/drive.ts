import { google } from "googleapis";
import { Readable } from "stream";
import { driveAccounts } from "../config";


// Buffer → Stream converter
function bufferToStream(buffer: Buffer) {
  const stream = new Readable();
  stream.push(buffer);
  stream.push(null);
  return stream;
}

// Storage check
async function checkDriveUsage(auth: any) {
  const drive = google.drive({ version: "v3", auth });
  const about = await drive.about.get({ fields: "storageQuota" });
  const quota = about.data.storageQuota;
  const used = Number(quota?.usage || 0);
  const limit = Number(quota?.limit || 0);

  return { used, limit, free: limit - used };
}

// Pick available Drive
async function getAvailableDrive() {
  for (const acc of driveAccounts) {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: acc.client_email,
        private_key: acc.private_key,
      },
      scopes: ["https://www.googleapis.com/auth/drive"],
    });

    const { free } = await checkDriveUsage(auth);

    if (free > 10 * 1024 * 1024) { // কমপক্ষে 10MB ফ্রি থাকতে হবে
      return { drive: google.drive({ version: "v3", auth }), folderId: acc.folderId };
    }
  }

  throw new Error("No Google Drive account has free space!");
}

// Main upload function
export async function uploadToDrive(imgFile: Express.Multer.File) {
  const { drive, folderId } = await getAvailableDrive();

  const media = {
    mimeType: imgFile.mimetype,
    body: bufferToStream(imgFile.buffer),
  };

  const file = await drive.files.create({
    requestBody: {
      name: imgFile.originalname || "Image.png",
      mimeType: imgFile.mimetype,
      parents: [folderId],
    },
    media,
    fields: "id",
  });

  const { data } = await drive.files.get({
    fileId: file.data.id!,
    fields: "webContentLink, webViewLink",
  });

  return data.webContentLink; // Download link রিটার্ন করবে
}
