# Express.js / MySQL esimerkki

## .env
Yleensä .env lisätään .gitignoreen, jolloin sitä ei oteta GitRepoon.
Ja silloin kun "deploy" pilvipalveluun tehdään GitRepon kautta, niin kyseiseen pilvipalveluun määritetään samat ympäristömuuttujat.

Esimerkiksi tässä sovelluksessa .env:ssä on rivit 
<pre>
MYSQL_SERVER = "mysql://netuser:netpass@localhost:3306/library"
PORT=3000
</pre>
Ja silloin pilvipalvelussa voisi olla vaikka näin:
<pre>
MYSQL_SERVER = "mysql://netuser:netpass@mysqlserver.firma.com:3306/library"
PORT=5000
</pre>

## branch database_auth
Tässä branchissä autentikointi tapahtuu http-basicillä, jossa tunnus ja salana kelpaa, jos ne ovat tietokannan user_table taulussa.