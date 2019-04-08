<template>
<div>
<whole-nav></whole-nav>
  <router-view/>
  <whole-tab></whole-tab>
</div>
</template>

<script>
  import wholeNav from '../components/wholeNav'
  import wholeTab from '../components/wholeTab'
    export default {
        name: "indexPage",
      components:{
          'wholeTab':wholeTab,
        'wholeNav':wholeNav
      }
    }
</script>

<style scoped>
</style>
