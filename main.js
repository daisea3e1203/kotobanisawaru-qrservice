function Generate() {
  // Get target Elements.
  let input;
  let twitterid = document.getElementById("input-area-twitter");
  let instagramid = document.getElementById("input-area-instagram");
  let selfin = document.getElementById("input-area-self");
  let output = document.getElementById("input-val");
  let qrView = document.getElementById("qrcode");
  // Delete Old Data
  output.innerText = "";
  qrView.innerHTML = "";
  // Update View
  input = twitterid.value + "/" + instagramid.value + "/" + selfin.value;
  output.innerText = input;
  input = unescape(encodeURIComponent(input));
  $("#qrcode").qrcode({ width: 200, height: 200, text: input });
}
