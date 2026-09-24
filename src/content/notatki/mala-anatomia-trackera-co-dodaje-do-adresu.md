---
title: "Mała anatomia trackera: Co dodaje do adresu?"
description: "Jak działa tracker przy jednym wejściu na stronę. Zobacz, co znajduje się w żądaniu HTTP."
pubDate: "2026-09-19"
author: "Marta Cieśla"
authorBio: "Zbiera ciekawostki jak ktoś inny znaczki. Pisze krótko, zostawia miejsce na własne skojarzenia czytelnika."
rubryka: "Sieć"
issue: "karta 26"
category: "Obserwacje"
tags: ["prywatność", "tracker", "cookies"]
readingTime: "5 min"
image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&h=780&q=80"
---

## Mała anatomia trackera: Co dodaje do adresu?

Wyobraź sobie, że klikasz w link do artykułu na obcej stronie. W tym momencie, gdy tylko załadujesz stronę, twoja przeglądarka wysyła żądanie HTTP, które jest zaledwie jednym z wielu elementów w sieci danych. W tle działa tracker, który rejestruje twoją wizytę. To, co się dzieje, jest fascynujące, ale jednocześnie niepokojące.

Przy każdym wejściu na stronę zewnętrzną wysyłane jest żądanie, które może zawierać różne informacje. Na pierwszy rzut oka, wydaje się, że jest to tylko skrypt lub piksel 1x1. Jednakże, to, co dokleja do adresu, to znacznie więcej. To, co zbiera tracker, może wywołać niejedno zdziwienie.

### Co dokładnie dodaje tracker?

Przeglądarka zawsze dołącza do żądania informacje takie jak adres IP oraz user-agent. Na tym etapie, tracker dokleja kilka kluczowych parametrów:

1. **dl** ,  adres artykułu
2. **dr** ,  strona, z której przyszedłeś (referrer)
3. **en** ,  typ zdarzenia, najczęściej „page_view”
4. **cid** ,  unikalny identyfikator użytkownika

Identyfikator często znajduje się w ciasteczku (np. _ga dla Google Analytics, _fbp dla piksela Meta), co oznacza, że nie jest to żadna informacja o tobie, ale unikalny znacznik przeglądarki. Czasami można go znaleźć w localStorage, co oznacza, że nawet przy pustej liście cookies, identyfikator i tak wraca w parametrze.

Ważne jest, że pierwsze wejście często zakłada nowy numer identyfikacyjny. Przy drugim wejściu na tej samej domenie, ten sam cid będzie towarzyszył innemu URL. Zlepianie ścieżki przychodzi z drugiego żądania, a nie z jednego piksela.

Warto pamiętać, że w żądaniu nie ma treści artykułu, żadnych haseł ani plików z dysku. Ciekawym zjawiskiem jest również spóźniony baner zgody na cookies. Żądanie często wychodzi, zanim użytkownik kliknie „Akceptuję”. Zamknięcie krzyżykiem nie cofa wysłania danych.

Geolokalizacja na podstawie IP to nie GPS. Miasto, które się wyświetla, często jest błędne. Dlatego warto sprawdzić, co dokładnie wysyła tracker. Można to zrobić, otwierając okno prywatne w przeglądarce i przyglądając się zakładce Sieć. Można zobaczyć obce domeny i ścieżki takie jak collect, pixel, g/collect, zanim podejmiesz decyzję o kliknięciu banera.

Poniżej przedstawiam przykładowe dane, które mogą być przesyłane w żądaniu:

| Parametr  | Opis                          |
|-----------|-------------------------------|
| dl        | Adres artykułu                |
| dr        | Strona poprzednia (referrer) |
| en        | Typ zdarzenia                 |
| cid       | Identyfikator użytkownika      |

Warto zrozumieć, co tracker dokleja do adresu, aby lepiej chronić swoją prywatność w sieci. Jeśli chcesz poznać więcej szczegółów na ten temat, sprawdź [co tracker dokleja do adresu](https://www.blackweb.pl/blog/co-tracker-wysyla-przy-jednym-wejscie). To nie tylko kwestia bezpieczeństwa, ale także pełniejszego zrozumienia, jak działa internet .
