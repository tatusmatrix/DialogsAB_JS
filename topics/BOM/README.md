## BOM (Browser Object Model - pārlūka objekta modelis)
[Izmēģināts un tulkots no JavaScript Tutorial](https://www.javascripttutorial.net/javascript-bom/)  
Var uztvērt kā saskarni pārlūka (aplikācijas) kontrolei  
**[Visu saskarņu saraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API#interfaces)**


### Window
Viss, kas ir pieteikts ar ```var```, kļūst par ```window``` īpašību vai metodi  


#### Loga izmēri
- ```window.innerWidth``` = (gandrīz) = ```document.documentElement.clientWidth``` = (gandrīz) = ```document.body.clientWidth```
- ```window.innerHeight``` = (gandrīz) = ```document.documentElement.clientHeight``` = (gandrīz) = ```document.body.clientHeight```  
[(salīdzinājums)](https://stackoverflow.com/questions/6942785/window-innerwidth-vs-document-documentelement-clientwidth)


#### Loga atvēršana, izmēra izmaiņa, pārvietošana un aizvēršana
- [Window.open() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)  
- [Window.resizeTo() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo)
- [Window.resizeBy() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeBy)
- [Window.moveTo() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/moveTo)
- [Window.moveBy() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/moveBy)
- [Window.close() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/close)  

```
let loga_iestatiijumi = 'height=600,width=800',
    url = 'https://termini.gov.lv/';
let jsLogs = window.open(url, 'termini', loga_iestatiijumi);
```

**NB1!** Lai varētu kontrolēt jaunatvērta loga izmēru utt., tam jābūt atvērtam viena domēnā ietvaros ar logu, no kura tas ir atvērts ([CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS))  
**NB2!** Ja lapa, no kuras notika atvēršana, ir pārladēta, tad kontrole par atvērto logu var tikt pazaudēta.  
Paņēmiens kontroles atgūšanai (mēģināt atvērt lapu ar tādu pašu nosaukumu):  
```
reference_uz_logu = window.open('', 'iepriekš_izmantotais_loga_nosaukums', '', true);
reference_uz_logu.close();
```
**NB3!** Kontrole var eksistēt arī atpakaļ virzienā no atvērta loga uz atvērušo logu ar [window.opener](https://developer.mozilla.org/en-US/docs/Web/API/Window/opener) palīdzību (tādas kontroles bīstamības [apspriešana Nr1](https://mathiasbynens.github.io/rel-noopener/), [apspriešana Nr2](https://owasp.org/www-community/attacks/Reverse_Tabnabbing))


#### Ziņojumi
[Window.alert() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) [^note_exec_stop_1].


#### Apstiprinājumi (dialogs ar "jā" un "nē")
[Window.cofirm() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm) [^note_exec_stop_1].


#### Dialogs
[Window.prompt() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) ([datu tipa pārveidošana (katram gadījumam)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)) [^note_exec_stop_1].

[^note_exec_stop_1]: Koda izpilde apstājas līdz lietotājs izdara savu izvēli.


#### Taimeri un periodiskā funkciju izsaukšana
**NB4!** Tikai viens process vienā konkretā laika momentā.
##### Taimeris
[Window.setTimeout() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) [^note_exec_cont_1].  
[Window.clearTimeout() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout).  
[^note_exec_cont_1]: Koda fragments (funkcija) tiks izpildīts pie pirmās izdevības - FIFO - first in first out.

##### Periodiskā funkciju izsaukšana
[Window.setInterval() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) [^note_exec_cont_2].  
[Window.clearInterval() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval).  
[^note_exec_cont_2]: Koda fragments (funkcija) regulāri tiks izpildīts pie pirmās izdevības - FIFO - first in first out.


#### Adrese
[Adreses "anatomija"](https://developer.mozilla.org/en-US/docs/Web/API/Location).  
Svarīgākās īpašības:  
- ```href``` - pilnā adrese ar parametriem un dokumenta sadaļas lokālo adresi (viss tas, kas ir ierakstīts adreses rindā pārlukā)
- ```protocol``` - pieslēguma protokols
- ```hostname``` - servera vārds (tā saucamais "domain name")
- ```host``` - servera vārds un pieslēgumam izmantojamais ports
- ```origin``` - prioritārā adrese tīkla meklētājiem (google utt.; [papildu informācija](https://www.shopify.com/partners/blog/canonical-urls))
- ```path``` - maršruts tīkla servisa ietvaros
- ```search``` - lapai nododāmie parametri
- ```hash``` - dokumenta sadaļas lokālā adrese (bieži izmanto lapas satura rādītāja veidošanai)

##### Adreses izmaiņas
[Pārvietošanas, veicot ierakstu vēsturē](https://developer.mozilla.org/en-US/docs/Web/API/Location/assign)  
[Pārvietošanas, neveicot ierakstu vēsturē](https://developer.mozilla.org/en-US/docs/Web/API/Location/replace)  
[Lapas pārladēšana](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)  
[Pārvietošanas viena tīkla servisa ietvaros](https://www.javascripttutorial.net/javascript-bom/javascript-redirect/)

##### Darbs ar parametriem
[Parametru izgūšana un iespējamas darbības ar tiem](https://www.javascripttutorial.net/javascript-bom/javascript-get-query-string/)


#### Informācija par pārlūku
[Saskarne informācijas par pārlūku izgūšanai](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)


#### Informācija par pārlūka ekrānu
[Saskarne informācijas par pārlūka ekrānu izgūšanai](https://developer.mozilla.org/en-US/docs/Web/API/Screen)


#### Informācija par pārlūka loga vēsturi
[Saskarne informācijas par pārlūka loga vēsturi izgūšanai](https://developer.mozilla.org/en-US/docs/Web/API/History)  
**NB5!** Drošības apsvērumu dēļ apmeklēto lapu saraksts nav pieejams, var tikai pārvietoties. Kā zinām, pārvietojoties, loga kontrole sakās no jaunā atbilstoši lapas saturam.

**Tas nav viss - skat. [Visu saskarņu saraksts no MDN](#bom-browser-object-model---p%C4%81rl%C5%ABka-objekta-modelis)**