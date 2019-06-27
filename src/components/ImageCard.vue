<template>
     <div class="card" style="width:100%;" data-toggle="modal" data-target="#image-detail" @click="showdetail()">
          <img class="card-img-top" :src="item.img_src" alt="Card image cap">
          <div class="card-body">
            <!-- <h5 class="card-title">{{item.data[0].title}}</h5>
            <p class="card-text">{{item.data[0].description}}</p> -->
          </div>
        </div>
</template>
<script>
export default {
    name:'ImageCard',
    props : {
        item:{
        }
    },
    methods:{
        showdetail(){
            this.$emit('showDetail',this.item)
        }
    }
}
</script>
<style scoped>
    .card-text {
        height: 100px;
        overflow: hidden;
    }
    .card-img-top {
        height: 200px
    }
    .card {
        margin-bottom:20px;
        cursor: pointer;
        border:0px !important;
    }
    .card:hover {
        top: -10px
    }
</style>
