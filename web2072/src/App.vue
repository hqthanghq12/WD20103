// File vuejs cấu hình cơ bản có 3 phần
//1. script setup: chứa logic 
// 2. template: code html
// 3. style scoped: code css



<template>
<!-- <h1>Xin chào cả nhà</h1> -->
<div class="container">
    <h1>Xin chào cả nhà</h1>
    <p class="p-3 mb-2 bg-primary text-white">Đây là nội dung của trang web</p>
    <button type="button" class="btn btn-primary">Primary</button>
</div>
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
<div>{{ count }}</div>
<button @click="tangLen()">Tăng</button>
<!-- 
Với vue việc dùng phương thưc data() để theo dõi khó khăn hơi vì 
script setup không hỗ trợ nên cần thì phải tự tạo script để theo dõi
 -->
</template>
<script>
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
</script>

<style scoped>
h1{
    color: red;
}
</style>
