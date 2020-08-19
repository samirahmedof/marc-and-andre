<template>
  <div class="catalogPage">
    <div class="row">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <CatalogItem v-for="item in showedTableData" :key="item.id" :item="item" />
            </div>
          </div>
          <div class="col-md-3 tableCol">
            <div class="totalTable">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Size</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th>One-piece</th>
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
                    <td>-</td>
                    <td></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>-</td>
                    <td></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <td>9</td>
                    <td></td>
                    <td>40</td>
                    <td>80</td>
                    <td>56</td>
                    <td>9</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>For the top</th>
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
                    <td></td>
                    <td>1</td>
                    <td>-</td>
                    <td></td>
                    <td></td>
                    <td>-</td>
                    <td></td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>For the bottom</th>
                    <th>70</th>
                    <th>75</th>
                    <th>80</th>
                    <th>85</th>
                    <th>90</th>
                    <th>95</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>12</td>
                    <td>-</td>
                    <td>-</td>
                    <td>90</td>
                    <td>12</td>
                    <td>98</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 mt-5 d-flex justify-content-center">
            <Pagination :count="pageCount" @changedPage="currentPage=$event" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "./../../shared/Pagination";
import CatalogItem from "./CatalogItem";
export default {
  data() {
    return {
      Page: "Catalog",
      dataPerPage: 6,
      currentPage: 1,
      showedTableData: [],
      tableData: [],
    };
  },
  methods: {
    paginate() {
      let page = this.currentPage;
      let perPage = this.dataPerPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      this.showedTableData = this.tableData.slice(from, to);
    },
  },
  computed: {
    pageCount() {
      let count = Math.ceil(this.tableData.length / this.dataPerPage);
      return count;
    },
    mainData() {
      let data = [
        {
          id: "1",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "2",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/3000x1500",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "3",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/140x200",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "4",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "5",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "6",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "7",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "8",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "9",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
        {
          id: "10",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
        },
      ];
      return data;
    },
  },
  watch: {
    currentPage() {
      this.paginate();
    },
    tableData() {
      this.paginate();
    },
    pageCount() {
      this.currentPage = 1;
      this.paginate();
    },
  },
  created() {
    this.paginate();
    this.tableData = this.mainData;
  },
  components: {
    Pagination,
    CatalogItem,
  },
};
</script>