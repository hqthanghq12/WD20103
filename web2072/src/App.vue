// File vuejs cấu hình cơ bản có 3 phần
//1. script setup: chứa logic 
// 2. template: code html
// 3. style scoped: code css
<script setup>
// ref (Vue 3): sử dùng cho các kiểu dữ liệu nguyên thủy
// Nguyên thủy: number, string, boolean, null, undefined, bigint, array
// muốn truy cập vào giá trị của ref thì phải dùng .value
// Ví dụ 1:
// Khai báo ref
import {ref} from 'vue';
const name = ref('Nguyễn Văn A');
const count = ref(10);
function tangLen(){
  count.value++;
}
// Khai báo thông tin cá nhân và ref để theo dõi và hiện ra màn hình
// họ tên, ngày sinh, diachi
const hoTen = ref('Nguyễn Thành B');
const ngaySinh = ref('01/01/1990');
const diaChi = ref('Hà Nội');
// reactive chỉ áp dụng cho ktd là đối tượng
// không kiểu nguyên thủy (số, chuỗi, boolean)
// khác nhau ref và reactive là ref k dùng .value
// Khái báo
import {reactive} from 'vue';
const Nyc = reactive({
  name: 'Nguyễn Văn C',
  age: 20,
  address: 'Hà Nội'
});
// one way data binding và two way data binding
// one way data binding: dữ liệu chỉ hiển thị 1 chiều từ model ra view
// two way data binding: dữ liệu hiển thị 2 chiều từ model 
// ra view và ngược lại
// ví dụ về one way data binding
const oneWay = ref('One way data binding');
function changeOneWay(){
  oneWay.value = 'One way data binding changed';
}
// Ví dụ two way data binding
const twoWay = ref('Two way data binding');
function changeTwoWay(){
  twoWay.value = 'Two way data binding changed';
}
</script>
<template>
<!-- <h1>Xin chào cả nhà</h1> -->
<div class="container">
    <h1>Xin chào cả nhà</h1>
    <p class="p-3 mb-2 bg-primary text-white">Đây là nội dung của trang web</p>
    <button type="button" class="btn btn-primary">Primary</button>
</div>
<!-- ref -->
<p>{{ name }}</p>
<div>{{ count }}</div>
<button @click="tangLen()">Tăng</button>
<!-- hiện thị thông tin -->
<p>họ tên: {{ hoTen }}</p>
<p>Ngày sinh: {{ ngaySinh }}</p>
<p>địa chỉ: {{ diaChi }}</p>
<!--  reactive -->
<p>{{ Nyc.name }}</p>
<!-- ví dụ one way -->
<p>{{ oneWay }}</p>
<!-- <input type="text" :value="oneWay"> -->
<button @click="changeOneWay()">Thay đổi</button>
<!-- ví dụ two way -->
<p>{{ twoWay }}</p>
<input type="text" v-model="twoWay">
<button @click="changeTwoWay()">Thay đổi</button>
<!-- Hiển thị dữ liệu từ biến -->
<!-- <ul>
  <li>{{ name }}</li>
  <li></li>
<!-- Hiển thi dự liệu từ biến -->
<!-- <ul>
  <li>{{ name }}</li>
  <li></li>
  <li></li>
</ul> -->
<!-- Hiển thị mảng -->
<!-- <ul>
<li>{{ arr[1] }}</li>
</ul> -->
<!-- Hiển thị đối tượng -->
 <!-- <span>{{ Nyc.name }}</span> -->
<!-- <div>{{ count }}</div>
<button @click="tangLen()">Tăng</button> -->
<!-- 
Với vue việc dùng phương thưc data() để theo dõi khó khăn hơi vì 
script setup không hỗ trợ nên cần thì phải tự tạo script để theo dõi
 -->
 <!-- <script>
  export default {
    data(){
      return{
        count: 0 // Thuộc tính
      } 
    },
    methods:{
      tangLen(){ // Phương thức
        this.count++;
      }
    }
  }
</script> -->
</template>


<style scoped>
h1{
    color: red;
}
</style>
