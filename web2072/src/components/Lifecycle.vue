// Lifecycle component (Vòng đời của component)
// Là một chuỗi gd mà môt component
// trải qua từ khi được khởi tạo cho đến khi bị hủy bỏ
// Lifecycle hooks (Hooks vòng đời) được thực thi
// cho phép LTV  thêm hoặc tùy chỉnh tại các giai đoạn 
// quan trọng
// Một vài hàm vòng đời thường dùng: onMounted, 
// onUpdated, onUnmounted, ....
<script setup>
import { onMounted, onUpdated, onUnmounted } from 'vue';
import { ref } from 'vue';
const count = ref(0);
// onMounted: Được gọi khi component được gắn vào DOM
onMounted(() => {
    console.log('Component đã được gắn vào DOM');
});
// onUpdated: Được gọi khi component được cập nhật
onUpdated(() => {
    console.log('Component đã được cập nhật', count.value);
});
const increment = () => {
    count.value++;
};
// onUnmounted: Được gọi khi component bị hủy bỏ
const handleResize = () => {
    console.log('Kích thước cửa sổ đã thay đổi');
}
// Đăng ký sự kiện resize
window.addEventListener('resize', handleResize);
// Hủy bỏ sự kiện resize khi component bị hủy bỏ
onUnmounted (() => {
    window.removeEventListener('resize', handleResize);
})
</script>
<template>
    <h1>Lifecycle</h1>
    <button @click="increment">Tăng lên</button>
    <p>Giá trị hiện tại là: {{ count }}</p>
</template>