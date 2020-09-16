<template>
<div>
  cdn
</div>
</template>

<script>
export default {

  destroyed() {
    window.removeEventListener('popstate', this.goBack, false);
  },
  mounted() {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.goBack, false);
    }
  },
}
</script>

<style scoped>

</style>
