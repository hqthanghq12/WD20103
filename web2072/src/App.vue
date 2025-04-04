<script setup>
// import Test from './components/Test.vue';
// import VIF from './components/V-IF.vue';
// import EventForm from './components/Event_Form.vue';
// Nhúng file con vào 
// import { ref } from 'vue';
// import Button from './components/Button.vue';
// Hàm nhận giá trị từ file con
// const gTri = ref(''); // Chứa dữ liệu
// const nhanDL = (data) =>{
//     gTri.value = data; // Nhận dữ liệu từ file con
// }
import ChaButton from './components/ChaButton.vue';
</script>
<template>
<!-- gọi ra -->
<!-- <Test/> -->
<!-- <VIF/> -->
<!-- <EventForm/> -->
<!-- Dạng thẻ -->
<!-- <Button message="Đây là 5 triệu" /> -->
<!-- Truyền thông tin lớp cha xuống dùng pops -->
<!-- Nhận dữ liệu file con -->
<!-- Lắng nghe sự kiện 'emitThongBao' từ file con -->
<!-- <Button @ThongBaoTuCon="nhanDL"/> -->
<!-- Hiện thị ra -->
<!-- <p>Đây là giá trị nhận được từ file con: {{ gTri }}</p> -->
<ChaButton/>
</template>
<style scoped>
</style>