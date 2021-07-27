<template>
  <div id="contain">
    <div id="aa"  
    
    v-loading.fullscreen="fullscreenLoading"
    
    >
      <input
        type="text"
        value="musicname"
        id="music"
        ref="music"
        v-model="musicname"
      />
      <input
      v-if="musicname!=''"
        type="button"
        name=""
        id="search"
        value="搜索"
        ref="search"
        @click="sear"
      />

      <button @click="tolist" id="ss">tiaotiao</button>
       <button @click="texiao"> texiao</button>
    <!-- <Saa></Saa> -->
 <List :musics="musiclist" v-if="musiclist.length!=0"></List>

    </div>
  
  </div>
</template>

<script>
// import list from ".../components/list.vue"

import List from '../../components/list.vue';
// import Saa from "../../components/siyan.vue"
export default {
  components:{
    List,
    
  },
  data(){
    return {
       fullscreenLoading: false,
      musicname: "",
      musiclist: [],
      musicidlist:[],
      urlid: "aaaaa",
    };
  },
  name: "music",
  methods: {
    texiao(){
      this.$router.push("/texiao")
    },
    tolist(){
        this.$router.push("/musiclist")
    }
,
    sear() {
      this.musicidlist=[]
      this.musiclist=[]
  
      let that = this;
      this.$axios
        .get("/cloudsearch", {
          params: {
            keywords: this.musicname,
          },
        })
        .then((data) => {
          let a = 0;
          let music=data.data.result.songs
         
          music.forEach((item) => {
             let arr={}
     


                
            arr.name = item.al.name;
            arr.artist = item.ar[0].name;
           arr.cover = item.al.picUrl;

           arr.urlid = item.id;
           this.musicidlist.push(item.id)
          
          //  console.log(this.musicidlist)

            arr.favorited = false;
            this.musiclist.push(arr)
            // console.log(this.musiclist)
            a++;
             if(a==music.length){
          
            this.$store.dispatch('musicids',this.musicidlist)
           }
            
          });
        });

    
   this.openFullScreen1()

    },
     openFullScreen1() {
        this.fullscreenLoading = true;
       
        
    
        // setTimeout(() => {
        
        // }, 4000);
      },
  },

  watch:{
    musiclist:{
      deep:true,
      handler(newval,oldval){
             if(this.musiclist.length>=10){
             this.fullscreenLoading = false;
        }
      }
    }
  }

};
</script>

<style scoped>
@keyframes ani {
  0% {
    transform: scaleX();
  }
  50% {
    transform: scaleX(0.5);
    background: turquoise;
  }
  100% {
    transform: scaleX(1);
  }
}
#music:focus {
  animation: ani 1s;
}
#contain {
  overflow: hidden;

  /* width: 100%; */
  height: 670px;
  background-size: cover;
  background-image: url(./imag/a.jpg);
}
input {
  outline: none;
  border: none;

  width: 400px;
  height: 50px;
  margin: 70px auto;

  opacity: 0.5;
  font-size: 30px;
}
#search {
  width: 100px;
  padding: 0;
  transform: translateY(2px) translateX(3px);
}
#search:hover {
  opacity: 0.9;
}
#aa{
  width: 520px;
  margin: 150px auto;
}
</style>