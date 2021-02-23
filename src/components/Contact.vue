<template>
    <div> 
        <div class="topnave">
            <a href=""><i class="fab fa-github"></i></a>
            <a href=""><i class="fab fa-twitter"></i></a>
            <a href=""><i class="fab fa-free-code-camp" style="font-weight: bolder;"></i></a>
        
          <p v-for="{contactInfo, index } in contactInfos" v-bind:key="index">
          {{contactInfo}}
          <img v-if="index === 1">
          </p>
        
        </div>
    </div>
</template>

<script>

export default {
    name: 'Contact',
    data(){
        return{
            contactInfos: [
                    {'contactInfo': 'To get intouch for work or consultation you can reach me through'},
                    {'contactInfo': 'njerimwanjiku@gmail.com'},
                    {'contactInfo': '+254-796693270'},
            ],
           
        }
    },
    
    
}
</script>

<style scoped>
.topnave{
    box-sizing: border-box ;
    display: block;
    padding: 10px 5px;
    text-align: center;
    justify-content: center;

}
a{
    list-style: none;
    text-decoration: none;
    padding: 5px 10px;
    color: black;
   
}



</style>