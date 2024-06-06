const imageModel = require("../models/imageModel");



const genrateImage = async (req, res) => {
  const body = req.body;
  const searchText = body.searchText;

  let imageUrl = " ";
  
  try {
    const apiResponse = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
      headers: {
        accept: "*/*",
        "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
        "api-token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTc1OTgwNDYsImV4cCI6MTcxNzY4NDQ0Nn0.dI8S5K-s2Rlgk8BKV1qeDN1l9EX23NMVlB0rgiIKmhA",
        authorization: "hotpot-t2mJbCr8292aQzp8CnEPaK",
        "content-type":
          "multipart/form-data; boundary=----WebKitFormBoundaryJMJMD9CJY0ccrBqd",
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
      body: `------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"seedValue\"\r\n\r\nnull\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"inputText\"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"width\"\r\n\r\n512\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"height\"\r\n\r\n512\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"styleId\"\r\n\r\n49\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"styleLabel\"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"isPrivate\"\r\n\r\nfalse\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"price\"\r\n\r\n0\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"requestId\"\r\n\r\n8-galQunhR98jsU2t\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd\r\nContent-Disposition: form-data; name=\"resultUrl\"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-galQunhR98jsU2t.png\r\n------WebKitFormBoundaryJMJMD9CJY0ccrBqd--\r\n`,
      method: "POST",
      mode: "cors",
      credentials: "include",
    });

    imageUrl = await apiResponse.json();
    
      res.json({
        status: 200,
        data: {
          imageUrl: imageUrl,
        },
      });

  } catch (err) {
    console.log(err);
  }

};


module.exports = genrateImage;


