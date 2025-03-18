<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Despre</h2>
    </template>

    <div class="flex flex-col lg:flex-row gap-4">
      <div class="max-w-80 pr-20 font-light text-sm leading-6" v-motion-appear>
        Studioul a fost înființat în 2018, în Brașov, având ca activitate
        principală atât restaurarea clădirilor de patrimoniu, cât și
        reabilitarea fondului construit istoric și proiectarea de construcții
        noi. În practica noastră, integrăm utilizarea software-ului BIM,
        scanarea laser, Lidar, precum și alte instrumente dedicate analizei
        clădirilor istorice (testarea materialelor, dendrocronologie, studiul
        paramentului, cameră termică si multe alte instrumente dedicate).
      </div>

      <div class="grid grid-cols-2 gap-4" v-motion-appear :delay="200">
        <NuxtImg
          src="images/samples/sample-landscape.webp"
          alt=""
          width="800"
          height="400"
          class="w-full h-auto object-cover col-span-2"
          v-motion-appear
        />
        <NuxtImg
          src="images/samples/sample-landscape.webp"
          alt=""
          width="400"
          height="400"
          class="w-full h-auto object-cover"
          v-motion-appear
          :delay="100"
        />
        <NuxtImg
          src="images/samples/sample-landscape.webp"
          alt=""
          width="400"
          height="400"
          class="w-full h-auto object-cover"
          v-motion-appear
          :delay="200"
        />
      </div>
    </div>
  </SectionBase>
</template>

<script setup lang="ts"></script>
