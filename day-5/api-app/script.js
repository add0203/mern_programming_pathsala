console.log("hi");
// BGSL3ZAMRMQTEJ5YA5WXD7K8U

const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=BGSL3ZAMRMQTEJ5YA5WXD7K8U";

const weatherAPI = (() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => weatherUI(data))
    .catch((err) => console.log(err));
})();

const weatherUI = (data) => {
  const root = document.getElementById("root");
  for (let i = 0; i < 10; i++) {
    console.log(data.days[i]);

    const dt = data.days[i];

    const row = document.createElement("tr");
    // const childRow = document.createElement("row");

    let cell = document.createElement("td");
    cell.innerText = dt.datetime;
    // childRow.appendChild(cell);
    row.appendChild(cell);

    let cell1 = document.createElement("td");
    cell1.innerText = dt.tempmax;

    row.appendChild(cell1);

    let cell2 = document.createElement("td");
    cell2.innerText = dt.tempmin;
    row.appendChild(cell2);

    root.appendChild(row);
  }
};
