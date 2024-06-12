// const axios = require("axios");
// const fs = require("fs");
// const path = require("path");
// const cloudinary = require("cloudinary").v2; // Assuming you have configured Cloudinary
// const crypto = require("crypto");

// function generateRandomChar() {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const randomIndex = crypto.randomInt(characters.length);
//   return characters[randomIndex];
// }

// const downloadAndUploadImage = async (imageUrl, searchText) => {
//   const randomChar = generateRandomChar();
//   try {
//     // Download image to local folder (uploadimage)
//     const imagePath = path.join(__dirname, "uploadimage", "temp.jpg");
//     const writer = fs.createWriteStream(imagePath);

//     const response = await axios({
//       url: imageUrl,
//       method: "GET",
//       responseType: "stream",
//     });

//     response.data.pipe(writer);

//     await new Promise((resolve, reject) => {
//       writer.on("finish", resolve);
//       writer.on("error", reject);
//     });

//     console.log("Image downloaded successfully.");

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(imagePath, {
//       folder: "image-generator-project",
//       public_id: searchText + " " + randomChar,
//     });

//     console.log("Image uploaded to Cloudinary:", result.secure_url);

//     // Delete the image from local folder after upload
//     fs.unlinkSync(imagePath);
//     console.log("Image deleted from local folder.");

//     return result.secure_url; // Return the Cloudinary URL of the uploaded image
//   } catch (error) {
//     console.error("Error downloading/uploading image:", error);
//     throw error; // Handle error appropriately
//   }
// };

// module.exports = { downloadAndUploadImage };

// const fs = require("fs");
// const path = require("path");
// const cloudinary = require("cloudinary").v2; // Assuming you have configured Cloudinary
// const crypto = require("crypto");
// const fetch = require("node-fetch");

// // Retry function for fetch
// const fetchWithRetry = async (url, options, retries = 3, backoff = 300) => {
//   for (let i = 0; i < retries; i++) {
//     try {
//       const response = await fetch(url, options);
//       if (response.ok) return response;
//       throw new Error(`Fetch error: ${response.statusText}`);
//     } catch (error) {
//       if (i < retries - 1) {
//         console.warn(`Fetch failed, retrying in ${backoff} ms...`);
//         await new Promise((resolve) => setTimeout(resolve, backoff));
//         backoff *= 2; // Exponential backoff
//       } else {
//         throw error;
//       }
//     }
//   }
// };

// function generateRandomChar() {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const randomIndex = crypto.randomInt(characters.length);
//   return characters[randomIndex];
// }

// const downloadAndUploadImage = async (imageUrl, searchText) => {
//   const randomChar = generateRandomChar();
//   try {
//     // Download image to local folder (uploadimage)
//     const imagePath = path.join(__dirname, "uploadimage", "temp.jpg");
//     const writer = fs.createWriteStream(imagePath);

//     const response = await fetchWithRetry(imageUrl, { method: "GET" });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${response.statusText}`);
//     }

//     response.body.pipe(writer);

//     await new Promise((resolve, reject) => {
//       writer.on("finish", resolve);
//       writer.on("error", reject);
//     });

//     console.log("Image downloaded successfully.");

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(imagePath, {
//       folder: "image-generator-project",
//       public_id: `${searchText}-${randomChar}`,
//     });

//     console.log("Image uploaded to Cloudinary:", result.secure_url);

//     // Delete the image from local folder after upload
//     fs.unlinkSync(imagePath);
//     console.log("Image deleted from local folder.");

//     return result.secure_url; // Return the Cloudinary URL of the uploaded image
//   } catch (error) {
//     console.error("Error downloading/uploading image:", error);
//     throw error; // Handle error appropriately
//   }
// };

// module.exports = { downloadAndUploadImage };

// const fs = require("fs");
// const path = require("path");
// const cloudinary = require("cloudinary").v2; // Assuming you have configured Cloudinary
// const crypto = require("crypto");
// const { pipeline } = require("stream/promises");

// function generateRandomChar() {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const randomIndex = crypto.randomInt(characters.length);
//   return characters[randomIndex];
// }

// const downloadAndUploadImage = async (imageUrl, searchText) => {
//   const randomChar = generateRandomChar();
//   try {
//     // Download image to local folder (uploadimage)
//     const imagePath = path.join(__dirname, "uploadimage", "temp.jpg");
//     const writer = fs.createWriteStream(imagePath);

//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${response.statusText}`);
//     }

//     await pipeline(response.body, writer);

//     console.log("Image downloaded successfully.");

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(imagePath, {
//       folder: "image-generator-project",
//       public_id: `${searchText}-${randomChar}`,
//     });

//     console.log("Image uploaded to Cloudinary:", result.secure_url);

//     // Delete the image from local folder after upload
//     fs.unlinkSync(imagePath);
//     console.log("Image deleted from local folder.");

//     return result.secure_url; // Return the Cloudinary URL of the uploaded image
//   } catch (error) {
//     console.error("Error downloading/uploading image:", error);
//     throw error; // Handle error appropriately
//   }
// };

// module.exports = { downloadAndUploadImage };

// const axios = require("axios");
// const fs = require("fs");
// const path = require("path");
// const cloudinary = require("cloudinary").v2; // Assuming you have configured Cloudinary
// const crypto = require("crypto");
// const axiosRetry = require("axios-retry");

// // Increase Axios timeout and implement retry mechanism
// const axiosInstance = axios.create({
//   timeout: 10000, // 10 seconds
// });

// axiosRetry(axiosInstance, {
//   retries: 3,
//   retryDelay: axiosRetry.exponentialDelay,
// });

// function generateRandomChar() {
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   const randomIndex = crypto.randomInt(characters.length);
//   return characters[randomIndex];
// }

// const downloadAndUploadImage = async (imageUrl, searchText) => {
//   const randomChar = generateRandomChar();
//   try {
//     // Download image to local folder (uploadimage)
//     const imagePath = path.join(__dirname, "uploadimage", "temp.jpg");
//     const writer = fs.createWriteStream(imagePath);

//     const response = await axiosInstance({
//       url: imageUrl,
//       method: "GET",
//       responseType: "stream",
//     });

//     response.data.pipe(writer);

//     await new Promise((resolve, reject) => {
//       writer.on("finish", resolve);
//       writer.on("error", reject);
//     });

//     console.log("Image downloaded successfully.");

//     // Upload image to Cloudinary
//     const result = await cloudinary.uploader.upload(imagePath, {
//       folder: "image-generator-project",
//       public_id: `${searchText}-${randomChar}`,
//     });

//     console.log("Image uploaded to Cloudinary:", result.secure_url);

//     // Delete the image from local folder after upload
//     fs.unlinkSync(imagePath);
//     console.log("Image deleted from local folder.");

//     return result.secure_url; // Return the Cloudinary URL of the uploaded image
//   } catch (error) {
//     console.error("Error downloading/uploading image:", error);
//     throw error; // Handle error appropriately
//   }
// };

// module.exports = { downloadAndUploadImage };

const axios = require("axios");
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2; // Assuming you have configured Cloudinary
const crypto = require("crypto");

function generateRandomChar() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomIndex = crypto.randomInt(characters.length);
  return characters[randomIndex];
}

const downloadAndUpload = async (imageUrl, searchText) => {
  const randomChar = generateRandomChar();
  try {
    // Download image to local folder (uploadimage)
    const imagePath = path.join(__dirname, "uploadimage", "temp.jpg");
    const writer = fs.createWriteStream(imagePath);

    const response = await axios({
      url: imageUrl,
      method: "GET",
      responseType: "stream",
    });

    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    console.log("Image downloaded successfully.");

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "img-gen",
      public_id: searchText + " " + randomChar,
    });

    console.log("Image uploaded to Cloudinary:", result.secure_url);

    // Delete the image from local folder after upload
    fs.unlinkSync(imagePath);
    console.log("Image deleted from local folder.");

    return result.secure_url; // Return the Cloudinary URL of the uploaded image
  } catch (error) {
    console.error("Error downloading/uploading image:", error);
    throw error; // Handle error appropriately
  }
};

module.exports = { downloadAndUpload };
