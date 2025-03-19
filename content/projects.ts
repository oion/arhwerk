import type { Project } from "~/types/projects";

export default [
  {
    id: "1",
    title: "Casa Boierului Comaniciu",
    slug: "casa-boierului-comaniciu",
    meta: {
      function: "Spațiu expozițional și locuință",
      year: "2020-2023",
      location: "Veneția de Jos, Brașov",
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
] as Project[];
