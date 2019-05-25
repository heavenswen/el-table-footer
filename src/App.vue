<template>
  <div>
    <el-table
      :data="tableData"
      border
      ref="table"
    >
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="数值 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="数值 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3">
      </el-table-column>
    </el-table>
    <el-table-footer :data="footerData" ref="tableFooter"></el-table-footer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }],
        footerData: [{
          label: '合计',
          data: {
            amount1: 13414,
            amount2: 13414,
            amount3: 13414
          }
        }, {
          label: '总计',
          data: {
            amount1: 13414,
            amount2: 13414,
            amount3: 13414
          }
        }]
      }
    },
    mounted () {
      const {
        tableFooter,
        table
      } = this.$refs

      // 调用init方法传入表格实例初始化footer
      tableFooter.init(table)
    }
  }
</script>
