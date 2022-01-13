Poleceniem npx create-react-app recruitment-task-1, utworzyłem szkielet aplikacji react, 
W stworzonym komponencie Datalist.jsx utworzyłem tabelę poprzez props pobieram dane z komponentu App.jsx, w którym przy użyciu this.state.worker.map(), mapuję po tabicy worker.
W komponencie AddForm.jsx utworzyłem formularz z 4 imputami i jednym buttonem. Poprzez ‘[e.target.name]: e.target.value’ i przy wykorzystaniu zdarzenia onChange pobieram dane z inputów. W komponencie App.jsx dane z inputów nadpisują obiekt ‘newworker’ dzięki’ Object.assign’. 
Dzieki ‘spread operator’ dodaje elementy pobrane z inputów do tablicy ‘worker’.
W komponencie AddForm.jsx sprawdzam czy pola inmutów nie są puste if(val.length > 0){
        return true;
    }else{
        return false;
    }
Postawiam ją pod zmienną     const validInputsCheck  i ustawiam jako wartość <buton disabled=…>,
Ponieważ disabled jest ustawiny domyślnie na false a validInputsCheck po spełnieniu warunków jest true, warunek na true nie może zostać spełniony, bo wtedy zadziała domyślne ustawnie buton disabled. Zapisuję więc ‘!validInputsCheck’.
 Przez użycie funkcji dodatkowej która sprawdza czy tablica nie jest pusta ‘function hideShow’, jeżeli warunek przechodzi na ‘true’ wyświetla się komponent ‘title.jsx’

