<template>
  <f-div padding="large" direction="column">
    <f-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit
      eros tempus nibh dictum, non rutrum quam varius. Ut suscipit dui lobortis
      erat malesuada pretium. Sed egestas semper tellus, eu rhoncus odio
      suscipit finibus. Vestibulum vitae quam at dolor tincidunt venenatis.
      Vestibulum dictum tortor ut laoreet convallis. Mauris eget sem ex. Integer
      efficitur dolor nec pulvinar lacinia. Integer sit amet arcu vitae nisl
      dapibus consectetur. Cras massa nunc, mattis sed tempus venenatis,
      malesuada ut metus. Vestibulum orci lacus, mollis sed nisl vitae, finibus
      mattis nunc. Proin egestas libero non turpis efficitur, vel fringilla
      dolor porttitor. Duis cursus arcu leo, nec ullamcorper dui interdum eu.
      Donec quam tellus, pellentesque id nibh id, elementum maximus elit. Ut
      accumsan metus id tortor dictum malesuada. Orci varius natoque penatibus
      et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante
      ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      Vivamus sit amet turpis in felis volutpat sollicitudin. Pellentesque
      cursus massa eget dui luctus sollicitudin. In hac habitasse platea
      dictumst. Suspendisse efficitur tincidunt lectus vitae scelerisque. Sed
      lobortis ante a arcu ullamcorper laoreet. Aliquam fringilla efficitur
      purus sed euismod. Suspendisse pharetra tellus vel erat hendrerit
      pellentesque. Aenean nibh risus, egestas sit amet posuere ac, rhoncus sed
      erat. Aliquam nisl orci, mattis id elit in, aliquet consequat mauris. Nunc
      hendrerit eleifend massa, eu lacinia mi commodo pretium. Suspendisse id
      pharetra nunc, eget sagittis lorem. Etiam id eros vel nulla commodo
      condimentum vel vitae ex. Cras molestie dictum elit, id vehicula tortor
      convallis id. Nullam id tincidunt magna, nec placerat sem. Cras mollis
      mollis odio, et vestibulum dolor vestibulum eget. Phasellus id malesuada
      odio, a iaculis tortor. Etiam non libero a elit aliquam ornare. Proin
      tempus a dui nec tincidunt. Duis molestie porta quam. Duis ante nulla,
      viverra eget placerat sed, viverra in enim. Vivamus et pretium nisl.
      Quisque condimentum venenatis risus a egestas. Maecenas dapibus sem ante,
      eu posuere ipsum efficitur sed. Curabitur et vestibulum purus. Ut molestie
      risus et felis tempus semper. Aenean id cursus tortor, et malesuada lacus.
      Donec lectus sem, elementum sit amet ipsum vel, semper hendrerit elit.
      Vivamus nulla sapien, suscipit a eros vel, tempor consectetur felis. Fusce
      congue lacinia orci ut faucibus. Sed porta tincidunt nisi, vel auctor
      felis venenatis semper. Ut id dolor quis neque vestibulum viverra vitae
      eget massa. Quisque consequat metus quis erat dictum porta. Mauris
      scelerisque lacus lorem. Vivamus facilisis non mi eget tempor. Proin
      blandit, ligula sit amet tempor dictum, dolor urna efficitur justo, eu
      tempus mi augue ut tortor. Mauris quis commodo tortor. Morbi vestibulum
      mattis tempor. Aenean egestas nec lacus a congue. Etiam in euismod leo, ut
      volutpat diam. Donec malesuada vitae nisi sit amet fringilla. Aliquam
      tincidunt mauris vitae quam luctus efficitur. Mauris libero tellus,
      pulvinar sed laoreet et, lobortis id est. Morbi rhoncus vestibulum nibh,
      elementum suscipit nulla dictum sed. Aenean aliquam ex vitae dolor
      pharetra placerat. Aliquam varius erat eget mi sagittis, nec sodales est
      molestie.
    </f-text>
  </f-div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("Details slot mounted");
});

onUnmounted(() => {
  console.log("Details slot unmounted");
});
</script>
