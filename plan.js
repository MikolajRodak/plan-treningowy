/*
 * TREŚĆ PLANU
 * ------------------------------------------------------------
 * Żeby zmienić ćwiczenia, serie albo opisy, edytujesz tylko ten plik.
 *
 * Każde ćwiczenie ma:
 *   id     – stały, unikalny identyfikator. Po nim zapisywane są wyniki,
 *            więc NIE zmieniaj go dla istniejącego ćwiczenia.
 *   tag    – numer wyświetlany na karcie (A1, B3...). Można go zmieniać.
 *   video  – końcówka adresu nagrania z musclewiki.com
 *            (np. 'barbell-hip-thrust' z musclewiki.com/exercise/barbell-hip-thrust).
 *   rest   – przerwa w sekundach (używana przez minutnik).
 *   next   – (opcjonalnie) co zrobić, gdy ćwiczenie robi się za łatwe.
 *
 * Sesja może mieć pole tab – własną nazwę zakładki (np. 'W domu').
 */
window.PLAN = {
  title: 'Plan treningowy',
  subtitle: 'Nacisk na dół: pośladki i nogi 2× na siłowni i 1× w domu, góra 1× w tygodniu',
  videoBase: 'https://musclewiki.com/pl-pl/exercise/',
  videoQuery: '?model=f',

  sessions: [
    {
      code:'A', name:'POŚLADKI', focus:'Tylko pośladki — wyprost i odwodzenie biodra',
      ex:[
        {
          id:'barbell-hip-thrust', tag:'A1', video:'barbell-hip-thrust', name:'Hip thrust ze sztangą (plecy oparte o ławkę)', sets:'4 × 8–10', rest:120,
          badge:'Start: mostek biodrowy', swapVideo:'dumbbell-glute-bridge', swapVideoTitle:'Wideo: mostek biodrowy z hantlem',
          swap:'<b>Pierwsze 4 tygodnie: mostek biodrowy z hantlem zamiast sztangi.</b> Leżysz na macie, kolana ugięte, stopy blisko pośladków, hantel trzymany rękami na biodrach. Wypychasz biodra w górę, pauza 1 sekunda, powolny powrót — 3 × 12–15. Zakres jest mniejszy niż w hip thruście, ale ustawienie proste, a gryf nie uciska bioder. Na sztangę przechodzisz wtedy, gdy 3 × 15 z najcięższym wygodnym hantlem robi się łatwe.',
          setup:'Ławka stabilnie oparta o ścianę lub stojak, żeby nie odjechała. Usiądź na podłodze plecami do ławki tak, aby jej krawędź trafiła w dolne krawędzie łopatek. Sztanga leży w zgięciu bioder, koniecznie na grubej podkładce lub zrolowanej macie. Stopy płasko, na szerokość bioder — ustaw je tak, żeby w górnej pozycji goleń była pionowa.',
          steps:[
            'Schowaj brodę do klatki i patrz na swoje kolana — wzrok podąża za ruchem, a nie ucieka w sufit.',
            'Wepchnij pięty w podłogę i wypchnij biodra w górę siłą pośladków.',
            'W górnej pozycji tułów i uda tworzą jedną poziomą linię. Zatrzymaj się na 1 sekundę i maksymalnie ściśnij pośladki.',
            'Opuszczaj przez 2–3 sekundy. Biodra tylko muskają podłogę i od razu wracają w górę.'
          ],
          avoid:[
            'Wyginanie lędźwi, żeby wyjść wyżej. Jeśli na górze czujesz dolne plecy zamiast pośladków — ruch był robiony kręgosłupem.',
            'Odchylanie głowy do tyłu — pociąga za sobą przeprost lędźwi.',
            'Unoszenie pięt i wypychanie z palców.',
            'Kolana uciekające do środka — trzymaj je nad stopami.',
            'Sztanga bez podkładki. To nie kwestia wygody, tylko tego, czy po dwóch seriach da się kontynuować.'
          ]
        },
        {
          id:'machine-leg-press', tag:'A2', video:'machine-leg-press', videoNote:'Na nagraniu stopy stoją niżej — ustaw je wysoko i szeroko, jak w opisie.', name:'Prasa leżąca (wypychanie ciężaru w górę) — stopy wysoko i szeroko', sets:'3 × 10–12', rest:120,
          setup:'Plecy i pośladek całą powierzchnią przylegają do oparcia. Stopy w górnej części platformy, szerzej niż biodra, palce lekko skierowane na zewnątrz.',
          steps:[
            'Wypchnij platformę i dopiero wtedy odbezpiecz maszynę dźwigniami po bokach.',
            'Opuszczaj ciężar przez 2–3 sekundy, aż kolana dojdą do kąta około 90 stopni.',
            'Wypchnij ciężar przez pięty, kolana prowadzone w linii stóp.',
            'Zatrzymaj tuż przed pełnym wyprostem i zaczynaj następne powtórzenie.'
          ],
          avoid:[
            'Odrywanie pośladka i dolnych pleców od oparcia na dole ruchu. To najgroźniejszy błąd na tej maszynie — cały ciężar ląduje wtedy na lędźwiach. Jeśli miednica się podwija, schodź płycej.',
            'Blokowanie kolan na prostych nogach z ciężarem nad sobą.',
            'Kolana zapadające się do środka.',
            'Łapanie rękami za kolana — trzymaj uchwyty maszyny.',
            'Odbijanie ciężaru od dolnej pozycji.'
          ]
        },
        {
          id:'cable-standing-glute-kickback', tag:'A3', video:'cable-standing-glute-kickback', name:'Kickback na wyciągu (odprowadzanie nogi w tył)', sets:'3 × 12–15 / nogę', rest:60,
          setup:'Opaska na kostkę, wyciąg ustawiony na najniższej pozycji. Stań przodem do wyciągu, około pół metra od niego, i trzymaj się ramy obiema rękami. Tułów lekko pochylony do przodu, noga podporowa lekko ugięta. Podwiń miednicę i napnij brzuch — to ustawienie trzymasz przez całą serię.',
          steps:[
            'Odprowadź pracującą nogę do tyłu i lekko w górę, prowadząc ruch piętą. Kolano lekko ugięte, stopa zgięta — palce do siebie.',
            'Zatrzymaj się, gdy udo minie linię tułowia. Pauza 1 sekunda i mocno ściśnij pośladek.',
            'Wracaj przez 2–3 sekundy, aż stopa znajdzie się obok nogi podporowej. Linka ma być cały czas napięta.',
            'Skończ całą serię na jedną nogę, potem zmień stronę.'
          ],
          avoid:[
            'Wyginanie lędźwi, żeby wyrzucić nogę wyżej. To najczęstszy błąd w tym ćwiczeniu — ostatnie centymetry w górę robi wtedy kręgosłup, nie pośladek. Zakres kończy się, gdy miednica zaczyna się przechylać.',
            'Zamach i bujanie nogą. Każde powtórzenie zaczyna się od zera, bez rozpędu.',
            'Otwieranie biodra na zewnątrz i skręcanie miednicy — biodra zostają ustawione równo, przodem do wyciągu.',
            'Odkładanie ciężaru na stos między powtórzeniami.',
            'Zbyt duży ciężar. Tu pracuje się lekko i na czucie — jeśli nie czujesz pośladka, ciężar jest za duży.'
          ]
        },
        {
          id:'machine-standing-hamstring-curl', tag:'A4', video:'machine-standing-hamstring-curl', videoNote:'Twoja maszyna może wyglądać trochę inaczej — liczy się podwinięta miednica i powolny powrót.', name:'Zginanie nogi w tył stojąc (maszyna) — jednonóż', sets:'3 × 12 / nogę', rest:60,
          setup:'Stajesz przodem do maszyny, biodro oparte o poduszkę, dłonie na uchwytach, tułów lekko pochylony do przodu. Noga podporowa lekko ugięta — nigdy zablokowana. Najważniejsze jest ustawienie miednicy: podwiń ją pod siebie i utrzymaj przez całą serię. Wałek opiera się z tyłu nogi — nad piętą, jeśli w tej maszynie zgina się kolano, albo nad kolanem, jeśli odprowadza się w tył całą nogę.',
          steps:[
            'Napnij brzuch i podwiń miednicę. To jedno ustawienie decyduje, czy ćwiczenie robi pośladek, czy dolne plecy.',
            'Jeśli maszyna zgina kolano: prowadź piętę w stronę pośladka, biodro nieruchomo przy poduszce.',
            'Jeśli odprowadzasz całą nogę: prowadź ją wyprostowaną do tyłu i zatrzymaj, gdy udo minie linię tułowia.',
            'W końcowej pozycji zatrzymaj się na 1 sekundę i ściśnij pośladek.',
            'Wracaj przez 3 sekundy, nie pozwalając ciężarowi opaść na stos.'
          ],
          avoid:[
            'Wyginanie lędźwi i odchylanie tułowia, żeby wyprowadzić nogę dalej. Zakres kończy się tam, gdzie miednica zaczyna się przekręcać — zwykle znacznie wcześniej, niż pozwala maszyna.',
            'Machanie nogą i wracanie ciężaru rozpędem.',
            'Skręcanie miednicy w bok — biodra równolegle do maszyny.',
            'Wspinanie się na palce nogi podporowej, żeby zrobić więcej miejsca.',
            'Zbyt duży ciężar. Poznasz go po tym, że zakres robi się mały, a plecy pracują za pośladek.'
          ]
        },
        {
          id:'machine-hip-abduction', tag:'A5', video:'machine-hip-abduction', name:'Rozszerzanie nóg na zewnątrz siedząc (maszyna)', sets:'3 × 15', rest:60,
          setup:'Poduszki oporowe po zewnętrznej stronie ud, plecy oparte, stopy płasko na podnóżkach.',
          steps:[
            'Pochyl tułów lekko do przodu — w tej pozycji pracuje pośladek średni, czyli ten odpowiadający za kształt z boku.',
            'Rozsuń kolana na zewnątrz do maksimum, nie przesuwając miednicy.',
            'Zatrzymaj na 1 sekundę w najszerszej pozycji.',
            'Wracaj powoli, przez 2–3 sekundy, nie pozwalając ciężarowi opaść.'
          ],
          avoid:[
            'Odbijanie kolan i bujanie tułowiem — rozpęd zabiera tu cały efekt.',
            'Głośne trzaskanie stosem na powrocie.',
            'Zbyt duży ciężar, przy którym zakres wynosi kilka centymetrów.'
          ]
        }
      ]
    },
    {
      code:'B', name:'GÓRA', focus:'Plecy, barki i postawa — jedyny dzień na górę',
      ex:[
        {
          id:'barbell-bent-over-row', tag:'B1', video:'barbell-bent-over-row', name:'Wiosłowanie sztangą w opadzie', sets:'4 × 8–10', rest:120,
          setup:'Sztanga zdjęta ze stojaka, chwyt nachwytem nieco szerszy niż barki. Kolana lekko ugięte, biodra do tyłu, tułów pochylony 45 stopni, sztanga wisi pod barkami.',
          steps:[
            'Napnij brzuch i ustaw plecy płasko — tę pozycję trzymasz do końca serii.',
            'Ściągnij łopatki, a potem pociągnij sztangę do dolnej części brzucha.',
            'Pauza pół sekundy przy ciele.',
            'Opuszczaj przez 2–3 sekundy do pełnego wyprostu ramion.'
          ],
          avoid:[
            'Podnoszenie tułowia przy każdym powtórzeniu — wtedy ciężar podnoszą biodra, a plecy odpoczywają.',
            'Zaokrąglone plecy. Lepiej zejść o 5 kg niż o 5 stopni w kręgosłupie.',
            'Odbijanie sztangi od ud.',
            'Ciąg bicepsami z łokciami na boki.'
          ]
        },
        {
          id:'machine-pulldown', tag:'B2', video:'machine-pulldown', name:'Ściąganie drążka wyciągu górnego', sets:'3 × 10', rest:90,
          setup:'Uda zablokowane pod wałkami, chwyt nachwytem szerszy niż barki, ręce wyprostowane.',
          steps:[
            'Odchyl tułów do tyłu o jakieś 15 stopni i wypchnij klatkę w górę.',
            'Zacznij ruch od opuszczenia łopatek w dół — dopiero potem zginają się łokcie.',
            'Ciągnij łokcie w dół i do tyłu, aż drążek dojdzie do górnej części klatki.',
            'Wracaj przez 3 sekundy do pełnego wyprostu ramion.'
          ],
          avoid:[
            'Ściąganie drążka za kark — ryzykowne dla barku i bez żadnej przewagi.',
            'Bujanie całym tułowiem do tyłu.',
            'Ciągnięcie samymi rękami przy barkach podjechanych do uszu.',
            'Puszczanie ciężaru swobodnie w drodze powrotnej.'
          ]
        },
        {
          id:'dumbbell-seated-overhead-press', tag:'B3', video:'dumbbell-seated-overhead-press', name:'Wyciskanie hantli nad głowę siedząc', sets:'3 × 8–10', rest:90,
          setup:'Oparcie niemal pionowe, plecy przyklejone na całej długości. Hantle na wysokości uszu, łokcie lekko przed linią tułowia, nadgarstki proste.',
          steps:[
            'Napnij brzuch i ściągnij żebra w dół — miednica i klatka jedna nad drugą.',
            'Wyciśnij hantle w górę po lekkim łuku, aż niemal się zetkną.',
            'Nie blokuj łokci do końca.',
            'Opuszczaj przez 2–3 sekundy do wysokości uszu.'
          ],
          avoid:[
            'Wyginanie dolnego odcinka pleców i wypychanie żeber do przodu — najczęstszy błąd i główny powód bólu lędźwi po treningu barków.',
            'Łokcie rozstawione idealnie na boki.',
            'Wzruszanie barkami do uszu przy wyciskaniu.',
            'Pomaganie sobie nogami i odbicie z siadu.'
          ]
        },
        {
          id:'dumbbell-row-unilateral', tag:'B4', video:'dumbbell-row-unilateral', name:'Wiosłowanie hantlem jednorącz w podporze', sets:'3 × 12 / stronę', rest:60,
          setup:'Kolano i dłoń jednej strony na ławce, druga stopa na podłodze, lekko z tyłu. Plecy płaskie i równoległe do podłogi, hantel wisi pod barkiem.',
          steps:[
            'Ściągnij łopatkę w dół i do kręgosłupa.',
            'Pociągnij łokieć w stronę biodra, prowadząc hantel blisko tułowia.',
            'Zatrzymaj się na pół sekundy przy żebrach.',
            'Opuszczaj przez 3 sekundy i pozwól łopatce wysunąć się na końcu.'
          ],
          avoid:[
            'Skręcanie tułowia i otwieranie klatki za hantlem — barki równolegle do podłogi.',
            'Prowadzenie hantla łukiem na zewnątrz.',
            'Zaokrąglone plecy i opuszczona głowa.',
            'Ciąg bicepsem bez udziału łopatki.'
          ]
        },
        {
          id:'dumbbell-rear-delt-fly', tag:'B5', video:'dumbbell-rear-delt-fly', videoNote:'Na nagraniu ruch w innej pozycji wyjściowej — sam ruch ramion jest ten sam.', name:'Odwodzenie hantli w opadzie (tylny akton barku)', sets:'3 × 12–15', rest:60,
          setup:'Usiądź na końcu ławki i połóż tułów na udach. Hantle wiszą pod łydkami, łokcie lekko ugięte i takie zostają.',
          steps:[
            'Rozprowadź ramiona na boki, prowadząc ruch łokciami, kciuki lekko w dół.',
            'W górnej pozycji łokcie są na linii barków — zatrzymaj się na 1 sekundę.',
            'Opuszczaj powoli, przez 3 sekundy.'
          ],
          avoid:[
            'Za ciężkie hantle. Tu 1–3 kg to normalny ciężar roboczy, większy zamienia ruch w zamach.',
            'Prostowanie tułowia w górę przy każdym powtórzeniu.',
            'Zginanie i prostowanie łokci zamiast odwodzenia ramion.',
            'Zamach z dołu, żeby wyrzucić ciężar do góry.'
          ]
        }
      ]
    },
    {
      code:'C', name:'NOGI', focus:'Tył i przód uda, praca na jednej nodze',
      ex:[
        {
          id:'barbell-romanian-deadlift', tag:'C1', video:'barbell-romanian-deadlift', name:'Martwy ciąg rumuński ze sztangą', sets:'4 × 8', rest:120,
          badge:'Start: hantle', swapVideo:'dumbbell-romanian-deadlift', swapVideoTitle:'Wideo: martwy ciąg rumuński z hantlami',
          swap:'<b>Pierwsze 4 tygodnie: hantle zamiast sztangi.</b> Ten sam ruch, ale z dwoma hantlami trzymanymi przy udach — łatwiej utrzymać płaskie plecy i nauczyć się wypychać biodra do tyłu. 3 × 10. Na sztangę przechodzisz, gdy 3 × 10 z najcięższymi wygodnymi hantlami robisz z płaskimi plecami do końca serii.',
          setup:'Sztangę zdejmij ze stojaka, nie z podłogi. Stopy na szerokość bioder, chwyt nieco szerszy niż uda, kolana lekko ugięte.',
          steps:[
            'Napnij brzuch, ściągnij łopatki, sztanga dotyka ud.',
            'Wypchnij biodra do tyłu i pozwól sztandze sunąć po udach w dół.',
            'Zatrzymaj się tam, gdzie tył uda jest maksymalnie napięty, a plecy nadal płaskie — zwykle sztanga jest wtedy tuż pod kolanami.',
            'Wróć ruchem bioder do przodu, kończąc ściśnięciem pośladków.',
            'Po ostatnim powtórzeniu odstaw sztangę na stojak, nie na podłogę.'
          ],
          avoid:[
            'Schodzenie niżej „bo tak wygląda ładniej" — zakres kończy się tam, gdzie plecy przestają być płaskie.',
            'Sztanga oddalająca się od ud. Im dalej od ciała, tym większe obciążenie kręgosłupa.',
            'Zginanie kolan coraz bardziej w trakcie serii, aż ruch zamienia się w przysiad.',
            'Szarpanie i odbijanie ciężaru na dole.',
            'Odchylanie się do tyłu na końcu ruchu.'
          ]
        },
        {
          id:'dumbbell-bulgarian-split-squat', tag:'C2', video:'dumbbell-bulgarian-split-squat', name:'Przysiad bułgarski z hantlami (tylna noga na ławce)', sets:'3 × 8–10 / nogę', rest:120,
          setup:'Ławka za tobą. Przednia stopa około 60–70 cm przed ławką, tylna noga oparta na ławce grzbietem stopy lub palcami. Hantle po bokach ciała.',
          steps:[
            'Pochyl tułów lekko do przodu — im większe pochylenie, tym więcej pracy pośladka.',
            'Schodź w dół, prowadząc kolano tylnej nogi w stronę podłogi.',
            'Przednie kolano zostaje nad śródstopiem i nie ucieka do środka.',
            'Wypchnij się w górę przez piętę przedniej nogi. Tylna noga tylko podpiera.'
          ],
          avoid:[
            'Zbyt bliskie ustawienie przedniej stopy przy ławce — kolano leci wtedy daleko przed palce.',
            'Odpychanie się tylną nogą.',
            'Skręcanie i uciekanie miednicy w bok.',
            'Walka z równowagą na siłę. Na początku trzymaj się jedną ręką stojaka, a w drugiej trzymaj jeden hantel.'
          ]
        },
        {
          id:'machine-horizontal-leg-press', tag:'C3', video:'machine-horizontal-leg-press', videoNote:'Ustaw stopy nisko i wąsko, jak w opisie.', name:'Prasa siedząca (wypychanie przed siebie) — stopy nisko i wąsko', sets:'3 × 12', rest:90,
          setup:'Plecy przyklejone do oparcia, stopy w dolnej części platformy, na szerokość bioder, palce prosto lub minimalnie na zewnątrz.',
          steps:[
            'Odbezpiecz maszynę dopiero po ustawieniu pleców i stóp.',
            'Opuszczaj ciężar 2–3 sekundy, aż kolana dojdą do około 90 stopni.',
            'Wypchnij równomiernie przez całą stopę, kolana w linii stóp.',
            'Zatrzymaj tuż przed pełnym wyprostem.'
          ],
          avoid:[
            'Odrywanie pośladka i dolnych pleców od oparcia.',
            'Blokowanie kolan pod ciężarem.',
            'Kolana zapadające się do środka przy wypychaniu.',
            'Zbyt szerokie rozstawienie stóp — w tym wariancie ma pracować przód uda.'
          ]
        },
        {
          id:'cable-standing-hip-abduction', tag:'C4', video:'cable-standing-hip-abduction', name:'Odwodzenie nogi w bok na wyciągu (side kick)', sets:'3 × 15 / nogę', rest:45,
          setup:'Opaska na kostkę, wyciąg na najniższej pozycji. Stań bokiem do wyciągu — opaska na nodze dalszej od maszyny. Bliższą ręką trzymaj ramę. Tułów prosto, noga podporowa lekko ugięta, brzuch napięty.',
          steps:[
            'Odprowadź nogę w bok, lekko po skosie do tyłu. Palce stopy skierowane do przodu albo minimalnie w dół.',
            'Zakres to około 30–45 stopni. W najwyższym punkcie pauza 1 sekunda — czujesz górną, boczną część pośladka.',
            'Wracaj powoli, przez 2–3 sekundy, aż noga minie nogę podporową. Linka cały czas napięta.',
            'Skończ całą serię na jedną stronę, potem zmień nogę.'
          ],
          avoid:[
            'Przechylanie tułowia w bok, żeby wyrzucić nogę wyżej. Tułów zostaje pionowo, a zakres jest taki, na jaki pozwala biodro.',
            'Obracanie stopy palcami w górę. Wtedy pracę przejmuje przód biodra, a pośladek odpoczywa.',
            'Zamach i odbijanie nogi na dole.',
            'Zbyt duży ciężar. To ćwiczenie wykończeniowe — robi się je lekko, wolno i z pełną kontrolą.'
          ]
        },
        {
          id:'machine-standing-calf-raises', tag:'C5', video:'machine-standing-calf-raises', name:'Wspięcia na palce', sets:'3 × 15', rest:45,
          setup:'Śródstopie na krawędzi platformy lub podwyższenia, pięty swobodnie w powietrzu, kolana wyprostowane, ale nie zablokowane.',
          steps:[
            'Opuść pięty jak najniżej i zatrzymaj się na 1 sekundę w rozciągnięciu.',
            'Wznieś się maksymalnie wysoko na palce.',
            'Na górze zatrzymaj się na 1 sekundę.'
          ],
          avoid:[
            'Krótkie, szybkie odbicia bez zatrzymania — łydka rośnie z zakresu, nie z tempa.',
            'Zawijanie stóp do środka lub na zewnątrz pod ciężarem.',
            'Zginanie kolan, żeby pomóc sobie udami.'
          ]
        }
      ]
    },
    {
      code:'D', tab:'W domu', name:'POŚLADKI W DOMU', focus:'Kettle 12 kg + guma · ok. 35 minut · tylko pośladki',
      ex:[
        {
          id:'kettlebell-hip-thrust', tag:'D1', video:'kettlebell-hip-thrust', videoNote:'Na nagraniu ławka i brak gumy — w domu opierasz się o kanapę, a gumę zakładasz nad kolana.', name:'Hip thrust z kettlem i gumą (plecy oparte o kanapę)', sets:'4 × 15–20', rest:90,
          setup:'Kanapa albo łóżko dosunięte do ściany, żeby nie odjechało — jego krawędź trafia w dolne krawędzie łopatek. Guma tuż nad kolanami. Kettle leży poziomo w zgięciu bioder, trzymany oburącz za rączkę, pod spodem złożony ręcznik. Stopy na szerokość bioder, ustawione tak, żeby w górnej pozycji goleń była pionowa.',
          steps:[
            'Schowaj brodę i patrz na swoje kolana.',
            'Rozepchnij kolana na boki na gumę i trzymaj to napięcie przez całą serię.',
            'Wypchnij biodra w górę przez pięty, aż tułów i uda utworzą poziomą linię. Pauza 2 sekundy i maksymalne ściśnięcie pośladków.',
            'Opuszczaj przez 3 sekundy. Biodra tylko muskają podłogę i od razu wracają w górę.'
          ],
          avoid:[
            'Wyginanie lędźwi na górze. Jeśli czujesz dolne plecy zamiast pośladków, ruch poszedł za wysoko albo żebra uciekły w górę.',
            'Kolana schodzące do środka pod gumą. Jeśli guma wygrywa, przesuń ją wyżej na uda — będzie lżej.',
            'Szybkie, odbijane powtórzenia. 12 kg to mały ciężar, więc o efekcie decyduje pauza na górze i wolne opuszczanie.',
            'Kanapa, która odjeżdża przy każdym powtórzeniu.'
          ],
          next:'Gdy 4 × 20 z pauzą robi się łatwe: hip thrust na jednej nodze z kettlem, druga noga zgięta w powietrzu. Zaczynasz od 3 × 8–10 na nogę.'
        },
        {
          id:'kettlebell-single-leg-deadlift', tag:'D2', video:'kettlebell-single-leg-deadlift', name:'Martwy ciąg na jednej nodze z kettlem', sets:'3 × 10–12 / nogę', rest:60,
          setup:'Stań na jednej nodze, kolano lekko ugięte. Kettle w ręce po przeciwnej stronie niż noga, na której stoisz — stoisz na lewej, kettle trzymasz w prawej. Na początek wersja z podpórką: palce drugiej nogi oparte o podłogę pół kroku za tobą. Dają równowagę, ale nie pracują.',
          steps:[
            'Wypchnij biodro do tyłu i pochyl tułów. Kettle zjeżdża w dół wzdłuż nogi, na której stoisz.',
            'Tylna noga unosi się w jednej linii z tułowiem — albo w wersji z podpórką zostaje lekko oparta palcami o podłogę.',
            'Schodź do wyraźnego rozciągnięcia z tyłu uda i pośladka. Zwykle kettle jest wtedy na wysokości połowy goleni.',
            'Wracaj, wypychając biodro do przodu i ściskając pośladek nogi, na której stoisz.',
            'Skończ całą serię na jedną nogę, potem zmień stronę.'
          ],
          avoid:[
            'Otwieranie biodra: miednica przekręca się w bok, a palce tylnej stopy patrzą na zewnątrz. Obie strony miednicy zostają na tej samej wysokości, palce tylnej stopy w dół.',
            'Zaokrąglone plecy na dole. Zakres kończy się tam, gdzie plecy przestają być płaskie.',
            'Coraz mocniejsze zginanie kolana nogi podporowej, aż ruch zamienia się w przysiad na jednej nodze.',
            'Walka z równowagą kosztem techniki. Na początku trzymaj się wolną ręką ściany albo oparcia krzesła.'
          ],
          next:'Gdy 3 × 12 z podpórką jest łatwe: pełna wersja bez podpórki. Potem opuszczanie przez 3 sekundy.'
        },
        {
          id:'kettlebell-reverse-lunge', tag:'D3', video:'kettlebell-reverse-lunge', videoNote:'Na nagraniu dwa odważniki przy bokach — z jednym kettlem trzymasz go oburącz przy klatce.', name:'Wykrok w tył z kettlem przy klatce', sets:'3 × 10–12 / nogę', rest:60,
          setup:'Kettle trzymany oburącz za boczne części rączki, przy klatce piersiowej, łokcie skierowane w dół. Stopy na szerokość bioder. Pod tylne kolano mata albo dywan.',
          steps:[
            'Zrób duży krok w tył jedną nogą i schodź w dół, aż tylne kolano prawie dotknie podłogi.',
            'Tułów lekko pochylony do przodu — wtedy pośladek przedniej nogi pracuje mocniej.',
            'Przednie kolano zostaje nad śródstopiem i nie ucieka do środka.',
            'Wróć do stania, odpychając się piętą przedniej nogi.',
            'Skończ całą serię na jedną nogę, potem zmień stronę.'
          ],
          avoid:[
            'Za krótki krok w tył. Przednie kolano leci wtedy daleko przed palce, a pracuje głównie udo zamiast pośladka.',
            'Odpychanie się tylną nogą przy powrocie.',
            'Uderzanie kolanem o podłogę. Ruch w dół jest kontrolowany do samego końca.',
            'Odchylanie tułowia do tyłu i wypychanie bioder do przodu w dolnej pozycji.'
          ],
          next:'Gdy 3 × 12 jest łatwe: przednią stopę stawiasz na stabilnym podwyższeniu 10–15 cm, np. na grubej książce albo stopniu. Zakres rośnie, a razem z nim praca pośladka.'
        },
        {
          id:'band-glute-kickback', tag:'D4', video:'band-glute-kickback', videoNote:'Na nagraniu długa guma zaczepiona o dłonie i prosta noga. Z gumą nad kolanami kolano zostaje ugięte, a stopa idzie w stronę sufitu — pracuje ten sam mięsień.', name:'Kickback w klęku podpartym z gumą', sets:'3 × 15–20 / nogę', rest:45,
          setup:'Klęk podparty na macie: dłonie pod barkami, kolana pod biodrami. Guma tuż nad kolanami. Plecy płaskie, brzuch napięty, wzrok w podłogę.',
          steps:[
            'Unieś jedną nogę. Kolano zostaje ugięte pod kątem prostym.',
            'Wypchnij stopę w stronę sufitu, aż udo znajdzie się w jednej linii z tułowiem. Pauza 1 sekunda i ściśnięcie pośladka.',
            'Opuszczaj powoli, aż kolano wróci tuż nad podłogę, i od razu zaczynaj następne powtórzenie.',
            'Skończ całą serię na jedną nogę, potem zmień stronę.'
          ],
          avoid:[
            'Wyginanie lędźwi i zadzieranie głowy, żeby wyrzucić nogę wyżej. To najczęstszy błąd w tym ćwiczeniu — zakres kończy się, gdy udo jest w linii z tułowiem.',
            'Przechylanie bioder i tułowia na bok.',
            'Szybkie wymachy. Każde powtórzenie zaczyna się od zera, bez rozpędu.'
          ],
          next:'Gdy 3 × 20 jest łatwe: pauza 2 sekundy na górze i opuszczanie przez 3 sekundy.'
        },
        {
          id:'band-hip-abduction', tag:'D5', video:'band-hip-abduction', name:'Odwodzenie nogi w bok stojąc z gumą', sets:'3 × 15–20 / nogę', rest:45,
          setup:'Guma tuż nad kolanami (łatwiej) albo na kostkach (trudniej). Stań bokiem przy ścianie lub krześle i trzymaj się jedną ręką. Noga podporowa lekko ugięta, brzuch napięty, tułów prosto.',
          steps:[
            'Odprowadź nogę w bok, lekko po skosie do tyłu. Palce stopy skierowane do przodu albo minimalnie w dół.',
            'Zatrzymaj się w najwyższym punkcie na 1 sekundę — czujesz górną, boczną część pośladka.',
            'Wracaj powoli, nie pozwalając gumie szarpnąć nogi do środka.',
            'Skończ całą serię na jedną nogę, potem zmień stronę.'
          ],
          avoid:[
            'Przechylanie tułowia w bok, żeby unieść nogę wyżej. Tułów zostaje pionowo.',
            'Obracanie stopy palcami w górę — wtedy pracuje przód biodra, a pośladek odpoczywa.',
            'Zamach i odbijanie nogi na dole.'
          ],
          next:'Gdy 3 × 20 z gumą nad kolanami jest łatwe: przesuń gumę na kostki. Potem dodaj pauzę 2 sekundy w najwyższym punkcie.'
        }
      ]
    }
  ],

  // Zakładka „Zasady i progresja” (HTML)
  rules: `
<div class="block">
    <h3>Jak to działa</h3>
    <p>Trzy różne treningi — A, B i C — robione po kolei, jeden po drugim. Nie ma przypisanych dni tygodnia: jeśli trening wypadnie, po prostu robisz go następnym razem. W tygodniu wychodzą 3 sesje, między nimi przynajmniej jeden dzień przerwy. Do tego raz w tygodniu dochodzi krótki trening w domu — opis niżej.</p>
    <p><b>Rozgrzewka (6–8 min):</b> 5 minut roweru lub orbitreka, krążenia bioder i ramion, 10 mostków biodrowych na macie, a potem 2 lekkie serie pierwszego ćwiczenia z planu.</p>
    <p><b>Tempo:</b> opuszczanie ciężaru wolno (2–3 s), podnoszenie zdecydowanie. Ostatnie powtórzenie w serii ma być trudne — ale nie kosztem techniki.</p>
    <p><b>Dwie prasy do nóg:</b> w treningu A ta, na której leży się w podparciu i wypycha ciężar w górę — stopy wysoko i szeroko, praca w pośladki. W treningu C ta siedząca, wypychana przed siebie — stopy nisko i wąsko, praca w uda.</p>
  </div>

  <div class="block">
    <h3>Progresja — to jest cała tajemnica</h3>
    <p>Mięśnie rosną wtedy, gdy trening staje się z czasem trudniejszy. Nie chodzi o to, żeby od razu dźwigać dużo — chodzi o to, żeby co tydzień dźwigać odrobinę więcej niż poprzednio.</p>
    <div class="steps-grid">
      <div class="step"><span class="num">1</span><div><b>Dobierz ciężar</b>Taki, przy którym kończysz serię w dolnej granicy zakresu (np. 8 z 8–10) i zostają jeszcze 2 powtórzenia w zapasie.</div></div>
      <div class="step"><span class="num">2</span><div><b>Dokładaj powtórzenia</b>Zostajesz przy tym samym ciężarze, aż zrobisz górną granicę we wszystkich seriach (np. 4 × 10).</div></div>
      <div class="step"><span class="num">3</span><div><b>Wtedy dokładasz ciężar</b>To nie jest decyzja, tylko reguła. Najmniejszy krok: hantle +1–2 kg, sztanga +2,5 kg, maszyna o jeden bolec.</div></div>
      <div class="step"><span class="num">4</span><div><b>Powtórzenia spadną — to normalne</b>Wrócisz do dolnej granicy zakresu i zostajesz przy tym ciężarze, aż znowu wyjdzie górna.</div></div>
    </div>
    <p class="hint">Pierwsze dwa tygodnie są świadomie lekkie — chodzi o technikę. Progresję zaczynasz od trzeciego tygodnia. Po dłuższej przerwie wracasz o dwa stopnie ciężaru niżej.</p>
  </div>

  <div class="block">
    <h3>Pierwsze 4 tygodnie: wersje startowe</h3>
    <p>Hip thrust ze sztangą to najtrudniejsze technicznie ćwiczenie w planie, a gryf na biodrach potrafi zwyczajnie boleć. Przez pierwsze tygodnie rób <b>mostek biodrowy z hantlem</b> — 3 × 12–15, leżąc na macie, hantel trzymany rękami na biodrach. Na sztangę przechodzisz, gdy 3 × 15 z ciężkim hantlem robi się łatwe.</p>
    <p>Tak samo z <b>martwym ciągiem rumuńskim</b> w treningu C: najpierw hantle, 3 × 10. Sztanga wchodzi, gdy plecy zostają płaskie do ostatniego powtórzenia.</p>
  </div>

  <div class="block">
    <h3>Trening w domu</h3>
    <p><b>Kiedy:</b> raz w tygodniu, najlepiej dzień po treningu B. B to sama góra, więc pośladki są wtedy wypoczęte. Kolejność wychodzi A → B → w domu → C. Możesz go też zrobić zamiast treningu A, gdy siłownia odpada.</p>
    <p><b>Rozgrzewka (5 min):</b> 15 mostków biodrowych bez obciążenia, 2 × 10 kroków w bok z gumą nad kolanami w lekkim przysiadzie i 10 krążeń bioder w każdą stronę.</p>
    <p><b>Progresja przy jednym kettlu.</b> 12 kg nie urośnie, więc trening robi się trudniejszy w inny sposób, po kolei: najpierw dokładasz powtórzenia do górnej granicy, potem dodajesz pauzę na górze, potem wydłużasz opuszczanie do 3–4 sekund, a na końcu przechodzisz na trudniejszą wersję z ramki „Następny krok” przy ćwiczeniu. Zawsze tylko jedna zmiana naraz.</p>
    <p>Seria kończy się 1–2 powtórzenia przed momentem, w którym technika się sypie. Przy lekkim ciężarze łatwo zrobić 20 powtórzeń „na pół gwizdka”, które nic nie dają.</p>
    <p class="hint">Jeśli w dniu treningu w domu pośladki są jeszcze obolałe po siłowni, zrób po 2 serie albo przesuń trening o dzień.</p>
  </div>

  <div class="block">
    <h3>Postawa poza siłownią</h3>
    <p>Garbienie się to w połowie słabe mięśnie pleców, a w połowie nawyk. Planem zajmuje się pierwsza połowa — trening B to dwa wiosłowania, ściąganie drążka i tylny akton barku. Skoro plecy pracują raz w tygodniu, w tym dniu nie skracaj serii na plecy. Na drugą wystarczą dwie rzeczy dziennie: rozciąganie klatki w futrynie drzwi 2 × 30 sekund i monitor ustawiony na wysokości oczu.</p>
  </div>

  <div class="block">
    <h3>Po czym oceniać postęp</h3>
    <p>Po ciężarach zapisanych przy ćwiczeniach, nie po lustrze w szóstym tygodniu. Trening buduje siłę i kształt, ale przyrost masy ciała bierze się przede wszystkim z regularnego jedzenia — bez tego nawet dobrze prowadzony plan zatrzyma się na samej sile.</p>
  </div>
`
};
