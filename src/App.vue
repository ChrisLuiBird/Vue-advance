<template>
  <div>
    <CountValue />
    <PersonDetail />
  </div>

</template>

<script>
import CountValue from './components/CountValue.vue'
import PersonDetail from './components/PersonDetail.vue'
export default {
  name: "App",
  methods: {
   
  },
  components:{
    CountValue,PersonDetail
  }
};
</script>