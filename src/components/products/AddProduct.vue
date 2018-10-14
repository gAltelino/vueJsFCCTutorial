<template>
  <div>

    <h3>Add Product</h3>

    <div class="card products__add-product">
      <div>
        <input
        v-model="addProductData.product_id"
        class="validate"
        placeholder="id"
        >
      </div>
      <div>
        <input
        v-model="addProductData.name"
        class="validate"
        placeholder="name"
        >
      </div>
      <div>
        <input
        v-model="addProductData.price"
        class="validate"
        placeholder="price"
        >
      </div>
      <div>
        <i 
        @click="onAdd"
        class="material-icons medium ">
          add
        </i>
      </div>
    </div>
    <!-- <h1>{{products}}</h1> -->
  </div>
</template>

<script>

export default {
  name: 'AddProduct',
  props: [
      'addProductData',
      'onAdd'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products__list-item{
  align-items: center;
  display: flex;
  justify-content: space-around;
}  
.products__add-product{
  align-items: center;
  display: flex;
  justify-content: space-around;
}
.material-icons{
  cursor: pointer;
}
</style>