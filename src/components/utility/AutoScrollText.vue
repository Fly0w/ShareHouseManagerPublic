<template>
  <div class="scrolling-text-container w-full">
    <div class="scrolling-text w-full">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutoScrollText'
}
</script>

<style>
.scrolling-text-container {
  overflow-x: hidden; /* Cacher le débordement horizontal */
  white-space: nowrap; /* Empêcher le texte de se retourner à la ligne */
}
.scrolling-text {
  display: inline-block; /* Afficher les éléments en ligne */
  animation: scroll 10s linear infinite; /* Utiliser une animation CSS pour le défilement */
}
@keyframes scroll {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%); /* Déplacer complètement le contenu vers la gauche */
  }
}
</style>
