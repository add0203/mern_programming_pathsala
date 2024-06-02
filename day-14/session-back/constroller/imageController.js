const imageModel = require("../models/imageModel");

const genrateImage = async (req, res) => {
  const body = req.body;
  const searchText = body.searchText;

  // {
  //   fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
  //     headers: {
  //       accept: "*/*",
  //       "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
  //       "api-token":
  //         "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTcyMzIxMDYsImV4cCI6MTcxNzMxODUwNn0.VWRACFd6xS79UoZgM4WeLpXt068zHgOkSe7q4M-TYHE",
  //       authorization: "hotpot-t2mJbCr8292aQzp8CnEPaK",
  //       "content-type":
  //         "multipart/form-data; boundary=----WebKitFormBoundaryYt83X3b9VxomddOC",
  //       "sec-ch-ua":
  //         '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
  //       "sec-ch-ua-mobile": "?0",
  //       "sec-ch-ua-platform": '"Windows"',
  //       "sec-fetch-dest": "empty",
  //       "sec-fetch-mode": "cors",
  //       "sec-fetch-site": "same-site",
  //     },
  //     referrer: "https://hotpot.ai/",
  //     referrerPolicy: "strict-origin-when-cross-origin",
  //     body: '------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="seedValue"\r\n\r\nnull\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="inputText"\r\n\r\ncar\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="width"\r\n\r\n512\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="height"\r\n\r\n512\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="styleId"\r\n\r\n49\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="styleLabel"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="isPrivate"\r\n\r\nfalse\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="price"\r\n\r\n0\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="requestId"\r\n\r\n8-axKYuB0bYaYkxJR\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="resultUrl"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-axKYuB0bYaYkxJR.png\r\n------WebKitFormBoundaryYt83X3b9VxomddOC--\r\n',
  //     method: "POST",
  //     mode: "cors",
  //     credentials: "include",
  //   });
  // }
  let imageUrl = " ";
  try {
    const res = await fetch("https://api.hotpot.ai/art-maker-sdte-zmjbcrr", {
      headers: {
        accept: "*/*",
        "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7",
        "api-token":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTcyMzIxMDYsImV4cCI6MTcxNzMxODUwNn0.VWRACFd6xS79UoZgM4WeLpXt068zHgOkSe7q4M-TYHE",
        authorization: "hotpot-t2mJbCr8292aQzp8CnEPaK",
        "content-type":
          "multipart/form-data; boundary=----WebKitFormBoundaryYt83X3b9VxomddOC",
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
      body: `------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="seedValue"\r\n\r\nnull\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="inputText"\r\n\r\n${searchText}\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="width"\r\n\r\n512\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="height"\r\n\r\n512\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="styleId"\r\n\r\n49\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="styleLabel"\r\n\r\nPhoto General 1\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="isPrivate"\r\n\r\nfalse\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="price"\r\n\r\n0\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="requestId"\r\n\r\n8-axKYuB0bYaYkxJR\r\n------WebKitFormBoundaryYt83X3b9VxomddOC\r\nContent-Disposition: form-data; name="resultUrl"\r\n\r\nhttps://hotpotmedia.s3.us-east-2.amazonaws.com/8-axKYuB0bYaYkxJR.png\r\n------WebKitFormBoundaryYt83X3b9VxomddOC--\r\n`,
      method: "POST",
      mode: "cors",
      credentials: "include",
    });
    imageUrl = await res.json();

    await imageModel.create({
      searchText: searchText,
    });
  } catch (err) {
    console.log(err);
  }

  res.send({
    status: 200,
    data: {
      imageUrl: imageUrl,
    },
  });
};

module.exports = genrateImage;
