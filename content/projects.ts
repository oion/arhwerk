import type { Project } from "~/types/projects";

export default [
  {
    id: "1",
    title: "Casa Boierului Comaniciu",
    slug: "casa-boierului-comaniciu",
    meta: {
      id: "BV-II-m-B-21165 “Casa Comăniciu”",
      function: "Spațiu expozițional și locuință",
      year: "2020-2023",
      location: "Veneția de Jos, Brașov",
      colaborators: [
        "Arh. M. Iliescu - specialist MC",
        "Arh. Raluca Maria Olaru",
        "Ing. Bodor Csaba - expert MC",
        "rest. Ioana Cristina Munteanu-Zărnescu - expert MC",
      ],
      technical_data: {
        cd: "250 mp",
      },
    },
    type: ["Restaurare"],
    status: "Finalizat",
    description: `Proiectul a inclus restaurarea casei Comănici, monument istoric din 2019, și extinderea cu un nou corp pe locul fostei șuri. Clădirea, afectată de tasări, umiditate și zidărie defectuoasă, a fost consolidată prin refacerea tencuielilor, zidăriei, pardoselilor și șarpantei. Analizele au datat elementele de lemn în jurul anului 1830.`,
    image: {
      src: "/images/projects/venetia/venetia-1.jpg",
    },
    gallery: [
      {
        src: "/images/projects/venetia/venetia-1.jpg",
        alt: "Sample landscape",
      },
      {
        src: "/images/projects/venetia/venetia-2.jpg",
        alt: "Sample landscape",
      },
      {
        src: "/images/projects/venetia/venetia-3.jpg",
        alt: "Sample landscape",
      },
      {
        src: "/images/projects/venetia/venetia-4.jpg",
        alt: "Sample landscape",
      },
      {
        src: "/images/projects/venetia/venetia-5.jpg",
        alt: "Sample landscape",
      },
      {
        src: "/images/projects/venetia/venetia-6.jpg",
        alt: "Sample landscape",
      },
    ],
  },
  {
    id: "2",
    title: "Constantin Brâncoveanu nr.8",
    slug: "constantin-brancoveanu-nr-8",
    meta: {
      id: "BV-II-m-B-11369 “Casă”",
      function: "Spații de cazare",
      year: "",
      location: "Brașov, jud. Brașov",
      colaborators: [
        "Arh. M. Iliescu - expert MC",
        "Arh. Raluca Maria Olaru",
        "Ing. Bodor Csaba - expert MC",
        "S.C. ArenaCAD S.R.L.- scanare Laser",
        "rest. Ioana Cristina Munteanu Zărnescu - expert MC, cercetare de parament",
      ],
      technical_data: {
        sd: "1388 mp",
      },
    },
    type: ["Restaurare"],
    status: "In Desfășurare",
    description: `Clădirea în U, datată 1800, cu fațadă neoclasică modificată în sec. XIX și galerie adăugată în 1900, va fi restaurată prin decopertarea tencuielilor deteriorate, verificarea și înlocuirea planșeelor din lemn unde e necesar, refacerea pardoselii la subsol, redeschiderea aerisirilor, refacerea pavajului în gang și curte, restaurarea cornișelor, brâielor, ancadramentelor și galeriei din lemn, precum și revizuirea acoperișului.`,
    image: {
      src: "/images/projects/brancoveanu-8/brancoveanu-8-1.jpg",
    },
    gallery: [],
  },
] as Project[];
