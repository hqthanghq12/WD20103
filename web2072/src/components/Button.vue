<script setup>
// import { ref } from 'vue';
// const count = ref(0);
// Sử dụng defineProps để nhận dữ liệu từ file cha
// const props = defineProps({
//     message: String
// });
//  Truyền dữ liệu từ file con sang file cha
// Thì dung emit 
// vidu
// const emit = defineEmits(["ThongBaoTuCon"]);
// Tạo sự kiện nếu bấm sẽ nhận thông từ file con
// const emitThongBao = () => {
//     emit('ThongBaoTuCon', 'Đây là thông báo từ file con');
// }
</script>
<template>
<!-- Chạy file thông qua App.vue -->
<!-- <button @click="count++">Tăng lên: {{ count }}</button> -->
<!-- Nhận dữ liệu từ App chuyển qua -->
<!-- <h1>Đây file con</h1>
<p>Đây là giá trị được nhận từ file cha: {{ message }}</p>
<button @click="emitThongBao">Gửi thông báo</button> -->
<!-- <p>Nội dung được lấy từ file cha:</p>
<p><slot></slot></p> -->
<!-- Đặt tên -->
<header>
    <slot name="header"></slot>
</header>
</template>
<style scoped>
</style>