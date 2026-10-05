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
 */
window.PLAN = {
  title: 'Plan treningowy',
  subtitle: 'Pośladki i nogi + wzmocnienie pleców · 3 treningi w tygodniu · ok. 60 minut',
  videoBase: 'https://musclewiki.com/pl-pl/exercise/',
  videoQuery: '?model=f',

  sessions: [
    {
      code:'A', name:'POŚLADKI', focus:'Wyprost biodra — główny dzień na pośladki',
      ex:[
        {
          id:'barbell-hip-thrust', tag:'A1', video:'barbell-hip-thrust', name:'Hip thrust ze sztangą (plecy oparte o ławkę)', sets:'4 × 8–10', rest:120,
          badge:'Start: mostek biodrowy', swapVideo:'dumbbell-glute-bridge',
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
          id:'machine-standing-hamstring-curl', tag:'A3', video:'machine-standing-hamstring-curl', videoNote:'Twoja maszyna może wyglądać trochę inaczej — liczy się podwinięta miednica i powolny powrót.', name:'Zginanie nogi w tył stojąc (maszyna) — jednonóż', sets:'3 × 12 / nogę', rest:60,
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
          id:'dumbbell-row-bilateral', tag:'A4', video:'dumbbell-row-bilateral', name:'Wiosłowanie hantlami w opadzie tułowia', sets:'3 × 10–12', rest:90,
          setup:'Stopy na szerokość bioder, kolana lekko ugięte, biodra wypchnięte do tyłu, tułów pochylony około 45 stopni. Plecy płaskie od miednicy po głowę. Hantle wiszą swobodnie pod barkami.',
          steps:[
            'Najpierw ściągnij łopatki do siebie i w dół — dopiero potem zaczyna się ciąg.',
            'Prowadź łokcie blisko tułowia, w stronę bioder, aż hantle dojdą do dolnych żeber.',
            'W górnej pozycji zatrzymaj się na pół sekundy.',
            'Opuszczaj przez 2–3 sekundy i pozwól łopatkom rozejść się na końcu.'
          ],
          avoid:[
            'Zaokrąglone plecy — jeśli nie da się utrzymać płaskich, zmniejsz ciężar albo podnieś tułów wyżej.',
            'Prostowanie się do pionu razem z każdym ciągiem. Tułów ma zostać nieruchomy.',
            'Ciągnięcie samymi rękami z łokciami odstawionymi w bok.',
            'Wyciąganie szyi i brody do przodu.'
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
      code:'B', name:'GÓRA + POŚLADEK', focus:'Postawa i plecy, z izolacją pośladka',
      ex:[
        {
          id:'dumbbell-romanian-deadlift', tag:'B1', video:'dumbbell-romanian-deadlift', name:'Martwy ciąg rumuński z hantlami (lekko)', sets:'3 × 10', rest:120,
          setup:'Stopy na szerokość bioder, hantle przy udach, kolana lekko ugięte — i takie pozostają przez cały ruch.',
          steps:[
            'Wypchnij biodra do tyłu, jakbyś chciała zamknąć pośladkiem drzwi za sobą.',
            'Hantle suną blisko ud, dosłownie po nich.',
            'Schodź do momentu wyraźnego napięcia z tyłu ud — zwykle to połowa goleni.',
            'Wracaj, wypychając biodra do przodu i ściskając pośladki na końcu.'
          ],
          avoid:[
            'Zaokrąglanie pleców na dole. Zakres wyznacza moment utraty płaskich pleców, nie odległość od podłogi.',
            'Robienie z tego przysiadu — kolana lecą do przodu, biodra w dół zamiast do tyłu.',
            'Hantle odsunięte od ciała.',
            'Przeprost i odchylanie się do tyłu na górze.'
          ]
        },
        {
          id:'cable-standing-glute-kickback', tag:'B2', video:'cable-standing-glute-kickback', name:'Kickback na wyciągu (odprowadzanie nogi w tył)', sets:'3 × 12–15 / nogę', rest:60,
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
          id:'barbell-bent-over-row', tag:'B3', video:'barbell-bent-over-row', name:'Wiosłowanie sztangą w opadzie', sets:'4 × 8–10', rest:120,
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
          id:'machine-pulldown', tag:'B4', video:'machine-pulldown', name:'Ściąganie drążka wyciągu górnego', sets:'3 × 10', rest:90,
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
          id:'dumbbell-seated-overhead-press', tag:'B5', video:'dumbbell-seated-overhead-press', name:'Wyciskanie hantli nad głowę siedząc', sets:'3 × 8–10', rest:90,
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
          id:'dumbbell-rear-delt-fly', tag:'B6', video:'dumbbell-rear-delt-fly', videoNote:'Na nagraniu ruch w innej pozycji wyjściowej — sam ruch ramion jest ten sam.', name:'Odwodzenie hantli w opadzie (tylny akton barku)', sets:'3 × 12–15', rest:60,
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
      code:'C', name:'NOGI — HINGE I JEDNONÓŻ', focus:'Tył uda, pośladek, praca na jednej nodze',
      ex:[
        {
          id:'barbell-romanian-deadlift', tag:'C1', video:'barbell-romanian-deadlift', name:'Martwy ciąg rumuński ze sztangą', sets:'4 × 8', rest:120,
          setup:'To samo ćwiczenie co B1, ale z realnym ciężarem. Sztangę zdejmij ze stojaka, nie z podłogi. Stopy na szerokość bioder, chwyt nieco szerszy niż uda, kolana lekko ugięte.',
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
        },
        {
          id:'dumbbell-row-unilateral', tag:'C6', video:'dumbbell-row-unilateral', name:'Wiosłowanie hantlem jednorącz w podporze', sets:'3 × 12 / stronę', rest:60,
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
        }
      ]
    }
  ],

  // Zakładka „Zasady i progresja” (HTML)
  rules: `
<div class="block">
    <h3>Jak to działa</h3>
    <p>Trzy różne treningi — A, B i C — robione po kolei, jeden po drugim. Nie ma przypisanych dni tygodnia: jeśli trening wypadnie, po prostu robisz go następnym razem. W tygodniu wychodzą 3 sesje, między nimi przynajmniej jeden dzień przerwy.</p>
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
    <h3>Pierwsze 4 tygodnie: mostek zamiast hip thrusta</h3>
    <p>Hip thrust ze sztangą to najtrudniejsze technicznie ćwiczenie w planie, a gryf na biodrach potrafi zwyczajnie boleć. Przez pierwsze tygodnie rób <b>mostek biodrowy z hantlem</b> — 3 × 12–15, leżąc na macie, hantel trzymany rękami na biodrach. Na sztangę przechodzisz, gdy 3 × 15 z ciężkim hantlem robi się łatwe.</p>
  </div>

  <div class="block">
    <h3>Postawa poza siłownią</h3>
    <p>Garbienie się to w połowie słabe mięśnie pleców, a w połowie nawyk. Planem zajmuje się pierwsza połowa — wiosłowanie jest w każdym treningu. Na drugą wystarczą dwie rzeczy dziennie: rozciąganie klatki w futrynie drzwi 2 × 30 sekund i monitor ustawiony na wysokości oczu.</p>
  </div>

  <div class="block">
    <h3>Po czym oceniać postęp</h3>
    <p>Po ciężarach zapisanych przy ćwiczeniach, nie po lustrze w szóstym tygodniu. Trening buduje siłę i kształt, ale przyrost masy ciała bierze się przede wszystkim z regularnego jedzenia — bez tego nawet dobrze prowadzony plan zatrzyma się na samej sile.</p>
  </div>
`
};
