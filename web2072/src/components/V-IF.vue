<script setup>
// v-if: điều kiện hiện thị nếu đk đúng thì hiện thị nếu sau thì ấn đi
// Hiển thị và ấn trên DOM (nếu ẩn thì f12 k thấy)
// nếu điểm số mà lớn hơn hoặc bằng 5 thì hiện thị pass môn
// nếu điểm số mà nhỏ hơn 5 thì ẩn điểm 
// Kiểu dư liệu số
import {ref} from 'vue';
const diemSo = ref(4);
// v-else 
// nếu điểm số mà lớn hơn hoặc bằng 5 thì hiện thị pass môn
// ngược lại thì hiện thị trượt môn
// v-else-if
// nếu điểm số mà lớn hơn hoặc bằng 8 thì hiện thị giỏi
// nếu điểm số mà lớn hơn hoặc bằng 5 thì hiện thị khá
// nếu điểm số mà lớn hơn hoặc bằng 3 thì hiện thị trung bình
// ngược lại thì hiện thị yếu
// v-show: giống như v-if nhưng nó không ẩn đi mà chỉ ẩn điểm chứ k biến mất
// vòng lặp
// v-for
// mảng
const arrFood = ref(['cơm', 'phở', 'bún', 'mì']);
// đối tượng
import {reactive} from 'vue';
const objFood = reactive({
    name: 'Bánh mì',
    price: 15000
});
// mảng đối tượng
const arrObjFood = reactive([
    {
        name: 'Bánh mì',
        price: 15000
    },
    {
        name: 'Bún',
        price: 20000
    },
    {
        name: 'Phở',
        price: 25000
    }
]);
</script>
<template>
<!-- <h1>Xin chào</h1> -->
<!-- <div class="container">
  <h1 v-if="diemSo >= 5">Pass môn</h1>
  <h1 v-else>trượt môn</h1>
</div>
<div>
    <h1 v-if="diemSo >= 8">giỏi</h1>
    <h1 v-else-if="diemSo >= 5">khá</h1>
    <h1 v-else-if="diemSo >= 3">trung bình</h1>
    <h1 v-else>yếu</h1>
</div> -->
<div>
<h1 v-show="diemSo >= 5">Pass môn</h1>
<h1 v-show="diemSo < 5">Trượt môn</h1>
</div>
<!-- v-for -->
<!-- mảng -->
<!-- lấy giá trị -->
<ul v-for="food in arrFood" :key="food">   
    <li>{{ food }}</li>
</ul>
<!-- lấy cả giá trị và chỉ số -->
<ul v-for="food, index in arrFood" :key="food">   
    <li>{{ index }} - {{ food }}</li>
</ul>
<!-- đối tượng -->
<ul v-for="food, index in objFood" :key="food">   
    <li>{{ index }} - {{ food }}</li>
</ul>
<!-- mảng đối tượng -->
<ul v-for="foods in arrObjFood " :key="foods">
    <li>{{ foods.name }} - {{ foods.price }}</li>
</ul>
</template>
<style scoped>
</style>