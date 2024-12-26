<script lang="ts" setup>
const timer = ref(5); // 五秒后跳转
const router = useRouter();
onMounted(() => {
  setInterval(() => {
    timer.value--;
    if (timer.value === 0) {
      router.push("/");
    }
  }, 1000);
});
</script>

<template>
  <div>
    <h1 class="text-center">404 not find</h1>
  </div>
</template>
