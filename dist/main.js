const search = document.getElementById("search");
const searchResults = document.getElementById("searchResults");

document.querySelector("button").addEventListener("click", result);
function result(e) {
  var option = document.getElementById("providers");
  var selected = option.options[option.selectedIndex].value;
  console.log(selected)
  const result = search.value.replace(/ /g, "+");
  var requestURL = `https://torrent-search.netlify.app/.netlify/functions/api/${selected}/${result}`;
  var request = new XMLHttpRequest();
  request.open("GET", requestURL, true);
  request.setRequestHeader('Content-Type', 'multipart/form-test');
  request.responseType = "json";

  if(request.readyState != 4) {
    document.querySelector(".spinner").style.display = "inline-block";
    document.querySelector(".searchText").style.display = "none";
    searchResults.innerHTML = '';
  }

  request.onload = function () {
    document.querySelector(".spinner").style.display = "none";
    document.querySelector(".searchText").style.display = "inline-block";
    var ajaxResponse = this.response;

    if(ajaxResponse.error != null){
      console.error(ajaxResponse.error);
      let error = ajaxResponse.error;
      var div = document.createElement("div");
      div.innerHTML = `</br><i class="error">${error}</i>`;
      searchResults.appendChild(div);
    }

    if (selected == "tgx") {
      let TorrentGalaxy = ajaxResponse;
      for (var i = 0; i < TorrentGalaxy.length; i++) {
        console.log(TorrentGalaxy[i])
        var div = document.createElement("div");
        div.innerHTML = `</br><span>Name: ${TorrentGalaxy[i].Name}<span> </br>
                           <span>Category: ${TorrentGalaxy[i].Category}</span> </br>
                           <span>Size: ${TorrentGalaxy[i].Size}</span> </br>
                           <span>Leechers: ${TorrentGalaxy[i].Leechers}</span> </br>
                           <span>Seeders: ${TorrentGalaxy[i].Seeders}</span> </br>
                           <span>Magnet: ${TorrentGalaxy[i].Magnet}</span> </br>
                           <button class="torrent"><a href="${TorrentGalaxy[i].Torrent}"><i class="fas fa-download"></i> Download Torrent</a></button> </br>
                           <hr>
                           `;
        searchResults.appendChild(div);
      }
    }
    if (selected == "eztv") {
      let eztv = ajaxResponse;
      for (var i = 0; i < eztv.length; i++) {
        console.log(eztv[i])
        var div = document.createElement("div");
        div.innerHTML = `</br><span>Name: ${eztv[i].Name}<span> </br>
                           <span>Size: ${eztv[i].Size}</span> </br>
                           <span>Magnet: ${eztv[i].Magnet}</span> </br>
                           <button class="torrent"><a href="${eztv[i].Torrent}"><i class="fas fa-download"></i> Download Torrent</a></button> </br>
                           <hr>
                           `;
        searchResults.appendChild(div);
      }
    }
    if (selected == "1337x") {
      let numberX = ajaxResponse;
      for (var i = 0; i < numberX.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `</br><span>Name: ${numberX[i].Name}<span> </br>
                           <span>Category: ${numberX[i].Category}</span> </br>
                           <span>Type: ${numberX[i].Type}</span> </br>
                           <span>Size: ${numberX[i].Size}</span> </br>
                           <span>Leechers: ${numberX[i].Leechers}</span> </br>
                           <span>Seeders: ${numberX[i].Seeders}</span> </br>
                           <span>Magnet: ${numberX[i].Magnet}</span> </br>
                           <button class="torrent"><a href="${numberX[i].Torrent}"><i class="fas fa-download"></i> Download Torrent</a></button> </br>
                           <hr>
                           `;
        searchResults.appendChild(div);
      }
    }
    if (selected == "nyaasi") {
      let nyaasi = ajaxResponse;
      for (var i = 0; i < nyaasi.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `</br><span>Name: ${nyaasi[i].Name}<span> </br>
                           <span>Category: ${nyaasi[i].Category}</span> </br>
                           <span>Size: ${nyaasi[i].Size}</span> </br>
                           <span>Leechers: ${nyaasi[i].Leechers}</span> </br>
                           <span>Seeders: ${nyaasi[i].Seeders}</span> </br>
                           <span>Magnet: ${nyaasi[i].Magnet}</span> </br>
                           <button class="torrent"><a href="${nyaasi[i].Torrent}"><i class="fas fa-download"></i> Download Torrent</a></button> </br>
                           <hr>
                           `;
        searchResults.appendChild(div);
      }
    }
    if (selected == "Piratebay") {
      let piratebay = ajaxResponse;
      for (var i = 0; i < piratebay.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `</br><span>Name: ${piratebay[i].Name}<span> </br>
                           <span>Category: ${piratebay[i].Category}</span> </br>
                           <span>Size: ${piratebay[i].Size}</span> </br>
                           <span>Leechers: ${piratebay[i].Leechers}</span> </br>
                           <span>Seeders: ${piratebay[i].Seeders}</span> </br>
                           <span>Magnet: ${piratebay[i].Magnet}</span> </br>
                           <button class="torrent"><a href="${piratebay[i].Torrent}"><i class="fas fa-download"></i> Download Torrent</a></button> </br>
                           <hr>
                           `;
        searchResults.appendChild(div);
      }
    }
    if (selected == "torlock") {
      let torlock = ajaxResponse;
      for (var i = 0; i < torlock.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `</br><span>Name: ${torlock[i].Name}<span> </br>
                           <span>Category: ${torlock[i].Category}</span> </br>
                           <span>Size: ${torlock[i].Size}</span> </br>
                           <span>Leechers: ${torlock[i].Leechers}</span> </br>
                           <span>Seeders: ${torlock[i].Seeders}</span> </br>
                           <span>Magnet: ${torlock[i].Magnet}</span> </br>
                           <button class="torrent"><a href="${torlock[i].Torrent}"><i class="fas fa-download"></i> Download Torrent</a></button> </br>
                           <hr>
                           `;
        searchResults.appendChild(div);
      }
    }
    if (selected == "rarbg") {
      let rarbg = ajaxResponse;
      for (var i = 0; i < rarbg.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `</br><span>Name: ${rarbg[i].Name}<span> </br>
                           <span>Category: ${rarbg[i].Category}</span> </br>
                           <span>Size: ${rarbg[i].Size}</span> </br>
                           <span>Leechers: ${rarbg[i].Leechers}</span> </br>
                           <span>Seeders: ${rarbg[i].Seeders}</span> </br>
                           <span>Magnet: ${rarbg[i].Magnet}</span> </br>
                           <button class="torrent"><a href="${rarbg[i].Torrent}"><i class="fas fa-download"></i> Download Torrent</a></button> </br>
                           <hr>
                           `;
        searchResults.appendChild(div);
      }
    }
    if (selected == "yts") {
      let yts = ajaxResponse;
      for (var i = 0; i < ajaxResponse.length; i++) {
        let test = yts[i].Files;
        console.log(test.length);

        let HTML = ``;
        for (var j = 0; j < yts[i].Files.length; j++){
          let filesHTML = `<span>Files:</span> </br>
          <span>Quality:</span> ${yts[i].Files[j].Quality} </br>
          <span>Magent:</span> ${yts[i].Files[j].Magnet} </br>`
          filesHTML.push(HTML);
          console.log(filesHTML)
        }

          var div = document.createElement("div");
          div.innerHTML = `</br><span>Name:</span> ${yts[i].Name} </br>
                             <span>Genre:</span> ${yts[i].Genre} </br>
                             ${HTML}
                             `;
          div.setAttribute("id", `${[i]}`);
          div.setAttribute("class", `${[test.length]}`);
          searchResults.appendChild(div);
          

        
        // let ytsResults = getElementById(`${[i]}`);
        // console.log(ytsResults)
        // for (var j = 0; j < yts[i].Files.length; j++){
        //   var filesDiv = document.createElement("div");
        //   filesDiv.innerHTML = `</br><span>Magnet:</span> ${yts[i].Files[j].Magnet}</br>`;
        //   ytsResults[i].appendChild(filesDiv);
        // }
      }
    }
  };
  
  request.send();

  e.preventDefault();
}
