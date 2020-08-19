<template>
  <div class="col-md-4 mb-4">
    <div class="catalogCard">
      <div class="cardName">{{item.name}}</div>
      <div class="imageContainer">
        <img :src="item.img" />
      </div>
      <div class="cardBody">
        <h5 class="cardTitle">{{item.vendor}}</h5>
        <p class="cardDescr">{{item.description}}</p>
        <div class="row price">
          <div class="col-md-6">
            <span>wholesale: {{item.wholesale}}$</span>
          </div>
          <div class="col-md-6">
            <span>retail: {{item.retail}}$</span>
          </div>
        </div>
        <div class="tableArea">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Size</th>
                <th>36</th>
                <th>38</th>
                <th>40</th>
                <th>42</th>
                <th>44</th>
                <th>46</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>B</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>C</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btnRow text-center">
          <a href="#" class="btn btn-pr btn-sm">More</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
