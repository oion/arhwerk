<template>
  <aside class="md:w-80 flex-shrink-0">
    <div class="sticky top-20 flex gap-4">
      <h2 class="text-lg font-bold">Despre</h2>
    </div>
  </aside>

  <div class="flex flex-col lg:flex-row gap-4">
    <div class="max-w-80 pr-20">
      Studioul a fost înființat în 2018, în Brașov, având ca activitate
      principală atât restaurarea clădirilor de patrimoniu, cât și reabilitarea
      fondului construit istoric și proiectarea de construcții noi. În practica
      noastră, integrăm utilizarea software-ului BIM, scanarea laser, Lidar,
      precum și alte instrumente dedicate analizei clădirilor istorice (testarea
      materialelor, dendrocronologie, studiul paramentului, cameră termică si
      multe alte instrumente dedicate).
    </div>
    <div class="grid grid-cols-2 gap-4">
      <NuxtImg
        src="images/samples/sample-landscape.webp"
        alt=""
        width="800"
        height="400"
        class="w-full h-auto object-cover col-span-2"
      />
      <NuxtImg
        src="images/samples/sample-landscape.webp"
        alt=""
        width="400"
        height="400"
        class="w-full h-auto object-cover"
      />
      <NuxtImg
        src="images/samples/sample-landscape.webp"
        alt=""
        width="400"
        height="400"
        class="w-full h-auto object-cover"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
