<template>
  <div class="userList">
    <h4 class="mt-0 headerTitle">{{Page}}</h4>
    <div class="card">
      <div class="card-body">
        <div class="table-rep-plugin">
          <div class="table-responsive mb-0">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <TableHead v-for="thead in tableHead" :key="thead.id" :thead="thead" />
                </tr>
                <tr>
                  <TableFilter v-for="thead in tableHead" :key="thead.id" :thead="thead" />
                </tr>
              </thead>
              <tbody>
                <User
                  v-for="user in showedTableData"
                  :key="user.id"
                  :user="user"
                  @changedStatus="changeStatus($event)"
                />
              </tbody>
            </table>
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
import User from "./User";
import TableHead from "./TableHead";
import TableFilter from "./TableFilter";
import Pagination from "./../../shared/Pagination";
export default {
  data() {
    return {
      Page: "List of users",

      tableHead: [
        {
          id: "1",
          text: "Registration date",
          hasSearch: true,
        },
        {
          id: "2",
          text: "Fullname",
          hasSearch: false,
        },
        {
          id: "3",
          text: "Company",
          hasSearch: false,
        },
        {
          id: "4",
          text: "TIN",
          hasSearch: false,
        },
        {
          id: "5",
          text: "Phone",
          hasSearch: false,
        },
        {
          id: "6",
          text: "Email",
          hasSearch: false,
        },
        {
          id: "7",
          text: "Country",
          hasSearch: false,
        },
        {
          id: "8",
          text: "City",
          hasSearch: false,
        },
        {
          id: "9",
          text: "ZIP code",
          hasSearch: false,
        },
        {
          id: "10",
          text: "Legal address",
          hasSearch: false,
        },
        {
          id: "11",
          text: "Active address",
          hasSearch: false,
        },
        {
          id: "12",
          text: "Status",
          hasSearch: false,
        },
        {
          id: "13",
          text: "Active orders",
          hasSearch: false,
        },
        {
          id: "14",
          text: "Last change",
          hasSearch: true,
        },
        {
          id: "15",
          text: "Manager",
          hasSearch: false,
        },
        {
          id: "16",
          text: "Activate",
          hasSearch: false,
        },
        {
          id: "17",
          text: "Edit",
          hasSearch: false,
        },
        {
          id: "18",
          text: "Registration type",
          hasSearch: false,
        },
      ],
      tableData: [
        {
          id: "1",
          regDate: "10.01.2020",
          fullname: "John",
          company: "A org",
          tin: "956",
          phone: "9876543",
          email: "a@mail.ru",
          country: "test q",
          city: "test q",
          zip: "test q",
          address: "test q",
          activeAddress: "test q",
          status: "active",
          activeOrders: "yes",
          lastChange: "10.02.2020",
          manager: "test q",
          activate: "test q",
          edit: "test q",
          type: "test q",
        },
        {
          id: "2",
          regDate: "11.05.2020",
          fullname: "Anthon",
          company: "E org",
          tin: "764",
          phone: "5876543",
          email: "b@mail.ru",
          country: "test t",
          city: "test t",
          zip: "test t",
          address: "test t",
          activeAddress: "test t",
          status: "archive",
          activeOrders: "yes",
          lastChange: "10.04.2020",
          manager: "test b",
          activate: "test b",
          edit: "test b",
          type: "test b",
        },
        {
          id: "3",
          regDate: "11.05.2020",
          fullname: "Ali",
          company: "C org",
          tin: "999",
          phone: "998877",
          email: "t@mail.ru",
          country: "test w",
          city: "test w",
          zip: "test w",
          address: "test o",
          activeAddress: "test o",
          status: "isNotActive",
          activeOrders: "no",
          lastChange: "04.12.2019",
          manager: "test c",
          activate: "test s",
          edit: "test q",
          type: "test t",
        },
        {
          id: "4",
          regDate: "10.01.2020",
          fullname: "John",
          company: "A org",
          tin: "956",
          phone: "9876543",
          email: "a@mail.ru",
          country: "test q",
          city: "test q",
          zip: "test q",
          address: "test q",
          activeAddress: "test q",
          status: "active",
          activeOrders: "yes",
          lastChange: "10.02.2020",
          manager: "test q",
          activate: "test q",
          edit: "test q",
          type: "test q",
        },
        {
          id: "5",
          regDate: "11.05.2020",
          fullname: "Anthon",
          company: "E org",
          tin: "764",
          phone: "5876543",
          email: "b@mail.ru",
          country: "test t",
          city: "test t",
          zip: "test t",
          address: "test t",
          activeAddress: "test t",
          status: "active",
          activeOrders: "yes",
          lastChange: "10.04.2020",
          manager: "test b",
          activate: "test b",
          edit: "test b",
          type: "test b",
        },
        {
          id: "6",
          regDate: "11.05.2020",
          fullname: "Ali",
          company: "C org",
          tin: "999",
          phone: "998877",
          email: "t@mail.ru",
          country: "test w",
          city: "test w",
          zip: "test w",
          address: "test o",
          activeAddress: "test o",
          status: "isNotActive",
          activeOrders: "no",
          lastChange: "04.12.2019",
          manager: "test c",
          activate: "test s",
          edit: "test q",
          type: "test t",
        },
      ],
      dataPerPage: 5,
      currentPage: 1,
      showedTableData: [],
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
    changeStatus(e) {
      console.log(e);
      this.tableData.filter((x) => {
        if (x.id == e.id) {
          x.status = e.status;
        }
      });
    },
  },
  computed: {
    pageCount() {
      let count = Math.ceil(this.tableData.length / this.dataPerPage);
      return count;
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
  },
  components: {
    User,
    Pagination,
    TableHead,
    TableFilter,
  },
};
</script>