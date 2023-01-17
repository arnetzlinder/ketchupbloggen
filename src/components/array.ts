let recepies: {
  id: number;
  figcaption: string;
  name: string;
  ingredient: string;
  desc: string;
  images: { img: string; alt: string }[];
}[] = [
  //Array which stores all info about the recepies, e.g. name
  {
    id: 1,
    images: [
      {
        img: './ketchupsoppa1.webp',
        alt: 'Ketchupsoppa i skål med kvistar av timjan',
      },
      {
        img: './ketchupsoppa2.webp',
        alt: 'Flera skålar med varierande innehåll däribland ketchupssoppa',
      },
      {
        img: './ketchupsoppa3.webp',
        alt: 'Ketchupsoppa med kvist av bladpersilja',
      },
    ],
    name: 'Ketchupsoppa',
    figcaption:
      'Krämig soppa med lena smaker där ketchup står för den oväntade smaksensationen',
    ingredient:
      '<ul><li> 4 msk Smör </li> <li> 1 st Gul lök </li><li>  1 kg Tomater </li><li> 4 kvistar Basilika </li><li> 4 kvistar Persilja </li><li> 2 liter Grönsaksbuljong </li><li> 1 msk Tomatketchup </li><li> 1 dl Vispgrädde</li></ul>',
    desc: '1. Smält smöret i en stor stekgryta. Lägg i hackad gul lök och stek på låg värme tills den är mjuk. Rör om då och då. Tillsätt tomater, basilika och persilja. Krydda med salt och peppar och låt sjuda tills tomaterna har kokats ihop och det mesta av vätskan har kokat bort.<br><br>2. Vrid upp till medelstark värme. Häll i grönsaksbuljongen och koka upp med lock och låt sjuda i 25 min. <br><br>3. Ta av soppgrytan från plattan och låt svalna något. Rör ner ketchup i soppan. Mix ihop soppan med en stavmixer tills soppan är slät. <br><br>4. Häll tillbaka soppan och hetta upp igen. Rör ner grädden och hetta upp soppan i 1-2 minuter tills genomvarm. Smaka av med salt/peppar och servera med några blad basilika som garnityr. ',
  },
  {
    id: 2,
    images: [
      {
        img: './ketchupmarinad1.webp',
        alt: 'Ketchupmarinadflaska på bakgrund av tomater',
      },
      {
        img: './ketchupmarinad2.webp',
        alt: 'Ketchupmarinadflaska och skål med tomater',
      },
      {
        img: './ketchupmarinad3.webp',
        alt: 'Ketchupmarinad i skål',
      },
    ],
    name: 'Ketchupmarinad',
    figcaption: 'Marinaden som klår alla andra när du ska grilla kött och kyckling. En succé på grillpartyt!',
    ingredient:
      '<ul><li>1 dl rapssolja</li><li>1 dl ketchup</li><li>1/2 dl soja</li><li>2 msk grillkrydda</li><li>1 st pressad vitlöksklyfta</li><li>Citronsaft från en halv citron</li><li>Vitpeppar</li></ul>',
    desc: '1. Blanda ihop alla ingredienser till marinaden.',
  },
  {
    id: 3,
    images: [
      {
        img: './gazpacho1.webp',
        alt: 'Tomat',
      },
      {
        img: './gazpacho2.webp',
        alt: 'Skål med Gazpacho med gröna kvistar och brödskiva',
      },
      {
        img: './gazpacho3.webp',
        alt: 'Gazpacho hälls upp i skål från glasflaska',
      },
    ],
    name: 'Gazpacho',
    figcaption:
      'En krämig gazpacho är precis vad som behövs för att svalka och mätta. Klicka in här för recept!',
    ingredient:
      '<ul><li>3 msk rödvinsvinäger</li><li>3 msk olivolja</li><li>1/2 dl ketchup</li><li>salt</li><li>svartpeppar</li><li>2 frp krossade tomater</li><li>2 st paprika, röd</li><li>1 st gurka</li><li>1/2 st rödlök</li><li>1/2 st vitlöksklyfta</li><li>2 dl vatten</li><li>1/2 st röd chilipeppar</li></ul>',
    desc: '1. Vispa ihop vinäger, olja, ketchup, salt och peppar i en stor skål.<br>2. Smaksätt med salt och peppar.<br>3. Vänd ner alla grönsakerna inklusive tomaterna och låt dra någon minut.<br>4. Mixa grönsaksblandningen och späd med vatten till önskad konsistens.<br>5. Smaksätt med salt och peppar.<br>6. Servera den med några droppar olivolja och krutonger.',
  },
];
export default recepies;
