<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Despre</h2>
    </template>

    <div class="flex flex-col gap-4 lg:flex-row">
      <div v-motion-appear class="max-w-80 pr-20 text-sm font-light leading-6">
        Studioul a fost înființat în 2018, în Brașov, având ca activitate
        principală atât restaurarea clădirilor de patrimoniu, cât și
        reabilitarea fondului construit istoric și proiectarea de construcții
        noi. În practica noastră, integrăm utilizarea software-ului BIM,
        scanarea laser, Lidar, precum și alte instrumente dedicate analizei
        clădirilor istorice (testarea materialelor, dendrocronologie, studiul
        paramentului, cameră termică si multe alte instrumente dedicate).
      </div>

      <div v-motion-appear class="grid grid-cols-2 gap-4" :delay="200">
        <NuxtImg
          v-motion-appear
          src="/images/about/about-3.jpg"
          alt=""
          format="webp"
          width="800"
          height="400"
          class="col-span-2 h-auto w-full object-cover"
        />
        <NuxtImg
          v-motion-appear
          src="/images/about/about-1.jpg"
          alt=""
          format="webp"
          width="400"
          height="400"
          class="h-auto w-full object-cover"
          :delay="200"
        />
        <NuxtImg
          v-motion-appear
          src="/images/about/about-2.jpg"
          alt=""
          format="webp"
          width="400"
          height="400"
          class="h-auto w-full object-cover"
          :delay="400"
        />
      </div>
    </div>
  </SectionBase>
</template>

<script setup lang="ts"></script>
