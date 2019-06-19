<template>
  <div class="modal fade"  id="image-detail" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="card">
          <img class="card-img-top" :src="item.img_src" alt="Card image cap">
          <div class="card-body">
            <!-- <h5 class="card-title">{{item.data[0].title}}</h5>
            <p class="card-text">{{item.data[0].description}}</p> -->
            <table class="table">
                <tr>
                    <td>Camera Name</td>
                    <td>{{item.camera.name}}</td>
                </tr>
                <tr>
                    <td>Camera Full Name</td>
                    <td>{{item.camera.full_name}}</td>
                </tr>
                <tr>
                    <td>Earth Date</td>
                    <td>{{item.earth_date}}</td>
                </tr>
                 <tr>
                    <td>sol</td>
                    <td>{{item.sol}}</td>
                </tr>
            </table>
            <div class="container">
              <div class="row">
                <div class="col-md-3" v-for="image in images" :key="image">
                  <img :src="image" alt="" class="img-fluid" style="margin-bottom:10px">
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>
<script>

import axios from 'axios'
export default {
  name: "ImageDetailModal",
  props: ["item"],
};
</script>
<style scoped>
p.card-text {
    font-size: 12px;
}
.card-img-top {
    max-height: 400px
}

</style>


            <!-- <h5 class="card-title">{{item.data[0].title}}</h5>
            <p class="card-text">{{item.data[0].description}}</p> -->