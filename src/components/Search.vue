<template>
  <div id="search">
      <h1 class="heading">Nasa Image Search</h1>
    <form action="" @submit.stop.prevent="submit">
      <div class="input-group"  >
        <input type="search" class="form-control" v-model="searchInput" id="search-box" >
        <div class="input-group-add-on" id="icon">
          <icon icon="search"/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
            <div class="input-group options">
                <div class="input-group-append" v-for="option in options" :key="option">
                <RadioButton name="options" :value="selectedValue" :label="option" @change="changeValue"/>
                </div>
            </div>
        </div>
      </div>
      <div class="row">
          <div class="col-md-4 offset-md-4">
              <button type="submit" class="btn btn-primary btn-block" @click="doSearch">Search</button>
          </div>
      </div>
    </form>
  </div>
</template>
<script>
import RadioButton from "./RadioButton";

export default {
  name: "Search",
  components: {
    RadioButton
  },
  data: function() {
    return {
      selectedValue: this.options,
      searchInput: "",
      options: ['FHAZ','RHAZ','MAST','CHEMCAM','MAHLI','NAVCAM','MARDI'
      ,'PANCAM','MINITES'],
      // camara : 'all'
    };
  },
  methods: {
    changeValue: function(newValue) {
      console.log(newValue);
      this.selectedValue = newValue;
    },
    doSearch:function(){
         //if you want to send any data into server before redirection then you can do it here
         let camera = this.selectedValue ==undefined?'all':this.selectedValue
        this.$router.push("/search?q="+this.searchInput+"&camera="+camera);
      }
  }
};
</script>
<style scoped>

.heading {
    color: #008FFF;
    font-weight: bolder;
    margin: 5%
}
#search {
  width: 50%;
  margin: 0 auto;
  position: absolute;
  top: 25%;
  left: 25%;
  
}
#search-box {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-color:#eee;
}
#search-box:focus,
#search-box:hover {
 outline: none;
box-shadow:none ;
border:1px solid #ccc ;
border-right: none;
}
#search-box:focus + div, #search-box:hover + div {
    border:1px solid #ccc ;
    border-left: none;
}
#icon {
  background: #ffffff;
  border: 1px solid #eee;
  border-left: 0px;
  padding: 0.9% 2%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
input {
  border-right: 0px;
}
.options {
    margin: 3px auto;
    width: 90%
}
</style>
