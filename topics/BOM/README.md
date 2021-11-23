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
#### Loga atvēršana un aizvēršana
[Window.open() apraksts no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)
```
let loga_iestatiijumi = 'height=600,width=800',
    url = 'https://termini.gov.lv/';
let jsLogs = window.open(url, 'termini', loga_iestatiijumi);
```
**NB!** Ja lapa, no kuras notika atvēršana, ir pārladēta, tad kontrole par atvērto logu var tikt pazaudēta.  
Paņēmiens kontroles atgūšanai (mēģināt atvērt lapu ar tādu pašu nosaukumu):  
```
reference_uz_logu = window.open('', 'iepriekš_izmantotais_loga_nosaukums', '', true);
reference_uz_logu.close();
```
