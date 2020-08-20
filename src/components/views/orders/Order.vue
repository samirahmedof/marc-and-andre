<template>
  <tr v-if="item.status=='sent'">
    <td>{{index+1}}</td>
    <td>{{item.date}}</td>
    <td>{{item.status}}</td>
  </tr>
  <tr v-else>
    <td>{{index+1}}</td>
    <td>{{item.date}}</td>
    <td>{{item.status}}</td>
  </tr>
</template>
<script>
export default {
  props: ["item", "index"],
};
</script>