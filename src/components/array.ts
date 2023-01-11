let recepies: {id: number; name: string; ingredient: string; desc: string; images: {img1: string; img2: string; img3: string; alt1: string; alt2: string; alt3: string;}[] } [] = [
    //Array which stores all info about the recepies, e.g. name
    {
      id: 1,
      images: [
        {          
          img1: "../../assets/images/Ketchupmarinad-1.webp",
          img2: "../../assets/images/Ketchupmarinad-2.webp",
          img3: "../../assets/images/Ketchupmarinad-3.webp",
          alt1: "Ketchupmarinadflaska på bakgrund av tomater",
          alt2: "Ketchupmarinadflaska och skål med tomater",
          alt3: "Ketchupmarinad i skål",
        },
      ],
      name: "Ketchupmarinad",
      ingredient: "",
      desc: "",
    },
    {
      id: 2,
      images: [
        {
          img1: "../../assets/images/Ketchupsoppa-1.webp",
          img2: "../../assets/images/Ketchupsoppa-2.webp",
          img3: "../../assets/images/Ketchupsoppa-3.webp",
          alt1: "Ketchupsoppa i skål med kvistar av timjan",
          alt2: "Flera skålar med varierande innehåll däribland ketchupssoppa",
          alt3: "Ketchupsoppa med kvist av bladpersilja",
        },
      ],
      name: "Ketchupsoppa",
      ingredient: "4 msk Smör, 1 st Gul lök, 1 kg Tomater, 1 st Lagerblad, 4 kvistar Basilika, 4 kvistar Persilja, 2 liter Grönsaksbuljong, 1 msk Tomatketchup, 1 dl Vispgrädde",
      desc: "1. Smält smöret i en stor stekgryta. Lägg i hackad gul lök och stek på låg värme i 5 min eller tills den är mjuk. Rör om då och då. Tillsätt tomater, lagerblad, basilika och persilja. Krydda med salt och peppar och låt sjuda i 15 min eller tills tomaterna har kokats ihop och det mesta av vätskan har kokat bort. Rör om då och då. 2. Vrid upp till medelstark värme. Häll i grönsaksbuljongen och koka upp med lock och låt sjuda i 25 min. 3. Ta av soppgrytan från plattan och låt svalna något. Rör ner ketchup i soppan. Mix ihop soppan med en stavmixer tills soppan är slät. 4. Häll tillbaka soppan och hetta upp igen. Rör ner grädden och hetta upp soppan i 1-2 minuter tills genomvarm. Smaka av med salt/peppar och servera med några blad basilika som garnityr. ",
      },
      {
      id: 3,
      images: [
        {
          img1: "../../assets/images/Gazpacho-1.webp",
          img2: "../../assets/images/Gazpacho-2.webp",
          img3: "../../assets/images/Gazpacho-3.webp",
          alt1: "Tomat",
          alt2: "Skål med Gazpacho med gröna kvistar och brödskiva",
          alt3: "Gazpacho hälls upp i skål från glasflaska",
        },
      ],
      name: "Gazpacho",
      ingredient: "",
      desc: "",
    },
  ];
  export default recepies;