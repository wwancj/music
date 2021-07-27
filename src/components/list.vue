<template>
  <div id="a">
    <div v-for="i in musics"  :key="i.urlid" @click="star(i)">{{ i.name }}</div>    
  </div>
</template>

<script>
  export default {
    data () {
      return {
      
      }
    },
    methods: {
         star(i){
            //  alert("111")

             let ii=[i]
             console.log(this.musics,ii)

             this.$store.dispatch("findmusic",ii)
             this.$router.push('/bofangqi')
         }
    },
    props:{
       musics:{
            type:Array
        }
    },
    created(){
         this.musics.forEach((it)=>{
               this.$axios.get("/song/url",{params:{
                   id:it.urlid
               }}).then((data)=>{
                      
                    // console.log(data.data.data[0].url)
                    it.source=data.data.data[0].url
               })
            })
    }
  }
</script>

<style scoped>
#a{
    margin: 0;
    background: oldlace;
    height: 400px;
    overflow: auto;

    
}
@keyframes list{
  0%{
      height: 20px;
      line-height: 20px;
  }
  50%{
      height: 40px;
      line-height: 40px;
  }
  100%{
       height: 40px;
      line-height: 40px;
      background: orangered;
      color: powderblue;
  }
}
#a>div:hover{
   /* background: olivedrab; */
   cursor: pointer;
   animation: list 1s forwards;
}
</style>