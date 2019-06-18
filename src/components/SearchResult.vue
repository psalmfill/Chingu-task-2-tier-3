<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h4 class="text-left text-primary">Nasa Image Search</h4>
        <form action>
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
    <div class="row" v-if="SearchResults.collection">
      <div class="col-3" v-for="(item,index) in SearchResults.collection.items" :key="index">
        <!-- <img class="img-fluid" :src="item.links[0].href" alt=""> -->

       <ImageCard 
            :imageSrc="item.links[0].href"
            :description="item.data[0].description"
            :keyword="item.data[0].keywords[0]" />
      </div>
    </div>
    <div class="row" v-if="SearchResults.collection">
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-6"><button class="btn btn-primary btn-block">Previous</button></div>
                <div class="col-md-6"><button class="btn btn-primary btn-block">Next</button></div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import ImageService from "../ApiService/ImageService";
import ImageCard from "@/components/ImageCard"

export default {
  name: "SearchResult",
  props: ["searchString"],
  data: function() {
    return {
      searchVaraible: this.searchString != undefined ? this.searchString : "",
      SearchResults: []
    };
  },
  methods: {
    async getImages(e,page) {
      const response = await ImageService.getImages({ q: this.searchVaraible,page });
      console.log(response);
      this.SearchResults = response.data;
    }
  },
  components:{
      ImageCard
  }
};
</script>
