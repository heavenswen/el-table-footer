# el-table-footer

一个用来实现 el-table 包含合计与总计或者其他场景的组件

[点击查看在线demo](https://ckang1229.github.io/el-table-footer/dist/)

## Install
```shell
npm install el-table-footer -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import ElTableFooter from 'el-table-footer'

Vue.use(ElTableFooter)
```

### 基础用法
```html
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
        width="400"
        fixed>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="400">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="数值 1"
        width="400">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="数值 2"
        width="400">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3"
        width="400"
        fixed="right">
      </el-table-column>
    </el-table>
    <el-table-footer :data="footerData" ref="tableFooter"></el-table-footer>
  </div>
</template>

<script>
  export default {
    computed: {
      footerData () {
        return [this.summary1, this.summary2]
      }
    },
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
        summary1: {
          label: '合计',
          data: {
            amount1: 13414,
            amount2: 13414,
            amount3: 13414
          }
        },
        summary2: {
          label: '总计',
          data: {
            amount1: 13414,
            amount2: 13414,
            amount3: 13414
          }
        }
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
```

## API

### El-Table-Editabled Props:

属性  |  说明  |  类型  |  默认值
:-------: | -------  |  :-------:  |  :-------:
data  |  footer数据  |  Array  |  --

### El-Table-Editabled Methods:

方法  |  说明  |  参数
:-------: | -------  |  :-------:
init  |  初始化footer(必须传入表格实例)  |  Function(tableInstance)

作者wx: ckang1229

