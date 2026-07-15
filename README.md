# Mancation 4.0 website

Mobile-first trip hub for Mabalingwe, 26–30 August 2026.

**Live site:** https://dc-codez.github.io/mancation-4-2026/

## Source of truth

- [Planning document](https://docs.google.com/document/d/1ZLqQMQey72Q2YJFCmSd3k1oWIZyb7E9rHPRYl3rEjR0)
- [Logistics tracker](https://docs.google.com/spreadsheets/d/16qTKO9zzXweU2x-jkRpbFXcK_g4tDbpreyaSmsVWvz8)

Confirmed plan changes should land in the Drive documents first, then be reflected in `app.js`. Update the visible “Synced” date in `index.html` at the same time.

## Preview locally

On Windows, run:

```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open `http://127.0.0.1:8765/`.

## Publishing

The site is plain HTML/CSS/JavaScript and is published from the `main` branch with GitHub Pages. The included service worker makes the schedule available offline after the first visit.

## Image credits

The logo comes from the shared Mancation Google Drive folder. Tebuah Lodge property photos are from the [LekkeSlaap property listing](https://www.lekkeslaap.co.za/accommodation/tebuah-lodge--mabalingwe) and are attributed in the site footer.
