<template>
  <div class="home">home</div>
</template>

<script lang="ts" setup>
const router = useRouter();
setTimeout(() => {
  router.push("./about");
}, 3000);
console.log();
</script>

<style lang="scss" scoped></style>
