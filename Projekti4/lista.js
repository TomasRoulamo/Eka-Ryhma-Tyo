function teksti(){
  var solmu = document.createElement("LI");
  var teksti = document.getElementById("boxi").value;
  var tekstisolmu = document.createTextNode(teksti);
  
  
  function teeListaHomma(){
    solmu.appendChild(tekstisolmu);
    document.getElementById("ekaLista").appendChild(solmu);
    document.getElementById("ekaLista").classList.add("li")
    return false;
  }
  var boksi = document.getElementById("boxi").value;//Tarkistaa uuden tehtävän pituuden
    if(boksi.length < 2);
    {
      alert('Et ole kirjoittanut lisättävää tehävää.');
      return false;
    }
  }
  function crossOut() {
    li.addEventListener("click",crossOut);
    li.classList.toggle("valmis");
    return false;
	}
