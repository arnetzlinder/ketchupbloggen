<template>
  <aside>
    <div class="aside-container">
      <picture>
        <source media="(min-width: 740px)" srcset="../../public/about-ketchup-tablet.webp" />
        <source media="(min-width: 1440px)" srcset="../../public/about-ketchup-desktop.webp" />
        <img
          src="../../public/about-ketchup-mobile.webp"
          alt="small Heinz ketchup bottle on a white background, photo studio setup."
          width="143"
          height="109"
          loading="lazy"
        />
      </picture>

      <div>
        <h2 class="aside-header">Om Ketchup</h2>
        <p class="aside-text-container">
          <span class="paragraph aside-text-container_p1">
            Ketchup är en kryddsås som förekommer i många varianter. Tomatketchup är vanlig i Europa och USA[1], men det
            finns även andra såsom valnötsketchup, svampketchup, anjovisketchup, ostronketchup och mango-ketchup.<br />
          </span>
          <span class="paragraph aside-text-container_p2">
            Föregångaren till såsen antas vara av östasiatiskt ursprung och namnet är enligt en hypotes från början
            hämtat från den sydkinesiska fisksåsen khetsap eller den indonesiska ketjapen som härstammar från den
            förstnämnda. Tomatketchup i sin nutida version, innehållande tomat, socker, salt, ättika och kryddor,
            började tillverkas i större industriell skala år 1876 av Henry Heinz, men förekom även långt tidigare under
            samma sekel i amerikanska receptböcker, liksom varianter baserade på svamp. I amerikansk och kanadensisk
            engelska används ibland ordet catsup med samma betydelse som ketchup.
          </span>
          <span class="paragraph aside-text-container_p3">
            Historik (h2-rubrik) På 1690-talet blandade kineser ihop en redning av syrad fisk och kryddor. De kallade
            det hela för (i Amoy-dialekten av den lokala min-kinesiskan) kôe-tjiap eller kê-tjiap (鮭汁, mandarin guī
            zhī), med betydelsen "lag efter syrad fisk" (鮭, karp; 汁, jos) eller "lag efter skaldjur". Tidigt 1700-tal
            hade bruket av denna redning spridits till de malajiska staterna i nuvarande Malaysia och Indonesien, där
            det kom att upptäckas vid brittiska utforskningar av regionen. Det indonesisk-malajiska ordet för såsen var
            kĕtjap (kĕchap). Det ordet kom att utvecklas till engelskans ord ketchup. Många varianter av ketchup hade då
            utvecklats i olika delar av de kinesiskpåverkade delarna av Asien. Den tomatbaserade versionen utvecklades
            sent och finns första gången belagd 1801, då ett recept på tomatketchup skrivet av en Sandy Addison trycktes
            i en amerikansk kokbok – Sugar House Book (1801). I Sverige fick tomatketchupen sitt genombrott på
            1950-talet. AB Felix började tillverka sin tomatketchup 1955, och 1960 började även Slotts tillverka
            tomatketchup. I Sverige används tomatketchup särskilt på diverse potatis-, pasta- och korvrätter, ofta
            istället för sås. Tomatketchup på pasta är något som är mer ovanligt i exempelvis Storbritannien och inte
            minst Italien.
          </span>
        </p>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import '../scss/variables';
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
aside {
  position: relative;
  width: 100%;
  max-height: 360px;
  margin-inline: auto;
  overflow: auto;
  background-color: $secondaryColor200;
  color: #dad0b2;
}
.aside-container {
  gap: 1rem;
  padding: 2rem;
  img {
    border-radius: 0.625rem;
    display: block;
    float: left;
    margin-inline-end: 1rem;
    height: auto;
  }
}
.aside-header {
  display: flex;
  margin: 0;
  margin-block-end: 1.5rem;
  font-family: $primaryFont;
  font-size: 1.25rem;
}
.aside-text-container {
  margin: 0;
  position: relative;
  line-height: 1.5rem;
}
.paragraph {
  display: block;
  margin-block-end: 1rem;
}
@media (width >= 740px) {
  aside {
    max-width: 100%;
    max-height: 74, 1875;
  }
}
</style>
