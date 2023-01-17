<template>
  <aside>
    <div class="aside-container">
      <picture>
        <source media="(min-width: 740px)" srcset="../../public/about-ketchup-tablet.webp" />
        <source media="(min-width: 1400px)" srcset="../../public/about-ketchup-desktop.webp" />
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
            Ketchup är en kryddsås som förekommer i många varianter. Tomatketchup är vanlig i Europa och USA men det
            finns även andra såsom valnötsketchup, svampketchup, anjovisketchup, ostronketchup och mango-ketchup.<br />
          </span>
          <span class="paragraph aside-text-container_p2">
            Föregångaren till såsen antas vara av östasiatiskt ursprung och namnet är enligt en hypotes från början
            hämtat från den sydkinesiska fisksåsen khetsap eller den indonesiska ketjapen som härstammar från den
            förstnämnda. Tomatketchup i sin nutida version, innehållande tomat, socker, salt, ättika och kryddor,
            började tillverkas i större industriell skala år 1876 av Henry Heinz, men förekom även långt tidigare under
            samma sekel i amerikanska receptböcker, liksom varianter baserade på svamp.
          </span>
          <span class="paragraph aside-text-container_p3">
            I Sverige fick tomatketchupen sitt genombrott på 1950-talet. AB Felix började tillverka sin tomatketchup
            1955, och 1960 började även Slotts tillverka tomatketchup. I Sverige används tomatketchup särskilt på
            diverse potatis-, pasta- och korvrätter, ofta istället för sås. Tomatketchup på pasta är något som är mer
            ovanligt i exempelvis Storbritannien och inte minst Italien.
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
  max-height: 360px;
  overflow: auto;
  background-color: $secondaryColor200;
  color: #dad0b2;
  margin-bottom: 10px;
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
    max-width: 360px;
    max-height: 1242px;
    border-radius: 0.625rem 0 0 0.625rem;
  }
}

@media (width >= 1400px) {
  aside {
    border-radius: 0.5rem;
  }
}
</style>
