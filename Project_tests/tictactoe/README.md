# TicTacToe (desas) spēle
## Noteikumi (N)
1. **3 x 3** lauciņi  
  1.1. sākumā lauciņi ir tukši (nav aizpildīti ar simboliem)
2. **X** un **O** simboli
3. sākt var jebkurš
4. pirms gājiena notiek labākā gājiena izvēle
5. pēc katra gājiena notiek analīze:  
  5.1. vai nav vinnesta kombinācija  
  (visa augšēja rinda, visa vidēja rinda, ...,  
  ... kolonna, ...,  
  ... diagonāle)  
  5.2. ja 5.1. nav beidzies ar vinnesta apstiprināšanu, tad vai ir vēl kur iet

## Ieteikumi
- Pārdomāt algoritmu
- Pārdomāt pārskatāmu un pēc iespējas viegli realizējamu stāvokļu kontroli

## Realizācija ar HTML, CSS un JS (R)
0. Spēlē spēlēs cilvēks un dators 
1. Atbilstoši N.1. - tabula bez ārējām robežām    
  Katram lauciņam savs indentifikators, bet vienota klase  
  1.1.1. Atbilstoši N.1.1. katra šūna ir aizpildīta ar tukšu rindu - ```''```  
  1.1.2. Katrai šūnai "nospiešanas detektors" - ```Listener``` + ```click```
2. Cilvēks izmantos **O** simbolu
3. Cilvēks sāk pirmais, datora gājiens vienmēr notiek automātiski pēc, protams, ja cilvēks vēl nav uzvarējis un ir kur iet
4. Civēks domā pats, datoram palīdz algoritms (tiek izvēlēta nākamā šūna gājienam => šūnām jābūt kaut kādā veidā indeksētām)
5. ...  
  5.1. Atbilstošo simbolu (pēc cilvēka gājiena - **O**, pēc datora gājiena gājiena - **X**) atrašanas vietas un šo atrašanas vietu salīdzināšana ar vinnesta kombinācijām  
  5.2. Ja ir kur iet, ja tik ko ir bijis cilvēka gājiens, tad tiek izpildīts R.4. datoram un, attiecīgi, ja bijis datora gājiens, tad tiek gaidīts notikums - cilvēka izvēle 

## Paņēmieni turpmākai izmantošanai
### HTML un CSS
- Tabulas robežu zīmēšana / nezīmēšana
### JS
- Kontrole katram lauciņam (unificēti, izmantojot vienu un to pašu klasi un dažādus id)
- Intersējošā lieluma meklēšana masīvā un atbilstošo indeksu atlase atseviškā masīvā
  ```
  array_to_look_through.reduce((array_search_result_index_to_store,e,i) => (e === value_to_find) ? array_search_result_index_to_store.concat(i) : array_search_result_index_to_store : [])
  ```  
- Masīva (masīva rindas vai kolonnas) visu vērtību meklēšana citā masīvā
  ```
  for (let [index, value_list_to_check] of array_with_values_to_check.entries()) {
    if (value_list_to_check.every(elem => array_in_which_value_to_find.indexOf(elem) > -1)) {
	  ... // what to do if all values in list are found
	  break;
		}
	}  
  ```
- Masīva elementu atlase atsevišķā masīvā uz kaut kāda nosacījuma bāzes  
  ```
  array_to_check.filter(array_current_element => typeof array_current_element == 'number');
  ```
