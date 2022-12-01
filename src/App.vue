<template>

  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>  -->
  <Header data="XChirag is here" kiki="I am KIKI" />
  <div class="container mt-5 mb-5" v-for="product in products" :key="product.id">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <div class="card">
          <div class="row">
            <div class="col-md-6">
              <div class="images p-3">
                <div class="text-center p-4"> <img id="main-image" :title="(product.title)" :alt="(product.title)"
                    :src="(product.thumbnail)" width="250" /> </div>
                <div class="thumbnail text-center"> <img onclick="change_image(this)"
                    src="https://i.imgur.com/Rx7uKd0.jpg" width="70"> <img onclick="change_image(this)"
                    src="https://i.imgur.com/Dhebu4F.jpg" width="70"> </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="product p-4">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center"> <i class="fa fa-long-arrow-left"></i> <span
                      class="ml-1">Back</span> </div>
                  <i class="fa fa-shopping-cart text-muted"></i>
                </div>
                <div class="mt-4 mb-3"> <span class="text-uppercase text-muted brand">{{ product.category }}</span>
                  <h5 class="text-uppercase">{{ product.title }}</h5>
                  <div class="price d-flex flex-row align-items-center"> <span class="act-price">₹{{ product.price
                  }}</span>
                    <div class="ml-2"><span>{{ product.discountPercentage }} % OFF</span> </div>
                  </div>
                </div>
                <p class="about">{{ product.description }}</p>
                <div class="sizes mt-5">
                  <h6 class="text-uppercase">Size</h6>
                  <label class="radio">
                    <input type="radio" name="size" value="S" checked>
                    <span>S</span> </label>
                  <label class="radio">
                    <input type="radio" name="size" value="M">
                    <span>M</span> </label>
                  <label class="radio">
                    <input type="radio" name="size" value="L">
                    <span>L</span> </label>
                  <label class="radio">
                    <input type="radio" name="size" value="XL">
                    <span>XL</span> </label>
                  <label class="radio">
                    <input type="radio" name="size" value="XXL">
                    <span>XXL</span> </label>
                </div>
                <div class="cart mt-4 align-items-center">
                  <button class="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                  <i class="fa fa-heart text-muted"></i> <i class="fa fa-share-alt text-muted"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Category: {{ product.title }}
  <div v-for="product in products[product.title]" :key="product.id">
    product: {{ product }}
    </div> -->
    
    
  </div>

</template>

<script>

import usersData from "./products.json";
export default {  
  name: 'App',
  components:{
    Header
  },
 data: function () {
    return {
      products: usersData.products, // passing array data into Vue
    }
}
};

// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';

// export default {
//   name: 'App',
//   components: {
//     // HelloWorld,
//     Home
//   }
// }
</script>

<style>
  @import './assets/css/style.css';
</style>

