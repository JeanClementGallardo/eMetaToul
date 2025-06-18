<template>
  <div class="row">
    <slot name="firstItem" class="column" />
    <slot name="secondItem" class="column" />
    <slot name="thirdItem" class="column" />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  margin-bottom: 20px;
}

.column {
  margin-left: 5%;
  margin-right: 5%;
}
</style>