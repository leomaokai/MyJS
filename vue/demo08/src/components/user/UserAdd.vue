<template>
  <div>
    <form action="">
      姓名:<input type="text" v-model="user.name" /><br />
      年龄:<input type="text" v-model="user.age" /><br />
      <input type="button" value="保存" @click="save" />
      <input type="button" value="取消保存" @click="undoAdd" />
    </form>
  </div>
</template>
<script>
export default {
  name: "UserAdd",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    undoAdd() {
      this.$router.push({ name: "User" });
    },
    save() {
      this.$http.post("http://localhost:8989/add", this.user).then((res) => {
        console.log(res.data);
        this.$router.push({ name: "User" });
      });
    },
  },
};
</script>
<style scoped>
</style>