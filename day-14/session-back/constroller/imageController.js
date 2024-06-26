// const userModel = require("../models/authModel");
// const imageModel = require("../models/imageModel");

// const { downloadAndUploadImage } = require("./downloadAndUpload");

// const genrateImage = async (req, res) => {
//   const body = req.body;
//   const loggedInUser = req.body;
//   const userCoins = req.body;
//   const searchText = body.searchText;
//   console.log(" from body user Detail : ");
//   console.log(userCoins.userCoins);
//   let imageUrl = " ";

//   try {
//     const apiResponse = await fetch(
//       "https://api.hotpot.ai/art-maker-sdte-zmjbcrr",
//       {
//         headers: {
//           accept: "*/*",
//           "accept-language": "en-US,en;q=0.9,hi;q=0.8",
//           "api-token":
//             "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTgxNTk5OTUsImV4cCI6MTcxODE2MzU5NX0.y-92ajIZsohPzcyLVlqyWM2hM9-6I2rgdtnTv_64ntI",
//           authorization: "hotpot-t2mJbCr8292aQzp8CnEPaK",
//           "content-type":
//             "multipart/form-data; boundary=----WebKitFormBoundaryACOWWzhDfQIO35NN",
//           "sec-ch-ua":
//             '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
//           "sec-ch-ua-mobile": "?1",
//           "sec-ch-ua-platform": '"Android"',
//           "sec-fetch-dest": "empty",
//           "sec-fetch-mode": "cors",
//           "sec-fetch-site": "same-site",
//         },
//         referrer: "https://hotpot.ai/",
//         referrerPolicy: "strict-origin-when-cross-origin",
//         body: `------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="seedValue"\r\n\r\nnull\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="inputText"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="width"\r\n\r\n512\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="height"\r\n\r\n512\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="styleId"\r\n\r\n146\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="styleLabel"\r\n\r\nConcept Art 7\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="isPrivate"\r\n\r\nfalse\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="price"\r\n\r\n0\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="requestId"\r\n\r\n22-iHSULSReKmXwykk\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="resultUrl"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/22-iHSULSReKmXwykk.png\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN--\r\n`,
//         method: "POST",
//         mode: "cors",
//         credentials: "include",
//       }
//     );
//     if (!apiResponse.ok) {
//       return res.status(400).json({
//         status: apiResponse.status,
//         message: `res is not defined`,
//       });
//     }

//     // imageUrl = await apiResponse.json();
//     // // console.log("respose json");
//     // console.log(imageUrl);

//     // //changes occured

//     // let imageUrlForMongodb = await downloadAndUploadImage(imageUrl, searchText);

//     // console.log(imageUrlForMongodb);
//     // const imageAtMongoDb = await imageModel.create({
//     //   searchText: searchText,
//     //   imageUrl: imageUrlForMongodb,
//     // });
//     // // console.log(imageAtMongoDb);
//     // if (!imageAtMongoDb) {
//     //   console.log("not saved at mongo db");
//     // }
//     else {
//       imageUrl = await res.json();
//       let imageUrlForMongodb = await downloadAndUploadImage(
//         imageUrl,
//         searchText
//       );
//       imageCloudURL = imageUrlForMongodb;
//       const imageMongoDB = await imageModel.create({
//         searchText: searchText,
//         imageUrl: imageUrlForMongodb,
//       });
//       if (!imageMongoDB) {
//         console.log("not saved at mongo db");
//       }
//     }

//     //till here
//     // console.log("user detail : ");
//     // console.log(data.userCoins);
//     // userPoints update in DB
//     // await userModel.findOneAndUpdate(loggedInUser);
//     // const pointes = userCoins.userCoins;
//     // console.log(loggedInUser.email);
//     // console.log(loggedInUser);
//     // const updatedUser = await userModel.findOneAndUpdate(
//     //   { email: loggedInUser.email }, // Find the user by email
//     //   { $set: { userCoins: pointes } } // Update the address field
//     // );
//     // if (!updatedUser) {
//     //   console.log("userPoints not updated");
//     // }
//     res.json({
//       status: 200,
//       data: {
//         imageUrl: imageUrlForMongodb,
//       },
//     });
//   } catch (err) {
//     res.json({
//       status: 401,
//       data: {
//         err: err.message,
//       },
//     });
//   }
// };

// const getAllImages = async (req, res) => {
//   try {
//     const images = await imageModel.find();
//     res.status(200).json({
//       status: "success",
//       data: images,
//     });
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     res.status(500).json({
//       status: "error",
//       message: "Failed to fetch images",
//     });
//   }
// };

// module.exports = { genrateImage, getAllImages };

const imageModel = require("../models/imageModel");
const { downloadAndUpload } = require("./downloadAndUpload");
const generateImage = async (req, res) => {
  let imageCloudURL;
  const body = req.body;
  const searchText = body.searchText;

  let imageUrl = "";
  try {
    const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
    "api-token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTkzOTIwNzQsImV4cCI6MTcxOTM5OTI3NH0.FsBA1lfDALTsqZrG98KbInspAD7d7I6P7M1FpVn6TKQ",
    "authorization": "hotpot-t2mJbCr8292aQzp8CnEPaK",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryYX9uwQ0h2Rpg2oFs",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://hotpot.ai/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\ncar\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n146\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nConcept Art 7\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n22-IXdGbWchs2plTq9\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/22-IXdGbWchs2plTq9.png\r\n------WebKitFormBoundaryYX9uwQ0h2Rpg2oFs--\r\n",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
    //   fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
    //   headers: {
    //     accept: "*/*",
    //     "accept-language": "en-US,en;q=0.9,hi;q=0.8",
    //     "api-token":
    //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTgxNTk5OTUsImV4cCI6MTcxODE2MzU5NX0.y-92ajIZsohPzcyLVlqyWM2hM9-6I2rgdtnTv_64ntI",
    //     authorization: "hotpot-t2mJbCr8292aQzp8CnEPaK",
    //     "content-type":
    //       "multipart/form-data; boundary=----WebKitFormBoundaryACOWWzhDfQIO35NN",
    //     "sec-ch-ua":
    //       '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
    //     "sec-ch-ua-mobile": "?1",
    //     "sec-ch-ua-platform": '"Android"',
    //     "sec-fetch-dest": "empty",
    //     "sec-fetch-mode": "cors",
    //     "sec-fetch-site": "same-site",
    //   },
    //   referrer: "https://hotpot.ai/",
    //   referrerPolicy: "strict-origin-when-cross-origin",
    //   body: `------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="seedValue"\r\n\r\nnull\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="inputText"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="width"\r\n\r\n512\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="height"\r\n\r\n512\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="styleId"\r\n\r\n146\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="styleLabel"\r\n\r\nConcept Art 7\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="isPrivate"\r\n\r\nfalse\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="price"\r\n\r\n0\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="requestId"\r\n\r\n22-iHSULSReKmXwykk\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN\r\nContent-Disposition: form-data; name="resultUrl"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/22-iHSULSReKmXwykk.png\r\n------WebKitFormBoundaryACOWWzhDfQIO35NN--\r\n`,
    //   method: "POST",
    //   mode: "cors",
    //   credentials: "include",
    // });
    imageUrl = await res.json();
    let imageUrlForMongodb = await downloadAndUpload(imageUrl, searchText);
    imageCloudURL = imageUrlForMongodb;
    const imageMongoDB = await imageModel.create({
      searchText: searchText,
      imageUrl: imageUrlForMongodb,
    });
    if (!imageMongoDB) {
      console.log("not saved at mongo db");
    }
  } catch (err) {
    console.log(err);
  }

  res.json({
    status: 200,
    data: {
      imageUrl: imageCloudURL,
    },
  });
};

const getAllImages = async (req, res) => {
  try {
    const images = await imageModel.find();
    res.status(200).json({
      status: "success",
      data: images,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch images",
    });
  }
};

module.exports = {
  generateImage,
  getAllImages,
};
