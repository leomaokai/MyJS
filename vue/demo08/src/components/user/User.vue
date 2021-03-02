<template>
  <div>
    <h1>{{ msg }}</h1>
    <!-- 使用store -->
    <h2>{{ this.$store.state.username }}</h2>
    <input type="button" value="改名" style="float: left" @click="changeName" />
    <input type="text" v-model="name" style="float: left" />
    <br />
    <br />
    <input type="button" value="添加" style="float: left" @click="add" />
    <!-- <router-link to="/user/add">添加</router-link> -->
    <br />
    <table border="1" width="100%">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>salary</th>
        <th>do</th>
      </tr>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ index + 1 }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.age }}</td>
        <td>100</td>
        <td><a href="">删除</a> <a href="">修改</a></td>
      </tr>
    </table>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      msg: "Hello User",
      users: [],
      name: "",
    };
  },
  methods: {
    getListUsers() {
      this.$http.get("http://localhost:8989/list").then((res) => {
        this.users = res.data;
      });
    },
    changeName() {
      //调用store方法
      this.$store.commit("changeNameStore", this.name);
      this.name = "";
    },
    add() {
      // this.$router.push("/user/add");
      this.$router.push({ name: "UserAdd" });
    },
  },
  created() {
    this.getListUsers();
  },
  // 路由守卫钩子函数,在路由发生变化时触发
  beforeRouteUpdate(to, from, next) {
    this.getListUsers();
    // 放行路由的后续操作
    next();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th {
  background-color: aqua;
}
</style>
