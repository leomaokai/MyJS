<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ this.$store.state.username }}</h2>
    <table border="1" width="100%">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>salary</th>
        <th>do</th>
      </tr>
      <tr>
        <td>1</td>
        <td>zhangsan</td>
        <td>11</td>
        <td>100</td>
        <td><a href="">删除</a> <a href="">修改</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      msg: "Hello Cumters",
      student: {},
    };
  },
  methods: {},
  computed: {},
  // 初始化阶段发送请求
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th {
  background-color: aquamarine;
}
</style>
