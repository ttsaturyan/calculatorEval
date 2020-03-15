let td = document.getElementsByTagName("td");
let sum = "";
const array = [
  [7, 8, 9, "+"],
  [4, 5, 6, "-"],
  [1, 2, 3, "/"],
  ["C", 0, "=", "*"]
];
document.write("<div id='container'>");

document.write("<div id='divValue'/></div>");
document.write("<table>");
for (let i = 0; i < array.length; i++) {
  document.write("<tr>");
  for (let j = 0; j < array[i].length; j++) {
    document.write("<td id='cub'>");
    document.write(`${array[i][j]}`);
    document.write("</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
document.write("</div>");
let divValue = document.getElementById("divValue");

for (let i = 0; i < td.length; i++) {
  let element = td[i];
  element.addEventListener("click", function() {
    // вредоносный код eval()
    if (element.innerHTML !== "=") {
      sum += element.innerHTML;
      divValue.innerHTML = sum;
    } else {
      divValue.innerHTML+=("="+eval(sum))
      sum = "";
    }
    if (element.innerHTML === "C") {
      divValue.innerHTML = "";
      sum = "";
    }
  });
}
