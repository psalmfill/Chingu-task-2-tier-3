<template>
  <div class="modal fade"  id="image-detail" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" v-if="item">
  <div class="modal-dialog modal-lg">
    <div class="modal-header bg-dark">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close bg-white text-danger " data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    <div class="modal-content">
      <div class="card">
          <img class="card-img-top" :src="item.img_src" alt="Card image cap">
          <div class="card-body">
            <!-- <h5 class="card-title">{{item.data[0].title}}</h5>
            <p class="card-text">{{item.data[0].description}}</p> -->
            <table class="table" v-if="item.camera">
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
              <div class="row" v-if="item.camera">
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