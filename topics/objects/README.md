## JavaScript objekti.
[Izmēģināts un tulkots no ...](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
### Objektu izveidošana.
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
