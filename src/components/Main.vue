<template>
        <div class="main-container" id="home">  

            <!--Home-->
        
            <div class="intro-container">
                <div class="text">
                        Hello, I'm <span class="highlight">Michelle Njeri</span>.
                        <br>I'm a frontend web developer
                    <div class="btn">
                        <a  class="btn" @click="isClicked" href="#about" > View more 
                                <i v-if="isclick"  class="fas fa-arrow-down" style="font-size: 12pt" ></i>
                                <i v-if="!isclick" class="fas fa-arrow-right" style="font-size: 12pt" ></i>
                        </a> 
                    </div>
                    <particles-bg  type="custom" :bg='true' :config='config' />     
                </div>
                <nav class="mainnav">
                    <div class="navwrap">
                    <div class="link active" dest="home">HOME</div>
                    <div class="link" dest="about">ABOUT</div>
                    <div class="link" dest="works">WORKS</div>
                    <div class="link" dest="contact">CONTACT</div>
                    </div>
                </nav>
            </div>           
        </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";


export default {
    name: 'Main',
    components:{ 
        ParticlesBg
    },
    data(){
        return{
            config:{
                num: [3, 20],
                rps: 1,
                life: [2, 2],
                v: [5, 10],
                tha: [-50, 40],
                rotate: [0, 20],
                alpha: [0.1, 0.2],
                scale: [1, 1],
                position: "center",
                color: ["#808080", "#808080"],
                cross: "dead", 
                g: 5, 
                random: 2,
                force:[2, -1],
           },
           isclick: false,

        }
    },
    methods:{
           isClicked: function() {
                this.isclick = !this.isclick; 
            },
          
            
    }
}
</script>

<style scoped>
.main-container{
    width: 100%;
    height: 100%;
    padding-left:0 ;
    padding-right:0 ;
    
}
body{
    margin: 0;
}
.intro-container{
    box-sizing: border-box;
    justify-content: center;
    text-align: center;
    font-size:32pt;
    width: 100%;
    height: 100%;
    border-bottom: 2px black solid ;
    padding-left:0 ;
    padding-right:0 ;
    
}
.highlight{
    color:#05d9ff
    
}
.text{
   padding: 18% 0 18%;
}
a{
    text-decoration: none;
    color:black;
    border: 1.5px black solid;
    font-size: 20pt;
    padding: 10px 10px;
    cursor: pointer;
    background-color: white;
}
.btn{
    margin: 20px;
}
.mainnav, .navwrap{
    display: flex;
    font-size: 18px;
    text-align: left;
    overflow: visible;
    position: initial;
    width:100%;
    background-color: rgb(102, 102, 102); 
}
.link{
    display: inline;
    margin: 0 20px;
    padding: 10px 0;
    cursor: pointer;
}
nav .active{
    color: #0597b1;
}

</style>