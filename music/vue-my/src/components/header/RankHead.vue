<template>
<!-- :style="cStyle" -->
  <div class="rank-head container"  id="transparent-header">
    <a class="rank-head-back"  @click="routerBack"></a>
    {{title}}
  </div>
</template>

<script type="es6">
  export default {
    props: ['title', 'cStyle'],
    methods: {
      routerBack(){
        this.$router.go(-1);
      }
    }
  }
</script>
