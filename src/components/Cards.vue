<template>
    <div>
        <div class="tarjeta" v-bind:class="IsActive ? 'visible' : 'hidden'">
            <div class="tarjeta-button-set " v-bind:class="{hidden_bar : !IsActive}">
                <div id="cerrar" class="rojo tarjeta-btn"></div>
                <div id="ocultar" class="amarillo tarjeta-btn" @click="toggle"></div>
                <a id="mostrar" class="verde tarjeta-btn" :href="proyecto.data.url" target="_blank"></a>
            </div>
            <div class="tarjeta-body" v-bind:class="{active : IsActive}">
                <b-carousel
                    id="carousel-fade"
                    fade
                    :controls = "true"
                    :interval = "2000"
                >
                    <a :href="proyecto.data.url" target="_blank" >
                    <b-carousel-slide
                    v-for="(imagen) in proyecto.data.imagenes"
                    img-width="100%"
                    :key="imagen"
                    :img-src="imagen"
                    ></b-carousel-slide>
                    </a>
                </b-carousel>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            IsActive:true,
        }
    },
    props:['proyecto'],
    methods:{
        toggle(){
            this.IsActive = !this.IsActive
        },
    },

}
</script>

<style scoped>
.tarjeta{
    border-radius: 10px;
    width: 70vw;
    display: inline-block;
    transition: .25s;
    transform: translateY(0);
    opacity: 1;
    box-sizing: border-box;
}

.tarjeta-img{
    width: 100%;
    height: 100%;
    border-radius: 0px 0px 10px 10px;
    z-index: 2;
}

.tarjeta-button-set{
    max-width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px 10px 0 0;
    padding: .5vh .7rem;
    display: flex;
    gap: 8px;
    align-items: center;
    z-index: 9;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.199);
}
.tarjeta-btn{
    border-radius: 50%;
    width: 10px;
    height: 10px;
    z-index: 2;
}

.verde{
    background-color: #34cd4b;
    
}
.amarillo{
    background-color: #ffc22e;
    cursor: pointer;
    
}
.rojo{
    background-color: #ff6058;
    cursor: pointer;
    
}
.amarillo:active{
    background-color: #6d5316;
    cursor: pointer;
    
}
.verde:active{
    background-color: #156820;
    cursor: pointer;
    
}
.rojo:active{
    background-color: #6d1515;
    cursor: pointer;
    
}
.amarillo:hover{
    background-color: #c59526;
    cursor: pointer;
    
}
.verde:hover{
    background-color: #1e942d;
    cursor: pointer;
    
}
.rojo:hover{
    background-color: #c52626;
    cursor: pointer;
    
}
.tarjeta-body{
    z-index: 1;
    opacity: 0;
    transition: opacity .15s, transform .25s, scale .20s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateY(-50%) scaleY(0);
    width: 100%;
    padding: 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.199);
    border-radius:0 0 10px 10px ;
}

.active{
    z-index: 2;
    opacity: 1;
    transform: translateY(0px) scaleY(1);
}

.hidden{
    transform: translateY(94%);
}

.hidden_bar{
    border-radius: 10px 10px 10px 10px;
}
.visible:hover{
    transform: scale(1.1);
    margin: 0px 2rem;
}

</style>