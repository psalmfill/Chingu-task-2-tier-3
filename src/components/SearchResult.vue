<template>
  <div class="container text-left">
    <div class="row">
      <div class="col-md-6">
        <h4 class="text-left text-primary">Nasa Image Search</h4>
        <form @submit.stop.prevent="nextUrl">
          <input
            type="search"
            v-on:keydown.enter="getImages"
            class="form-control input-block"
            v-model="searchVaraible"
          >
          <div class="row">
            <div class="col-md-12">
              <div class="input-group options">
                <div class="input-group-append" v-for="option in options" :key="option">
                  <RadioButton
                    name="options"
                    :value="camera"
                    :label="option"
                    @change="changeValue"
                  />
                </div>
              </div>
            </div>
          </div>
          <hr>
        </form>
      </div>
    </div>
    <div class="container" v-if="!loading">
      <div class="row" v-if="SearchResults.photos && SearchResults.photos.length > 0">
        <div class="col-md-3" v-for="(photo,index) in SearchResults.photos" :key="index">
          <!-- <img class="img-fluid" :src="item.links[0].href" alt=""> -->

          <ImageCard :item="photo" @showDetail="showModal"/>
        </div>
      </div>
      <!-- <div class="row" v-if="SearchResults.photos">
          <div class="col-md-4">
              <div class="row">
                  <div class="col-md-6"><button class="btn btn-primary btn-block" @click="prev">Previous</button></div>
                  <div class="col-md-6"><button class="btn btn-primary btn-block" @click="next">Next</button></div>
              </div>
          </div>
      </div>-->
      <div class="row" v-else>
        <div class="col-md-12">
          <h2>No result was found matching your search : sol {{searchVaraible}} captured by  {{this.camera}}</h2>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-12">
        <h3 class="text-center">Loading..</h3>
      </div>
    </div>

    <ImageDetailModal :item="item"/>
  </div>
</template>
<script>
import ImageService from "@/ApiService/ImageService";
import ImageCard from "@/components/ImageCard";
import ImageDetailModal from "@/components/ImageDetailModal";
import RadioButton from "@/components/RadioButton";

export default {
  name: "SearchResult",
  data: function() {
    return {
      searchVaraible: this.$route.query.q, //this.searchString != undefined ? this.searchString : "",
      SearchResults: [],
      page: this.$route.query.page == "" ? 1 : this.$route.query.page,
      loading: true,
      camera: this.$route.query.camera,
      item: {},
      options: [
        "FHAZ",
        "RHAZ",
        "MAST",
        "CHEMCAM",
        "MAHLI",
        "NAVCAM",
        "MARDI",
        "PANCAM",
        "MINITES"
      ]
    };
  },
  watch: {
    SearchResults() {
      if (this.searchVaraible != "" && this.searchVaraible != undefined) {
      }
      this.$forceUpdate();
      return this.SearchResults;
    },
    searchVaraible() {
      this.page = 1;
      return this.searchVaraible;
    },
    //   searchString(){
    //       console.log(this.$route.query.q)
    //       if(this.$route.query.q !=undefined){
    //           getImages()
    //       }
    //       return this.$route.query.q
    //   }
    page() {
      return this.$route.query.page; //!='' || this.$route.query.page !=undefined) ?this.$route.query.page:1
    }
  },
  created() {
    this.getImages();
  },
  computed: {},
  methods: {
    async getImages() {
      const response = await ImageService.getImages({
        sol: this.searchVaraible,
        page: this.page,
        camera: this.camera.toLowerCase()
      });
      this.SearchResults = response.data;
      console.log(response);
      this.loading = false;
      // this.$forceUpdate()
    },
    next() {
      // if(this.page 1){
      this.page = parseInt(this.page) + 1;
      // }
      this.nextUrl();
    },
    prev() {
      if (this.page > 1) {
        this.page = parseInt(this.page) - 1;
      }
      this.nextUrl();
    },
    nextUrl() {
      this.$router.push(
        "/search?q=" +
          this.searchVaraible +
          "&page=" +
          this.page +
          "&camera=" +
          this.camera.toLowerCase()
      );
      this.$router.go();
    },
    showModal(value) {
      this.item = value;
    },
    changeValue: function(newValue) {
      console.log(newValue);
      this.camera = newValue;
    }
  },
  components: {
    ImageCard,
    ImageDetailModal,
    RadioButton
  }
};
</script>
