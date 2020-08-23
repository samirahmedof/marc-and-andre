<template>
  <tr
    :class="[{'isNotActive':user.status=='isNotActive'},{'archive':user.status=='archive'},{'active':user.status=='active'}]"
    @click="goToOrders"
  >
    <td>{{user.regDate}}</td>
    <td>{{user.fullname}}</td>
    <td>{{user.company}}</td>
    <td>{{user.tin}}</td>
    <td>{{user.phone}}</td>
    <td>{{user.email}}</td>
    <td>{{user.country}}</td>
    <td>{{user.city}}</td>
    <td>{{user.zip}}</td>
    <td>{{user.address}}</td>
    <td>{{user.activeAddress}}</td>
    <td>
      <div class="userStatus text-center">
        <select class="form-control" v-model="status">
          <option value="active">Active</option>
          <option value="isNotActive">Is not active</option>
          <option value="archive">Archive</option>
        </select>
        <button class="btn btn-pr btn-sm mt-1" @click.prevent="acceptStatus">OK</button>
      </div>
    </td>
    <td>{{user.activeOrders}}</td>
    <td>{{user.lastChange}}</td>
    <td>{{user.manager}}</td>
    <td>{{user.activate}}</td>
    <td>
      <div class="editUser text-center">
        <router-link :to="userlink">
          <i class="fas fa-edit"></i>
        </router-link>
      </div>
    </td>
    <td>{{user.type}}</td>
  </tr>
</template>
<script>
export default {
  props: ["user", "index"],
  data() {
    return {
      status: this.user.status,
    };
  },
  methods: {
    acceptStatus() {
      this.$emit("changedStatus", { id: this.user.id, status: this.status });
    },
    goToOrders() {
      if (this.user.status == "active") {
        this.$router.push("/orders");
      }
    },
  },
  computed: {
    userlink() {
      return `/users/${this.index + 1}`;
    },
  },
};
</script>