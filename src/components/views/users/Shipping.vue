<template>
  <tr>
    <td>Shipping address {{index+1}}</td>
    <td>
      <input type="text" class="form-control" :value="address" />
    </td>
  </tr>
</template>
<script>
export default {
  props: ["address", "index"],
};
</script>