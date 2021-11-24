## BOM (Browser Object Model - pārlūka objekta modelis)
[Izmēģināts un tulkots no ...](https://www.javascripttutorial.net/javascript-bom/)  
Var uztvērt kā saskarni pārlūka loga (aplikācijas) kontrolei  
[Visu saskarņu saraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API#interfaces)

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
[Window.alert() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)

#### Apstiprinājumi (dialogs ar "jā" un "nē")
[Window.cofirm() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm)

#### Dialogs
[Window.prompt() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) ([datu tipa pārveidošana (katram gadījumam)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))
