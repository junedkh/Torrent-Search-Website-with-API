const search = document.getElementById('search');
const matchList = document.getElementById('match-make_list');

document.querySelector('form').addEventListener('submit',result);
function result(e){
    const result = search.value.replace(/ /g, "_");
    var requestURL = `https://torrents-api.netlify.app/.netlify/functions/api/all/${result}`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL, true);
    request.responseType = 'json';
    request.send();
  
    request.onload = function() {
      var ajaxResponse = this.response[0];
      console.log(ajaxResponse);
    //   var text = JSON.stringify(ajaxResponse);
    //   matchList.innerText = text;
    for (var i = 0; i < ajaxResponse.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = `</br><span>Name: ${ajaxResponse[i].Name}<span> </br>
                         <span>Category: ${ajaxResponse[i].Category}</span> </br>
                         <span>Size: ${ajaxResponse[i].Size}</span> </br>
                         <span>Leechers: ${ajaxResponse[i].Leechers}</span> </br>
                         <span>Seeders: ${ajaxResponse[i].Seeders}</span> </br>
                         <span class="magnet">Magnet: ${ajaxResponse[i].Magnet}</span> </br>
                         `;
        matchList.appendChild(div);
    }
    }
    e.preventDefault();
}


