<template>    
    <Category/>
    <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Featured Products</span></h2>
        <div class="row px-xl-5">
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1" v-for="product in products.slice(0,8)" :key="product.id">
                <div class="product-item bg-light mb-4">
                    <div class="product-img position-relative overflow-hidden">
                        <img class="img-fluid w-100"  :title="(product.title)" :alt="(product.title)"
                    :src="(product.thumbnail)">
                        <div class="product-action">
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-shopping-cart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="far fa-heart"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-sync-alt"></i></a>
                            <a class="btn btn-outline-dark btn-square" href=""><i class="fa fa-search"></i></a>
                        </div>
                    </div>
                    <div class="text-center py-4">
                        <a class="h6 text-decoration-none text-truncate" href="">{{ product.title }}</a>
                        <div class="d-flex align-items-center justify-content-center mt-2">
                            <h5>$ {{ product.price }}</h5><h6 class="text-muted ml-2"><del>$ 123.00</del></h6>
                        </div>
                        <div class="d-flex align-items-center justify-content-center mb-1">
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small class="fa fa-star text-primary mr-1"></small>
                            <small>({{ product.stock }})</small>
                        </div>
                    </div>
                </div>
                
            </div>
           
        </div>
        
<!--   

        <div v-for="item in grouped[category.title]" :key="item.id">
    Item: {{ item }}
    </div> -->

    </div>
    <!-- <Recents/> -->
    </template>
    
    <script>    
    import usersData from "../products.json";
    import Category from "./Category.vue";       
    // import Recents from "./Recentspro.vue";
    export default {    
            name : 'feature-part',
            components:{
                Category,
                // Recents
            },
    data: function () {
        return {
        products: usersData.products, // passing array data into Vue
        }
    }
    }
    </script>
    