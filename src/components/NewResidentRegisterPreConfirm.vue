<template>
  <div>
    <p class="text-4xl font-semibold text-purple-600" style="text-shadow: white 2px 2px 3px">
      Almost there !
    </p>
  </div>
</template>

<script>
export default {
  name: 'NewResidentRegisterPreConfirm',
  data() {
    return {}
  },
  props: ['changeView'],
  mounted() {
    this.changeView()
  }
}
</script>

<style scoped></style>
