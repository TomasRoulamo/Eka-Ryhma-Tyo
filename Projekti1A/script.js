function tarkista()
{
 // Etunimen tarkastus
      var eNimi = document.getElementById('eka').value;

    if(eNimi.length<2)
    {
    alert("Et antanut etunimeäsi!\nEtunimen pitää olla enemmän kuin kaksi kirjainta pitkä");


    return false;
    }

     // Salasanan tarkastus
      var Passu = document.getElementById('toka').value;

      if(Passu.length<3)
      {
      alert("Et antanut salasanaa tai se on liian lyhyt!\nSalasanan pitää olla enemmän kuin kolme kirjainta pitkä");

      return false;
      }


    //Radion valitseminen
      var pallukat = document.getElementsByName('vastaukset');
      var vastaus = 0;
      for(var i = 0; i < pallukat.length; i++)
      {
        if(pallukat[i].checked == 1)
        {
          vastaus = 1;
        }
      }
      if(vastaus == 0)
      {
        alert("Et ole valinnut kohtaa 'Millainen koneen käyttäjä olet'");
      }



     //Checkbox
     var boxi = document.getElementsByName('mielipiteet');
     var vastaus = 0;
     for(var i = 0; i < boxi.length; i++)
     {
       if(boxi[i].checked == 1)
       {
         vastaus = 1;
       }
     }
     if(vastaus == 0)
     {
       alert("Et ole valinnut kohtaa 'Mitä mieltä olet sivustani tähän asti?'");
     }

     var lemppari = document.getElementById('aineet');//Lempiaineen tarkastus
      if(lemppari = ''){
        alert('Et ole valinnut lempainetta.');
        return false;
      }

      var pyly = document.getElementsByName('Teksti');//Tekstiboxi

        if(pyly.length > 10)
        {
        alert("Et kirjoittanut palautteeseesi mitään tekstiä! (min. 10 merkkiä)");

        return false;
        }
        
      }
