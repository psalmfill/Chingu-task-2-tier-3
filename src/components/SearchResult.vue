<template>
  <div class="container text-left">
    <div class="row">
      <div class="col-md-6">
        <h4 class="text-left text-primary">Nasa Image Search</h4>
        <form  @submit.stop.prevent="getImages">
          <input
            type="search"
            v-on:keydown.enter="getImages"
            class="form-control input-block"
            v-model="searchVaraible"
          >
          <hr>
        </form>
        
      </div>
    </div>
    <div class="container" v-if="!loading">
        <div class="row" v-if="SearchResults.collection">
        <div class="col-md-3" v-for="(item,index) in SearchResults.collection.items" :key="index">
          <!-- <img class="img-fluid" :src="item.links[0].href" alt=""> -->

        <ImageCard 
              :imageSrc="item.links[0].href"
              :description="item.data[0].description"
              :keyword="item.data[0].keywords==undefined?'':item.data[0].keywords[0]" />
        </div>
      </div>
      <div class="row" v-if="SearchResults.collection">
          <div class="col-md-4">
              <div class="row">
                  <div class="col-md-6"><button class="btn btn-primary btn-block" @click="prev">Previous</button></div>
                  <div class="col-md-6"><button class="btn btn-primary btn-block" @click="next">Next</button></div>
              </div>
          </div>
      </div>
      <div class="row" v-else>
        <div class="col-md-12">
            <h2>No result was found matching your search : {{searchVaraible}}</h2>
        </div>
    </div>
    </div>
    <div class="row " v-else>
      <div class="col-md-12">
        <h3 class="text-center">Loading..</h3>
      </div>
    </div>
   
  </div>
</template>
<script>
import ImageService from "@/ApiService/ImageService";
import ImageCard from "@/components/ImageCard"

export default {
  name: "SearchResult",
  data: function() {
    return {
      searchVaraible:this.$route.query.q , //this.searchString != undefined ? this.searchString : "",
      SearchResults: [],
      page:this.$route.query.page =="" ?1:this.$route.query.page,
      loading:true
      
    };
  },
  watch:{
      
      SearchResults(){
          if(this.searchVaraible !="" && this.searchVaraible !=undefined){
              
          }
          this.$forceUpdate()
          return this.SearchResults
      },
      searchVaraible(){
        this.page = 1
        return this.searchVaraible
      },
    //   searchString(){
    //       console.log(this.$route.query.q)
    //       if(this.$route.query.q !=undefined){
    //           getImages()
    //       }
    //       return this.$route.query.q 
    //   }
    page(){
      console.log(this.$route.query.page )
      return this.$route.query.page  //!='' || this.$route.query.page !=undefined) ?this.$route.query.page:1 
    }
  },
  created(){
    this.getImages()
  
  },
  computed:{
    
  },
  methods: {
    async getImages() {
        
      const response = await ImageService.getImages({ q: this.searchVaraible,page:this.page });
      console.log(response);
      this.SearchResults = response.data;
      this.loading = false
      // this.$forceUpdate()
    },
    next(){
        // if(this.page 1){
            this.page= parseInt(this.page) +1
        // }
        this.nextUrl()
    },
    prev(){
        if(this.page >1){
           this.page= parseInt(this.page) -1
        }
        this.nextUrl()
    },
    nextUrl(){
        this.$router.push("/search?q="+this.searchVaraible+'&page='+this.page);this.$router.go()
    }

  },
  components:{
      ImageCard
  }
};
</script>
