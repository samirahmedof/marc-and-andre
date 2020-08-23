<template>
  <div class="userProfile">
    <div class="row justify-content-center">
      <div class="col-12">
        <h4 class="mt-0 headerTitle">{{Page}}</h4>
      </div>
      <div class="col-6">
        <transition
          enter-active-class="animate__animated animate__fadeInLeft animate__faster"
          leave-active-class="animate__animated animate__fadeOutRight animate__faster"
          mode="out-in"
        >
          <div class="about" v-if="!changePassword" key="about">
            <table class="table mb-3">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>
                    <input type="text" class="form-control" :value="users[currentUser-1].name" />
                  </td>
                </tr>
                <tr>
                  <td>Surname</td>
                  <td>
                    <input type="text" class="form-control" :value="users[currentUser-1].surname" />
                  </td>
                </tr>
                <tr>
                  <td>Patronomic</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      :value="users[currentUser-1].patronomic"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <input type="text" class="form-control" :value="users[currentUser-1].email" />
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>
                    <input type="text" class="form-control" :value="users[currentUser-1].phone" />
                  </td>
                </tr>
                <tr>
                  <td>Organisation</td>
                  <td>
                    <input type="text" class="form-control" :value="users[currentUser-1].org" />
                  </td>
                </tr>
                <tr>
                  <td>TIN</td>
                  <td>
                    <input type="text" class="form-control" :value="users[currentUser-1].tin" />
                  </td>
                </tr>
                <tr>
                  <td>Legal address</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      :value="users[currentUser-1].legalAddress"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Actual address</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      :value="users[currentUser-1].actualAddress"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>
                    <input type="text" class="form-control" :value="users[currentUser-1].country" />
                  </td>
                </tr>
                <tr>
                  <td>City</td>
                  <td>
                    <input type="text" class="form-control" :value="users[currentUser-1].city" />
                  </td>
                </tr>
                <Shipping
                  v-for="(address,index) in users[currentUser-1].shipping"
                  :key="index"
                  :address="address"
                  :index="index"
                />
              </tbody>
            </table>
            <div class="changePassBtn text-center">
              <button class="btn btn-pr">Save</button>
            </div>
          </div>
        
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import Shipping from "./Shipping";
export default {
  data() {
    return {
      Page: "User profile",
      showAlerts: false,
      changePassword: false,
      restore: {
        email: null,
        pass1: null,
        pass2: null,
      },
      users: [
        {
          id: "1",
          name: "name 1",
          surname: "surname 1",
          patronomic: "patr 1",
          email: "email 1",
          phone: "phone 1",
          org: "org 1",
          tin: "tin 1",
          legalAddress: "l.a 1",
          actualAddress: "a.a 1",
          country: "country 1",
          city: "city 1",
          shipping: ["shipping 1-1", "shipping 1-2", "shipping 1-3"],
        },
        {
          id: "2",
          name: "name 2",
          surname: "surname 2",
          patronomic: "patr 2",
          email: "email 2",
          phone: "phone 2",
          org: "org 2",
          tin: "tin 2",
          legalAddress: "l.a 2",
          actualAddress: "a.a 2",
          country: "country 2",
          city: "city 2",
          shipping: ["shipping 2-1", "shipping 2-2", "shipping 2-3"],
        },
        {
          id: "3",
          name: "name 3",
          surname: "surname 3",
          patronomic: "patr 3",
          email: "email 3",
          phone: "phone 3",
          org: "org 3",
          tin: "tin 3",
          legalAddress: "l.a 3",
          actualAddress: "a.a 3",
          country: "country 3",
          city: "city 3",
          shipping: ["shipping 3-1", "shipping 3-2", "shipping 3-3"],
        },
        {
          id: "4",
          name: "name 4",
          surname: "surname 4",
          patronomic: "patr 4",
          email: "email 4",
          phone: "phone 4",
          org: "org 4",
          tin: "tin 4",
          legalAddress: "l.a 4",
          actualAddress: "a.a 4",
          country: "country 4",
          city: "city 4",
          shipping: ["shipping 4-1", "shipping 4-2", "shipping 4-3"],
        },
        {
          id: "5",
          name: "name 5",
          surname: "surname 5",
          patronomic: "patr 5",
          email: "email 5",
          phone: "phone 5",
          org: "org 5",
          tin: "tin 5",
          legalAddress: "l.a 5",
          actualAddress: "a.a 5",
          country: "country 5",
          city: "city 5",
          shipping: ["shipping 5-1", "shipping 5-2", "shipping 5-3"],
        },
      ],
      currentUser: this.$route.params.id,
    };
  },
 
  components: {
    Shipping,
  },
};
</script>