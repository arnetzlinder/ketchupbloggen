[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=9677306&assignment_repo_type=AssignmentRepo)


#About the design
Vi i gruppen utgick från bilden dennis-klein-FzB_512zvPO-unsplash.jpg när vi valde färger. Eftersom sidan är en matblogg
ville vi ha naturliga/jordiga färger som känns ätbara.
Typsnitten ville vi skulle påminna om de två typsnitt som finns på Heinz ketchup för att skapa association till en 
ketchupflaska. Alla knappar har en drop shadow för att skapa känslan av de konturer som finns på Heinz originalflaska i glas.


Shit you can do with ketchup  - Design handoff


Vi har tänkt att detta ska vara en sida i stil med matblogg/ receptsamling med tema ketchup.

I repot finns: 
* Assets som innehåller bilder och ikoner som ska användas på sidan samt wireframes och printscreens på design.
* Den här instruktionen.

I figmafilen finns både designlayout för mobil, tablet och desktopvy samt en egen fil med assets.
I den hittar ni knappar, headers med mera och vi har lagt till kommentarer för olika element för att förklara ytterligare såsom hover och focus states eller vart olika headers ska användas.

De breakpoints vi har tänkt oss är: 
* Mobil: upp till 740px
* Tablet: från 741px
* Desktop: över 1400px

Det finns även mellanrumsmått upplagda med kommentarer för vart de olika mellanrummen ska användas.

Vi har gjort en prototyping på menyn som i mobil och tablet ska vara interaktiv och fällas fram vid klick.

I alla vyer:
* Bakom rubriken, över fotot, ska det ligga en gradient i blood-red #530A02 som tonar ut från vänster till höger.
* I "Om ketchup"-blocket ska texten flyta till höger om bilden.
* Underst ska disclaimer och footer ligga och uppta hela skämbredden. 
* Rätt sorts receptblock användas enligt de varianter som finns i figma-assets filen, där finns uppskissade receptblock för varje enhetstyp
* Förstoringsglasikonen ska alltid ligga till höger om sökrutan

I mobilvyn ska:
* Rubriken ligga 20px från toppen och vänster.
* Under headern med rubriken ska det till vänster vara en hamburgermeny (även fast det ser ut som en knapp i figma ;))
* Mobilvyn är en kolumn
* Efter "om ketchup"-blocket fyllas på med 3 receptblock
* Innehållet ska gå ända ut till kanten
* Receptblocken inte ha rundade hörn
* Menyn ska fällas ut med valfri snitsig animation
* Rubriktexten H1 motsvara 32px storlek, H2 ska motsvara 20px , löptext 16px 


I tabletvyn ska:
* Rubriken ligga 41px från vänster och 33px från toppen
* Under headern med rubriken ska det till vänster vara en hamburgermeny (även fast det ser ut som en knapp i figma ;))
* Tabletvyn ska vara två kolumner med 20 px mellanrum
* Innehållet ska gå ända ut till kanten
* I den vänstra spalten ska receptblocken ligga och deras hörn in mot mitten ska ha border radius på 8px.
* I högra spalten ska om ketchup-blocket ligga och uppta en hel skärmhöjd
* Menyn ska fällas ut med valfri snitsig animation som fungerar likadant som den i mobilvyn
* Rubriktexten H1 motsvara 64px storlek, H2 ska motsvara 24px , löptext 16px 

I desktopvyn ska:
* Rubriken ligga 80px från vänster och 45px från toppen
* Menyns alla alternativ ska ligga som länkar till vänster i navbaren som ska ligga direkt under headern
* Till höger i navbaren ska ha sökrutan
* Desktopvyn ska vara 6 kolumner med en gutter på 20px
* Header,navbar,disclaimer och footer ska gå ända ut till kanten
* Resten av innehållet alltså receptblock samt om ketchup ska ligga över de fyra innersta kolumnerna
* Receptblocken ska vara lite mindre än 2.5 kolumner breda
* Om ketchup-blocket ska vara 1.5 kolumner brett
* Vertikalt mellanrum mellan dessa block ska vara 34px
* I receptblocken ska bilden ligga till vänster med rubriken över sig medans texten om receptet och visa receptknappen ska ligga till höger enligt figmaskissen
* Rubriktexten H1 motsvara 32px storlek, H2 ska motsvara 32px , löptext 16px 

