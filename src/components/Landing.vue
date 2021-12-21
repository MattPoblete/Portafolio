<template>
  <div>
    <nav class="navbar navbar-expand navbar-light d-flex ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" @click="navScroll('.section-1')">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="navScroll('.section-2')">Sobre mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="navScroll('.section-3')">Ultimos proyectos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="navScroll('.section-4')">Contacto</a>
              </li>
            </ul>
          </div>
        </div>

    </nav>
    <div class="scroller">
        <section id="section-1" class="section-1 ">
          <h5 class="inicio">(Baja para continuar)</h5>
          <header class="header">
            <hgroup class="title">
              <span class="name">
                <p class="name-1">
                  
                </p>
                <p class="name-2">
                </p>
              </span> 
              <span >
                <p class="subtitle">
                  Front-end Developer.
                </p>
              </span>
            </hgroup>
              <div class="down_div">
                <b-icon class="down" icon="chevron-double-down" style="font-size:5rem;" aria-hidden="true"></b-icon>
              </div>
          </header>
        </section>

        <section id="section-2" label="section-2" class="section-2 container-fluid">
          <div class="left col-12  col-md-6 d-none d-md-block">
            <div class="left_gradient"></div>
          </div>
          <div class="right col-12 col-md-6">
            <hgroup class="right-title">
              Sobre mi
            </hgroup>
            <article class="right-content col-12">
              <p>
                ¡Hola!, Que bueno verte por aquí.
                Mi nombre es Matías Poblete, amante del arte y la tecnología.
                Actualmente soy diseñador autodidacta y recientemente diplomado en desarrollo web Front-End acreditado por el CFT Teodoro Wickel.
                
              </p>
            </article>
            <h3 class="habilidades">Habilidades:</h3>
            <ul class="icon-group">
              <li class="icon-cell"><font-awesome-icon :icon="['fab','html5']" size="6x"/>HTML5</li>
              <li class="icon-cell"><font-awesome-icon :icon="['fab','css3-alt']" size="6x"/>CSS3</li>
              <li class="icon-cell"><font-awesome-icon :icon="['fab','sass']" size="6x"/>SASS</li>
              <li class="icon-cell"><font-awesome-icon :icon="['fab','js-square']" size="6x"/>JavaScript</li>
              <li class="icon-cell"><font-awesome-icon :icon="['fab','vuejs']" size="6x"/>VueJS</li>
              <li class="icon-cell"><font-awesome-icon :icon="['fab','bootstrap']" size="6x"/>Bootsrap</li>
              <li class="icon-cell"><font-awesome-icon :icon="['fab','git-alt']" size="6x"/>Git</li>
              <li class="icon-cell"><Icon class="icon-3" icon="cib:greensock" />GSAP</li>
              <li class="icon-cell"><Icon class="icon-3" icon="simple-icons:adobephotoshop" />Adobe Photoshop</li>
              <li class="icon-cell"><Icon class="icon-3" icon="simple-icons:adobeillustrator" />Adobe Illustrator</li>
            </ul>
          </div>
          <div class="down_div-2">
            <b-icon class="down-2" icon="chevron-double-down" style="font-size:5rem;" aria-hidden="true"></b-icon>
          </div>
        </section>

        <section class="section-3" >
          <div class="title-container">
            <h1 class="title-3">
              Mis últimos proyectos.
            </h1>
            <h5 class="subtitle-3">(ventanas interactivas)</h5>
          </div>
          <div class="card-container">
            <cards class="cards col-2" v-for="(proyecto, i) in proyectos" :key="i" :proyecto="proyecto"/>
          </div>
        </section>

        <section class="section-4">
          <Form/>
        </section>

        <footer class="footer">
          <ul class="footer_list">
            <li class="footer_list_item">
              <a class="footer_link" href="https://github.com/MattPoblete/" target="_blank">
                <b-icon icon="github" style="font-size:5rem;"  aria-hidden="true"></b-icon>
              </a>
            </li>
            <li class="footer_list_item">
              <a class="footer_link" href="https://www.linkedin.com/in/Matias-Poblete-Duran" target="_blank">
                <b-icon icon="linkedin" style="font-size:5rem;" aria-hidden="true"></b-icon>
              </a>
            </li>
            <li class="footer_list_item">
              <a class="footer_link" href="mailto:matias.pobleteduran@gmail.com">
                <b-icon icon="envelope" style="font-size:5rem;" aria-hidden="true"></b-icon>
              </a>
            </li>
          </ul>
        </footer>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import Cards from '../components/Cards.vue'
import Form from '../components/Form.vue'
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {Cards, Form, Icon},
  name: 'landing',
  methods:{
    ...mapActions(['getProyectos']),
    ...mapGetters(['GETPROYECTOS']),
    smoothScroll(){
      smoothScroll(".scroller");
        function smoothScroll(content, viewport, smoothness) {
          content = gsap.utils.toArray(content)[0];
          smoothness = smoothness || 1;

          gsap.set(viewport || content.parentNode, {overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0});
          gsap.set(content, {overflow: "visible", overflowX:'hidden', width: "100%"});

          let getProp = gsap.getProperty(content),
            setProp = gsap.quickSetter(content, "y", "px"),
            setScroll = ScrollTrigger.getScrollFunc(window),
            removeScroll = () => content.style.overflow = "visible",
            killScrub = trigger => {
              let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; // getTween() was added in 3.6.2
              scrub && scrub.kill();
              trigger.animation.progress(trigger.progress);
            },
            height, isProxyScrolling;

          function refreshHeight() {
            height = content.clientHeight;
            content.style.overflow = "visible"
            document.body.style.height = height + "px";
            return height - document.documentElement.clientHeight;
          }

          ScrollTrigger.addEventListener("refresh", () => {
            removeScroll();
            requestAnimationFrame(removeScroll);
          },{passive: true})
          ScrollTrigger.defaults({scroller: content});
          ScrollTrigger.prototype.update = p => p; // works around an issue in ScrollTrigger 3.6.1 and earlier (fixed in 3.6.2, so this line could be deleted if you're using 3.6.2 or later)

          ScrollTrigger.scrollerProxy(content, {
            scrollTop(value) {
              if (arguments.length) {
                isProxyScrolling = true; // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.
                setProp(-value);
                setScroll(value);
                return;
              }
              return -getProp("y");
            },
            getBoundingClientRect() {
              return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            }
          });

          return ScrollTrigger.create({
            animation: gsap.fromTo(content, {y:0}, {
              y: () => document.documentElement.clientHeight - height,
              ease: "none",
              onUpdate: ScrollTrigger.update
            }),
            scroller: window,
            invalidateOnRefresh: true,
            start: 0,
            end: refreshHeight,
            refreshPriority: -999,
            scrub: smoothness,
            onUpdate: self => {
              if (isProxyScrolling) {
                killScrub(self);
                isProxyScrolling = false;
              }
            },
            onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
          });
        }
    },
    animacion(){
      const tl=gsap.timeline()
      tl.from('.down', {duration:2, opacity:1, scale:5, ease:"power3.out", translateY: -500, delay:.25})
        .from(".down",{duration: 1, opacity:0.5, ease:"power3.in"})
        .to(".down", { duration:1, opacity: 0.7, translateY:-20, yoyo:true, repeat:-1})
      const ScrollTitle = gsap.timeline({
        scrollTrigger:{
          trigger: '.section-1',

          start: 'top top',
          end:'+=100%',
          scrub: true,
          pin: '.section-1',
          endTrigger:'.section-2',
          onLeave:()=>{
            gsap.to(window, {duration: 1, scrollTo: ".section-2"});
          }
        }
      })
      ScrollTitle
        .to('.inicio', {opacity:0})
        .to('.name-1', {duration:1, text:"Matias"})
        .to('.name-2', {duration:1, text:"Poblete."})
        .from('.subtitle',{opacity:0, duration: 1, ease:"power1.inOut", repeatDelay:1, yoyo:true})

      tl.from(".down-2",{duration: 1, opacity:0.5, ease:"power3.in"})
        .to(".down-2", { duration:1, opacity: 0.7, translateY:-20, yoyo:true, repeat:-1})
      const ScrollAbout = gsap.timeline({
        scrollTrigger:{
          trigger: '.section-2',
          start: 'top top',
          end:'top end',
          scrub: true,
          pin: '.section-2',
          endTrigger:'.section-3',
          toggleActions:'play complete play reverse',
          onLeave:()=>{
            gsap.to(window, {duration: 1, scrollTo: ".section-3"});
          }
        }
      })
      ScrollAbout
      .from('.left',{translateX:-1000, duration:10})
      .from('.right',{translateX:1000, duration:10})
      .from(['.icon-group','.habilidades'],{translateY:800, duration:10})
      .to('.icon-group',{opacity:1, duration:10})
      .to(['.right', '.left'],{translateY:'-100vh', duration:10})
      
      const ScrollCards = gsap.timeline({
          scrollTrigger:{
            trigger: '.section-3',
            start: 'top top',
            end:'top end',
            scrub: true,
            pin: true,
            endTrigger:'.section-4',
            onLeave:()=>{
              gsap.to(window, {duration: 1, scrollTo: ".section-4"});
            }
          }
    
        })
      ScrollCards
      .to('.title-container',{opacity:1, duration:2})
      .to('.title-container', {opacity:0, duration:1} )
      .fromTo('.card-container',{translateX:"61%", duration:10},{translateX:"-50%", duration:5})
    },
    navScroll(section){
      gsap.to(window, {duration: 1, scrollTo: section})
    }
  },
  computed:{
    proyectos(){
      return this.GETPROYECTOS()
    }
  },
  mounted(){
    this.smoothScroll()
    this.animacion()
  },
  created(){
    this.getProyectos()
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;700;800;900&family=Roboto:wght@100;300;400&display=swap');
.body{
  background: #fafafa !important;
}
.scroller{
  width: 100vw !important;
}
.nav-link{
  cursor: pointer;
}
.inicio{
  position: absolute;
  width: 100%;
  text-align: center;
  font-weight: 100;
  color: #212121; 
}
/* Inicio seccion 1*/
.section-1{
position:relative;
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 100vh;
  background-color: #fafafa;
  color: #212121;  
  width: 100vw;
}
.title{
  max-width: 50vw;
  padding-left:2vw;
}
.header{
  max-width: 100%;
}
.name{
  display:flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
  font-size: 12vw;
  text-align: left;
  align-items: left;
  margin:0;
  max-width: 50vw;
}
.name p{
  margin:0px;
  line-height: .9;
  max-width: 50vw;
  display:flex;

}
.subtitle{
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  text-align: left;
  font-size: 4vw;
  line-height: .9;
  padding-left: .3vw;
  display: flex;
  width: 100%;
}
.down{
  position: absolute;
  font-size: 48px;
  bottom: 0px;

}
.down_div{
  display: flex;
  width: 100vw;
  justify-content: center;
  padding-right:2vw;

}
/* inicio seccion 2 */
.section-2{
  position:relative;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100vh;
  background-color: #212121;
  color: #fafafa;
  font-family: 'Raleway',sans-serif;
}
.left{
  background-image: url("../assets/foto.jpg");
  background-position-x: 20%;
  background-position-y: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  height: 80vh;
  width: 50vw;
  display: flex;
  margin: 0px 1rem;
  padding:0px;
  z-index: 1;
  order: 1;
}
.left_gradient{
  background: linear-gradient(-90deg,#212121cb,#ffffff00);
  z-index:2;
  height: 100%;
  width: 100%;
  margin: 0px;
}
.right{
  width: 50vw;
  margin-right: 2vw;
  order:2
}
.right-title{
  text-align: center;
  font-weight: 600;
  font-size: 28px;
}
.right-content{
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-align: justify;
  text-align-last: center;
}
.habilidades{
  text-align: center;
  margin-top: 2em;
}
.icon-group{
  width: 100% !important;
  padding: 0;
  margin-top: 5rem;
  padding-bottom:0rem;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5rem 2rem;
  justify-content: center;
  align-items: center;
  max-height: 50vh;
}

.icon-cell{
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-weight:100;
  font-size: 12px;
}
.icon-3{
  font-size: 6em;
}
.down_div-2{
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  justify-content: center;
}
.down-2{
  font-size: 48px;
  display:block;
  position: absolute;
  left:50%;
  bottom: 10px;
}
/* inicio seccion 3 */
.section-3{
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #fafafa;
  color: #212121;  

}
.title-container{
  position: absolute;
  width: 100%;
  text-align: center;
  
}
.title-3{
  font-weight: 700;
}
.subtitle-3{
  font-weight: 100;
}
.cards{
  margin: 1.5rem;
}
.card-container{
  position: relative;
  display:flex;
  flex-direction: row;
}
/* inicio seccion 4 */
.section-4{
    position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fafafa;
  background-color: #212121;  
}
.footer{
  width: 100vw;
  height: 25vh;
  background-color: #000000 ;
  color: #c2c2c2;
  display: flex;
  flex-direction: row;
}
.footer_list{
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0;
}
.footer_list_item{
  font-size: 4rem;
  cursor: pointer;
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.footer_list_item:hover{
  transform: scale(1.5);
  color:#ffffff
}
.footer_link{
  color: #fafafa !important;
}
.footer_link:hover{
  color: #fafafa !important;
}
.footer_link:active{
  color: #fafafa !important;
}
</style>
