<template>
  <div class="home">
    <Landing/>
  </div>
</template>

<script>
import Landing from '@/components/Landing.vue'
//GSAP
/* import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin); */
export default {
  name: 'Home',
  components: {
    Landing
  },
  mounted(){
/*     this.simpleFade() */
  },
  methods:{
  /*   simpleFade(){
        gsap.to(".logo", {y: 100, duration: 5});
      } */
  }
}
</script>
