# DialogsAB_JS
## JavaScript
Shift + Alt + F - lai formatēt kodu Visual Studio Code

### JavaScript masīvi. Masīvi un to lietošana.
Tiks izmantoti piemēri no [w3schools JavaScript Arrays sadaļas](https://www.w3schools.com/js/js_arrays.asp)
- Ieteicams izmantot const paņemienu, lai vienā brīdī ar = operatoru visa masīva saturu nepazaudētu, pārveidojot datu tipu
 - Var tikt izveidots tukšs masīvs []
 - Masīvu var papildināt, izmantojot masīva vārdu (identifikatoru), indeksu ([n]), piešķiršanu (=), bet jāuzmanās ar indeksiem, jo var palikt undefined vērtības, ja indeksu vērtības neies secīgi
 - Pie masīva elementu vērtībām tiek, izmantojot masīva vārdu un indeksu
 - Masīvs ir objekts
 - Ar length īpašības palīdzību var noskaidrot masīva garumu (elementu skaits)
 - Masīva pirmā elementa vērtību iegūst ar [0] indeksu
 - Masīva pēdējā elementa vērtību iegūst ar [garums - 1] indeksu
 - Simbolu rinda arī ir masīvs

#### Noderīgas metodes darbam ar masīviem
Tiks izmantoti piemēri no [w3schools JavaScript Array Methods sadaļas](https://www.w3schools.com/js/js_array_methods.asp)
- Masīva papildināšana no beigām - push() metode (tiek izgūta un var tikt atsevišķi saglabāta paša izgriezta elementa vērtība - masīvs ar vienu elementu)
- Pēdējā elementa dzēšāna - pop() metode (tiek izgūta un var tikt atsevišķi saglabāta paša izgriezta elementa vērtība  - masīvs ar vienu elementu)
- Vērtības(u) ievietošana un dzēšana - splice(kur sākt, cik izgriest,[ko ievietot]) metode (tiek izgūta(s) un var tikt atsevišķi saglabāta(s) paša(u) izgriezta(o) elementa vērtība(s) - masīvs ar izgrieztiem elementu)
- Masīva papildināšana - concat() (netiek mainīts sākuma masīvs)
- Masīva vērtību kopēšana - slice(no kura indeksa, līdz kuram to neieskaitot) (netiek mainīts sākuma masīvs)

Tiks izmantoti piemēri no [w3schools JavaScript Sorting Arrays sadaļas](https://www.w3schools.com/js/js_array_sort.asp)
- Masīva vērtību kārtošana - sort() (tiek izmainīts pats masīvs)
- Masīva "pagriešana otrādi" - reverse() (tiek izmainīts pats masīvs)
- Masīvu ar skaitļiem kārtošanai ir jāpievieno papildu "konstrukcija" - sort(function(a, b){return a - b})
- Min vērtības izgūšanai var izmantot sort() metodi un [0] indeksu (vajadzības gadījumā izmantot masīva kopiju)
- Max vērtības izgūšanai var izmantot sort() metodi un [N-1] indeksu, kur N ir masīva garums (vajadzības gadījumā izmantot masīva kopiju)

### JavaScript objekti.
[Izmēģināts un tulkots no ...](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
#### Objektu izveidošana.
- Declaring an object literal ("tiešā" veidošana)  
```
const object_name = { ... }; // pazīme - {} iekavas
```
- Using a constructor function (izmantojot konstruktora funkciju)  
  - "gari" (ar iekšējo tukšo objektu)
  ```
  function createNewObject( ... ){ ... }
  const object_name = createNewObject( ... );
  ```
  - "īsi" (bez iekšējā tukšā objekta, bet izmantojot atslēgas vārdu ```new```; **NB!** ir izmainīta - papildināta standarta ```constructor``` funkcija)
  ```
  function NewObject( ... ){ ... }
  const object_name = new NewObject( ... );
  ```
  - standarta objekta konstruktors
  ```const object_name = new Object();```
- Using the create() method (kā prototipu izmantojot kādu jau esošo objektu)
```
let new_object_name = Object.create(object_name);
```
