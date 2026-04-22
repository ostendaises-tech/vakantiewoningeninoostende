# Vakantiewoningen in Oostende — Website Setup

## Stap 1: GitHub account aanmaken (eenmalig)
1. Ga naar https://github.com/signup
2. Maak een gratis account aan
3. Bevestig uw e-mailadres

## Stap 2: Site bestanden uploaden naar GitHub
1. Log in op GitHub
2. Klik op de groene knop "New repository"
3. Naam: `vakantiewoningeninoostende`
4. Zet op "Public"
5. Klik "Create repository"
6. Klik "uploading an existing file"
7. Sleep ALLE bestanden en mappen uit deze ZIP naar het venster
   (index.html, _data/, admin/, images/, netlify.toml)
8. Klik "Commit changes"

## Stap 3: Netlify koppelen aan GitHub
1. Ga naar https://netlify.com
2. Klik "Sign up" → "Sign up with GitHub"
3. Klik "Add new site" → "Import an existing project"
4. Kies "GitHub" → selecteer uw repository
5. Build settings: laat alles leeg
6. Klik "Deploy site"
7. Na 30 seconden is uw site live op een netlify.app adres

## Stap 4: CMS activeren (Netlify Identity)
1. In Netlify: ga naar "Site configuration" → "Identity"
2. Klik "Enable Identity"
3. Ga naar "Configuration" → "Registration" → zet op "Invite only"
4. Ga naar "Services" → "Git Gateway" → klik "Enable Git Gateway"
5. Ga terug naar "Identity" → klik "Invite users"
6. Vul uw eigen e-mailadres in
7. U ontvangt een uitnodigingsmail — klik de link en stel een wachtwoord in

## Stap 5: Inloggen in het CMS
1. Ga naar https://uw-site.netlify.app/admin
   (of later https://vakantiewoningeninoostende.be/admin)
2. Log in met uw e-mailadres en wachtwoord
3. U ziet het beheerderspaneel met:
   - 📞 Contact & Social media
   - 🏨 Boekingslinks
   - ❓ FAQ vragen
   - 🖼️ Hoofdfoto's

## Stap 6: Eigen domein koppelen
1. In Netlify: ga naar "Domain management"
2. Klik "Add a domain"
3. Vul in: vakantiewoningeninoostende.be
4. Netlify toont u 2 nameservers (bv. dns1.p01.nsone.net)
5. Log in bij uw domeinregistrar (bv. Combell, Versio, ...)
6. Verander de nameservers naar die van Netlify
7. Wacht 24 uur → uw domein wijst naar de site
8. SSL (https) wordt automatisch ingesteld door Netlify

---

## Inhoud beheren via CMS

### Contactgegevens aanpassen
1. Ga naar /admin → "📞 Contact & Social media"
2. Vul uw telefoonnummer en e-mail in
3. Klik "Save" → de site wordt automatisch bijgewerkt

### Boekingslink toevoegen (bv. Airbnb)
1. Ga naar /admin → "🏨 Boekingslinks"
2. Plak de Airbnb URL in het juiste veld
3. Klik "Save" → de "Binnenkort" badge verdwijnt automatisch

### Lodgify widget inbouwen
1. Log in op Lodgify → ga naar "Booking widget"
2. Kopieer de embed code (HTML)
3. Ga naar /admin → "🏨 Boekingslinks"
4. Plak de code in "Lodgify widget t'Hoeveke" of "Lodgify widget La Brise"
5. Klik "Save"

### FAQ aanpassen
1. Ga naar /admin → "❓ FAQ vragen"
2. Klik op een vraag om te bewerken, of klik "Add" voor een nieuwe vraag
3. Vul de vraag en het antwoord in alle 4 talen in
4. Klik "Save"

### Foto's vervangen
1. Ga naar /admin → "🖼️ Hoofdfoto's"
2. Klik op een foto → "Choose an image" → sleep uw nieuwe foto
3. Klik "Save"

---

## Technische info (voor als u een developer raadpleegt)
- Platform: statische HTML site
- Hosting: Netlify (gratis)
- CMS: Decap CMS (voorheen Netlify CMS)
- Data: JSON bestanden in `_data/`
- Afbeeldingen: map `images/`
- Talen: NL / FR / EN / DE via JavaScript i18n
- Boekingen: Lodgify (channel manager voor Booking.com + Airbnb)
