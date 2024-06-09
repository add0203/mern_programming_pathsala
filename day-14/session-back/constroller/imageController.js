const imageModel = require("../models/imageModel");
const { downloadAndUploadImage } = require("./downloadAndUpload");

const genrateImage = async (req, res) => {
  const body = req.body;
  const searchText = body.searchText;

  let imageUrl = " ";

  try {
    const apiResponse = await fetch(
      "https://api.hotpot.ai/art-maker-sdte-zmjbcrr",
      {
        headers: {
          accept: "*/*",
          "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
          "api-token":
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc5MDU2ODgsImV4cCI6MTcxNzk5MjA4OH0.hkT-8fwbOEOncQbtf734LqQBwcDIF-9LBxQObaQRjj0",
          authorization: "hotpot-t2mJbCr8292aQzp8CnEPaK",
          "content-type":
            "multipart/form-data; boundary=----WebKitFormBoundarywI5VbubJevXJwvP6",
          "sec-ch-ua":
            '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
        },
        referrer: "https://hotpot.ai/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: `------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="seedValue"\r\n\r\nnull\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="inputText"\r\n\r\n${searchText}\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="width"\r\n\r\n512\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="height"\r\n\r\n512\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="styleId"\r\n\r\n146\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="styleLabel"\r\n\r\nConcept Art 7\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="isPrivate"\r\n\r\nfalse\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="price"\r\n\r\n0\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="requestId"\r\n\r\n22-S2JF83KobTw5DZD\r\n------WebKitFormBoundarywI5VbubJevXJwvP6\r\nContent-Disposition: form-data; name="resultUrl"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/22-S2JF83KobTw5DZD.png\r\n------WebKitFormBoundarywI5VbubJevXJwvP6--\r\n`,
        method: "POST",
        mode: "cors",
        credentials: "include",
      }
    );

    if (!apiResponse.ok) {
      // Handle non-OK response (e.g., 401 Unauthorized)
      return res.status(400).json({
        status: response.status,
        message: `res is not defined`,
      });
    }

    imageUrl = await apiResponse.json();

    //changes occured

    let imageUrlForMongodb = await downloadAndUploadImage(imageUrl, searchText);

    // console.log(imageUrlForMongodb.imageUrl);
    const imageAtMongoDb = await imageModel.create({
      searchText: searchText,
      imageUrl: imageUrlForMongodb,
    });
    // console.log(imageAtMongoDb);
    if (!imageAtMongoDb) {
      console.log("not saved at mongo db");
    }
    //till here
    res.json({
      status: 200,
      data: {
        imageUrl: imageUrlForMongodb,
      },
    });
  } catch (err) {
    res.json({
      status: 401,
      data: {
        err: err.message,
      },
    });
  }
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

module.exports = { genrateImage, getAllImages };
