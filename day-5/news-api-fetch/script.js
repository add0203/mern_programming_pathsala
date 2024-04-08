console.log("app started....");

const url =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=43fda2d406834532a0b640a396042953";
// 43fda2d406834532a0b640a396042953
// let callApi = (() => {
//   fetch(url).then((res) => {
//     console.log(res);
//   });
// })();

let callApi = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderUI(data);
    });
};

const renderUI = (data) => {
  const root = document.getElementById("root");
  // article from data
  const articles = data.articles;

  //getting single article from is array
  for (let i = 0; i < 40; i++) {
    const art1 = articles[i];
    // console.log(art1);

    const div = document.createElement("div");
    div.setAttribute("class", "newsclass");

    const h3 = document.createElement("h3");
    h3.innerText = art1.title;

    const img = document.createElement("img");
    img.src = art1.urlToImage;

    const p = document.createElement("p");
    p.innerText = art1.description;

    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);
    root.appendChild(div);
  }
};

callApi();
