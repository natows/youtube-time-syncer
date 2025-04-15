# YouTube Time Sync Script - do rozbudowy

Skrypt użytkownika (UserScript) dla Tampermonkey, który **zapamiętuje czas odtwarzania filmu na YouTube dla niezalogowanych użytkowników**, a po odświeżeniu strony automatycznie wznawia oglądanie od tego samego momentu.

## Instalacja

1. Zainstaluj Tampermonkey (pamiętaj by włączyć tryb developera w przegladarce).
2. Kliknij poniższy link, aby zainstalować skrypt:

**[Zainstaluj YouTube Time Sync](https://raw.githubusercontent.com/natows/youtube-time-syncer/main/youtube-time-syncer.user.js)**

3. W Tampermonkey zatwierdź instalację skryptu i upewnij się, że jest aktywny .

---

- Przed odświeżeniem strony, skrypt zapisuje aktualny czas odtwarzania w `localStorage`.
- Po ponownym załadowaniu filmu, skrypt czeka aż element `<video>` będzie gotowy, ustawia zapisany czas i automatycznie wznawia odtwarzanie.

- Skrypt działa tylko na stronach z pojedynczym filmem (`https://www.youtube.com/watch?v=*`).
- Jeśli wyczyścisz dane lokalne lub `localStorage`, zapisany czas może zostać utracony.
- Obsługa wielu filmów (z osobnymi czasami) może zostać dodana w przyszłości.

