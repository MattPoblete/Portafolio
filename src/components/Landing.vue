<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light ">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ultimos proyectos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>

    </nav>
    <section id="section-1" class="section-1 ">
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
              Desarrollo web.
            </p>
          </span>
        </hgroup>
          <div class="down_div">
            <b-icon class="down" icon="chevron-double-down" style="font-size:5rem;" aria-hidden="true"></b-icon>
          </div>
      </header>
    </section>

    <section id="section-2" class="section-2 container-fluid">
      <div class="left col-xs-12 col-sm-12 col-md-6">
        <div class="left_gradient"></div>
      </div>
      <div class="right col-xs-12 col-sm-12 col-md-6">
        <hgroup class="right-title">
          Sobre mi
        </hgroup>
        <article class="right-content">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt accusantium id minima. Odio doloremque explicabo vero eaque aspernatur sit quod eius placeat! Cupiditate ullam iusto voluptatem expedita aut dignissimos!
         Iste, tempore officia, fugit quaerat nobis sed repellendus, dignissimos odit soluta facere odio sequi reprehenderit provident omnis mollitia illo porro esse dolore eius. Voluptatem laboriosam natus laudantium eveniet ullam cupiditate.
         Quaerat, voluptatum beatae? Repellendus expedita deserunt, eveniet enim aut et voluptate nobis quod voluptatibus fugiat neque quaerat atque veritatis, facilis a. Consequuntur molestiae dolores sit dolore explicabo itaque dicta obcaecati.
         Natus, velit ad impedit unde eius aperiam consequatur minus ut voluptatum quos. Placeat illo provident ad aut doloremque, beatae ipsum rerum distinctio qui accusantium blanditiis. Impedit voluptatum illum dolorum sequi!
          Tenetur quis earum possimus ipsa accusamus incidunt quas exercitationem neque reprehenderit, ea similique aut officia deleniti maxime blanditiis laborum? Explicabo rerum repellendus eius modi minima ratione fuga, dolorum ad laboriosam.
         Aut, at? Porro error eaque, voluptas enim optio asperiores numquam non tenetur, suscipit cumque impedit similique, itaque rerum assumenda exercitationem! Consectetur, vitae voluptate porro harum unde minus ab expedita ea.
         Ipsam voluptates ratione dicta maiores suscipit accusamus! Error dolore, soluta vel asperiores deserunt maiores nam molestiae ducimus voluptates sequi? Nesciunt aut assumenda itaque unde, similique doloribus. At enim doloribus veniam?
         Accusamus, mollitia! Et ex eveniet mollitia magni nulla nisi facere quam, sapiente suscipit id tenetur reiciendis quos recusandae error eaque at dolorem voluptas omnis cumque aspernatur, nam, veritatis corrupti est.
         </article>
      </div>
      <div class="down_div-2">
        <b-icon class="down-2" icon="chevron-double-down" style="font-size:5rem;" aria-hidden="true"></b-icon>
      </div>
    </section>

    <section class="section-3">
      <cards class="cards"/>
      <cards class="cards"/>
      <cards class="cards"/>
    </section>

    <section class="section-4">
      <Form/>
    </section>

    <footer class="footer">
      <ul class="footer_list">
        <li class="footer_list_item">
          <b-icon icon="github" style="font-size:5rem;" aria-hidden="true"></b-icon>
        </li>
        <li class="footer_list_item">
          <b-icon icon="linkedin" style="font-size:5rem;" aria-hidden="true"></b-icon>
        </li>
        <li class="footer_list_item">
          <b-icon icon="envelope" style="font-size:5rem;" aria-hidden="true"></b-icon>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Cards from '../components/Cards.vue'
import Form from '../components/Form.vue'
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin);

export default {
  components: {Cards, Form},
  name: 'landing',
  methods:{
    animacion_nombre(){
      let tl= gsap.timeline()
      tl.to(".name-1", {duration: 1, text: "Matias", })
        .to(".name-2", {duration: 1, text: "Poblete.", })
        .from(".subtitle",{opacity:0, duration: 1, ease:"power1.inOut", repeatDelay:1, yoyo:true})
        .from(".down",{duration: 1, opacity:0, ease:"power3.in"})
        .to(".down", { duration:1, opacity: 0.7, translateY:-20, yoyo:true, repeat:-1})
    }
  },
  mounted(){
    this.animacion_nombre()
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;700;800;900&family=Roboto:wght@100;300;400&display=swap');
/* Inicio seccion 1*/
.section-1{
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 100vh;
  padding-left:2vw;
  background-color: #fafafa;
  color: #212121;  
}
.title{
  max-width: 50vw;
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
  display: flex;
  justify-content: right;
  align-items: center;
  min-height: 103vh;
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
  font-size: 2vw;
}
.right-content{
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-align: justify;
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
  bottom: -10px;
}
/* inicio seccion 3 */
.section-3{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fafafa;
  color: #212121;  
}
.cards{
  margin: 1rem;
}
/* inicio seccion 4 */
.section-4{
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
</style>
