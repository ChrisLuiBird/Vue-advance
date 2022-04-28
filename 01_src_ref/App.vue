<template>
  <div>
    <h1 ref="title">hello</h1>
    <button @click="showDOM">show dom</button>
    <div>
      <button @click="showVC">show school vc</button>
    </div>
    <SchoolComponent ref="vcd"></SchoolComponent>
    <StudentComponent></StudentComponent>
  </div>
</template>

<script>
import SchoolComponent from "./components/SchoolComponent";
import StudentComponent from "./components/StudentComponent";

export default {
  name: "App",
  methods: {
    showDOM() {
      console.log(this.$refs.title);
    },
    showVC() {
      console.log(this.$refs.vcd);
    },
  },
  components: {
    SchoolComponent,
    StudentComponent,
  },
};
</script>