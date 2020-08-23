<template>
  <div class="catalogPage">
    <div class="row">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
        <div class="row">
          <div class="col-md-9">
            <div class="row">
              <CatalogItem
                v-for="(item,index) in showedTableData"
                :key="item.id"
                :item="item"
                :index="index"
              />
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
                    <td>C</td>
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
              <div class="btnRow text-center">
                <button class="btn btn-pr">Save</button>
              </div>
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
      totalTableData: null,
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
          type: "one",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "C"],
            stock: [
              {
                size: "36",
                letter: "C",
              },
              {
                size: "42",
                letter: "A",
              },
              {
                size: "44",
                letter: "A",
              },
            ],
          },
        },
        {
          id: "2",
          type: "top",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/3000x1500",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            stock: ["36", "38", "40"],
          },
        },
        {
          id: "3",
          type: "bottom",
          name: "Test",
          vendor: "L2001",
          img: "https://via.placeholder.com/140x200",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["70", "75", "80", "85", "90", "95"],
            stock: ["70", "75", "85"],
          },
        },
        {
          id: "4",
          name: "Test",
          type: "top",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            stock: ["42", "44", "46"],
          },
        },
        {
          id: "5",
          name: "Test",
          type: "bottom",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["70", "75", "80", "85", "90", "95"],
            stock: ["70", "90"],
          },
        },
        {
          id: "6",
          name: "Test",
          type: "one",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "B", "D"],
            stock: [
              {
                size: "36",
                letter: "D",
              },
              {
                size: "42",
                letter: "A",
              },
              {
                size: "44",
                letter: "B",
              },
            ],
          },
        },
        {
          id: "7",
          name: "Test",
          type: "one",
          vendor: "L2001",
          img: "https://via.placeholder.com/150",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          recommended: "11",
          wholesale: "10",
          retail: "12",
          table: {
            sizes: ["36", "38", "40", "42", "44", "46"],
            letter: ["A", "B"],
            stock: [
              {
                size: "38",
                letter: "C",
              },
              {
                size: "42",
                letter: "C",
              },
              {
                size: "46",
                letter: "A",
              },
            ],
          },
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

    var totalSizes = [];
    for (let i = 0; i < this.mainData.length; i++) {
      if (this.mainData[i].type == "one") {
        totalSizes = totalSizes.concat(this.mainData[i].table.letter);
      }
    }
    totalSizes = [...new Set(totalSizes)];
    this.totalTableData = totalSizes.sort();
  },
  components: {
    Pagination,
    CatalogItem,
  },
};
</script>