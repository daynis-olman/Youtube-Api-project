<template>
  <div class="wrapper" :class="{'menu-active': isActive == true }">
    <SideNavigationBar></SideNavigationBar>
    <DashboardContent></DashboardContent>
  </div>
</template>
  
<script>
import DashboardContent from './DashboardContent.vue'
import SideNavigationBar from './SideNavigationBar.vue'
import { EventBus } from '../event-bus.js'
export default {
  data: function () {
    return { isActive: false }
  },
  methods: {
    changeIsActiveFlag () {
      this.isActive = !this.isActive
    }
  },
  components: {
    'SideNavigationBar': SideNavigationBar,
    'DashboardContent': DashboardContent
  },
  mounted () {
    let self = this
    EventBus.$on('id-selected', function (id) {
      self.changeIsActiveFlag()
    })
  }
}
</script>

