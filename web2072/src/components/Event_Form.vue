<script setup>
// Event
// inline handler: cho phép định sự kiện 
// trực tiếp trong template
// ví dụ:
import {ref} from 'vue';
const count = ref(0);
// Method handler: định nghĩa hàm
// Tái sử dụng khi cần
// Khả năng xử lý cao hơn, logic hơn, ...
// ví dụ: 
const count1 = ref(0);
function tangLen () {
    count1.value ++;
}
// .stop: Dừng lại hành động không tiếp
// tục truyền lên phần tử cha trong Dom
// .prevent: Ngăn chặn hành vi mặc định
//......
// Ví dụ
const name = ref('');
const gender = ref(''); 
const check = ref(false);
const select = ref('');
function formHander(){
    console.log('Kết quả nhâp:', {
        name:name.value,
        gender: gender.value,
        check: check.value,
        select: select.value
    });
}
</script>
<template>
<!-- <h1>Xin chào</h1> -->
<!-- inline handler -->
<button class="btn" 
@click="count++">
Tăng 1 đơn vị: {{count}}
</button>
<!-- Method handler -->
<button class="btn" 
@click="tangLen()">
Tăng 1 đơn vị bằng hàm: {{count1}}
</button>
<form @submit.prevent="formHander">
<button type="submit">Gửi</button>
</form>
<!-- Lấy dữ liệu từ form -->
<form @submit.prevent="formHander">
<!-- input:text -->
<label for="name">Name:</label>
<!-- .trim: Hỗ trợ xóa dấu cách ở đầu ký tự đầu 
và xóa dấu cách ở cuối của ký từ cuối cùng -->
<input type="text" placeholder="Nhập tên" v-model.trim="name">
<span>{{ name }}</span>
<!-- number, ... -->
<!-- radio -->
<label for="gender">Giới tính</label>
<input type="radio" id="gender"
 name="gender" value="nam"  
 v-model="gender">
<label for="">Nam</label>
<input type="radio" id="gender" 
name="gender"  value="nữ"  
v-model="gender">
<label for="">Nữ</label>
<input type="radio" id="gender" 
name="gender"  value="Khác"  
v-model="gender">
<label for="">Khác</label>
<!-- Check box -->
<input type="checkbox" name="" id="" v-model="check">Tích/Không tích
<button type="submit">Gửi</button>
<!-- select -->
<select name="" id="" v-model="select">
  <option value="">Chọn giới tính</option>
    <option value="nam">Nam</option>
    <option value="nữ">Nữ</option>
    <option value="Khác">Khác</option>
</select>
</form>
</template>
<style scoped>
</style>