<template>
  <SectionBase>
    <template #aside>
      <h2 class="text-heading-lg">Servicii</h2>
    </template>

    <div class="flex flex-col lg:flex-row gap-4">
      <div
        class="flex flex-col lg:flex-row lg:gap-40 lg:justify-between font-light"
      >
        <div class="max-w-sm">
          <h3 class="subtitle">Consultanță și concept</h3>
          <ul class="list-disc pl-4 mb-10 text-sm">
            <li>Consultanță inițială și studii de fezabilitate</li>
            <li>Analiza locației și a reglementărilor urbanistice</li>
            <li>Crearea conceptului arhitectural</li>
          </ul>

          <h3 class="subtitle">Proiectare arhitecturală</h3>
          <ul class="list-disc pl-4 mb-10 text-sm">
            <li>Proiectare de arhitectură pentru construcții noi</li>
            <li>Proiecte de reabilitare și modernizare</li>
            <li>Proiecte de extindere și supraetajare</li>
            <li>Design interior și amenajări personalizate</li>
          </ul>

          <h3 class="subtitle">Proiecte tehnice și documentație</h3>
          <ul class="list-disc pl-4 mb-10 text-sm">
            <li>Proiect tehnic pentru autorizația de construire (DTAC)</li>
            <li>Proiecte pentru execuție (PTh, DE)</li>
            <li>Documentație pentru avize și autorizații</li>
            <li>Detalii de execuție și soluții tehnice</li>
          </ul>

          <h3 class="subtitle">Restaurare și reabilitare</h3>
          <ul class="list-disc pl-4 mb-10 text-sm">
            <li>
              Restaurare și reabilitare Restaurare și consolidare clădiri
              istorice
            </li>
            <li>
              Reabilitarea fațadelor și a elementelor arhitecturale valoroase
            </li>
            <li>Documentare și analiză istorică</li>
          </ul>
        </div>

        <div class="max-w-sm">
          <h3 class="subtitle">Tehnologie și analiză avansată</h3>
          <ul class="list-disc pl-4 mb-10 text-sm">
            <li>Scanare laser și modelare 3D (BIM)</li>
            <li>Analiza materialelor și studii structurale</li>
            <li>Dendrocronologie, studiu de parament și inspecție termică</li>
          </ul>

          <h3 class="subtitle">Proiectare specializată</h3>
          <ul class="list-disc pl-4 mb-10 text-sm">
            <li>Locuințe unifamiliale și colective</li>
            <li>Clădiri comerciale și industriale</li>
            <li>Spații publice și culturale</li>
            <li>Hoteluri, pensiuni, spații de cazare</li>
          </ul>

          <h3 class="subtitle">
            Management de proiect și asistență în execuție
          </h3>
          <ul class="list-disc pl-4 mb-10 text-sm">
            <li>
              Coordonarea echipei de specialiști (structură, instalații etc.)
            </li>
            <li>Urmărirea șantierului și asistență tehnică</li>
            <li>Optimizare costuri și soluții sustenabile</li>
          </ul>

          <h3 class="subtitle">Proiecte sustenabile și eficiente energetic</h3>
          <ul class="list-disc pl-4 mb-10 text-sm">
            <li>Soluții de eficientizare energetică</li>
            <li>Design pasiv și integrarea energiei regenerabile</li>
            <li>Materiale ecologice și tehnologii verzi</li>
          </ul>
        </div>
      </div>
    </div>
  </SectionBase>
</template>

<script setup lang="ts"></script>

<style>
@reference "tailwindcss";

.subtitle {
  @apply font-bold text-sm mb-4;
}
</style>
