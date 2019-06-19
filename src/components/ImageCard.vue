<template>
     <div class="card" style="width:100%;">
          <img class="card-img-top" :src="imageSrc" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{keyword}}</h5>
            <p class="card-text">{{description}}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
</template>
<script>
export default {
    name:'ImageCard',
    props:[
        'imageSrc',
        'description',
        'keyword'

    ]
}
</script>
<style>
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
        border:0px !important
    }
    .card:hover {
        top: -10px
    }
</style>
