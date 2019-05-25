<template>
  <div
    class="el-table-footer-wrapper"
    :class="[table && table.layout.scrollX ? `is-scrolling-${table.scrollPosition}` : 'is-scrolling-none', {
      'el-table-footer-wrapper--border': table && table.border
    }]"
  >
    <div
      v-if="fixedColumns.length > 0"
      class="el-table-footer-wrapper__fixed-left"
      :style="{
        width: fixedWidth
      }"
    >
      <table-footer
        :data="data"
        fixed="left"
        ref="fixedLeftFooter"
      ></table-footer>
    </div>
    <div
      class="el-table-footer"
      ref="footerWrapper"
    >
      <table-footer
        :data="data"
        ref="footer"
      ></table-footer>
    </div>
    <div
      v-if="rightFixedColumns.length > 0"
      class="el-table-footer-wrapper__fixed-right"
      :style="{
        width: rightFixedWidth,
        right: table && table.layout.scrollY ? (table.border ? table.layout.gutterWidth : (table.layout.gutterWidth || 0)) + 'px' : 0
      }"
    >
      <table-footer
        :data="data"
        fixed="right"
        ref="fixedRightFooter"
      ></table-footer>
    </div>
  </div>
</template>

<script>
import TableFooter from './table-footer'

export default {
  name: 'ElTableFooter',
  components: {
    TableFooter
  },
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      table: null
    }
  },
  methods: {
    init (tableInstance) {
      const self = this
      this.table = tableInstance

      this.table.$refs.bodyWrapper.addEventListener('scroll', function () {
        self.$refs.footerWrapper.scrollLeft = this.scrollLeft
      })

      this.$nextTick(() => {
        const {
          fixedLeftFooter,
          footer,
          fixedRightFooter
        } = this.$refs

        fixedLeftFooter && fixedLeftFooter.init()
        footer.init()
        fixedRightFooter && fixedRightFooter.init()
      })
    }
  },
  computed: {
    fixedWidth () {
      return this.table ? this.table.layout.fixedWidth + 'px' : ''
    },
    rightFixedWidth () {
      return this.table ? this.table.layout.rightFixedWidth + 'px' : ''
    },
    fixedColumns () {
      return this.table ? this.table.store.states.fixedColumns : []
    },
    rightFixedColumns () {
      return this.table ? this.table.store.states.rightFixedColumns : []
    }
  }
}
</script>

<style>
  .el-table-footer-wrapper {
    position: relative;
    overflow: hidden;
    border-left: 1px solid #EBEEF5;
  }
  .el-table-footer-wrapper.is-scrolling-none .el-table-footer-wrapper__fixed-left,
  .el-table-footer-wrapper.is-scrolling-none .el-table-footer-wrapper__fixed-right,
  .el-table-footer-wrapper.is-scrolling-left .el-table-footer-wrapper__fixed-left,
  .el-table-footer-wrapper.is-scrolling-right .el-table-footer-wrapper__fixed-right{
    box-shadow: none;
  }
  .el-table-footer-wrapper::after{
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: #EBEEF5;
  }
  .el-table-footer-wrapper td,
  .el-table-footer-wrapper th {
    padding: 8px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
    font-size: 12px;
  }
  .el-table-footer-wrapper td {
    border-bottom: 1px solid #EBEEF5;
    background-color: #F5F7FA;
    color: #606266;
  }
  .el-table-footer-wrapper td.is-right {
    text-align: right;
  }
  .el-table-footer-wrapper td.is-center {
    text-align: center;
  }
  .el-table-footer-wrapper .cell {
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
  }
  .el-table-footer-wrapper--border td {
    border-right: 1px solid #EBEEF5;
  }
  .el-table-footer-wrapper th.gutter {
    border-bottom: 1px solid #EBEEF5;
  }
  .el-table-footer {
    overflow: hidden;
  }
  .el-table-footer table,
  .el-table-footer-wrapper__fixed-left table,
  .el-table-footer-wrapper__fixed-right table {
    table-layout: fixed;
    border-collapse: separate;
  }
  .el-table-footer-wrapper__fixed-left,
  .el-table-footer-wrapper__fixed-right {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
  }
  .el-table-footer-wrapper__fixed-right {
    left: auto;
  }
  .el-table-footer-wrapper__fixed-left table,
  .el-table-footer-wrapper__fixed-right table {
    position: absolute;
    top: 0;
    left: 0;
  }
  .el-table-footer-wrapper__fixed-right table {
    left: auto;
    right: 0;
  }
</style>
