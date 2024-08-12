<template>
 
  <HeaderComponent />
  
  <router-view></router-view>

  <hr class="hr-cor">

  <FooterComponent />

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}

</script>



<style scoped>

.hr-cor {
    border: 0;
    border-top: 2px solid #7276d5;
    margin: 20px 0; 
}

</style>
