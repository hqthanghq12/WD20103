<script setup>
import Button from './Button.vue';
</script>
<template>
    <!-- Nội dung cha chuyền cho con -->
    <Button>
        <!-- Nội dung cha chuyền cho con -->
        <template v-slot:header>
            <h1>Đây là tiêu đề</h1>
        </template>
        <!-- Nội dung con -->
        <!-- <p>Đây là nội dung của file con</p> -->
    </Button>
</template>
<style scoped>
</style>