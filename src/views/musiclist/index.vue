<template>
     <div>
         歌曲id{{musicid}}
     </div>
</template>

<script>
export default {
     name:"musiclist",
     data(){
         return{
              musicid:[]
         }
         
     }
     ,
     created () {
         this.musicid=this.$store.state.musicids
         console.log(this.$store.state.musicids)
     }
     
     
     }
</script>

<style>

</style>