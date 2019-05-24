<template>
  <table
    cellspacing="0"
    cellpadding="0"
    border="0"
    :style="{
      width: bodyWidth
    }"
  >
    <colgroup>
      <col v-for="column in columns" :key="column.id" :name="column.id" />
      <col v-if="hasGutter" name="gutter" />
    </colgroup>
    <tbody :class="{ 'has-gutter': this.hasGutter }">
    <tr v-for="(row, rowIndex) in data" :key="rowIndex">
      <td
        v-for="(column, cellIndex) in columns"
        :key="column.id"
        :class="getRowClasses(column, cellIndex)"
      >
        <div :class="['cell', column.labelClassName]">
          {{cellIndex === 0 ? row.label : row.data[column.property]}}
        </div>
      </td>
      <th v-if="hasGutter" class="gutter"></th>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { Table } from 'element-ui'
import LayoutObserver from 'element-ui/packages/table/src/layout-observer'

export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    },
    fixed: String
  },
  destroyed () {
    this.tableLayout.removeObserver(this)
  },
  methods: {
    init () {
      this.tableLayout.addObserver(this)
    },
    ...LayoutObserver.methods,
    ...Table.components.TableFooter.methods
  },
  computed: {
    table () {
      return this.$parent.table
    },
    columns () {
      return (this.table && this.table.store.states.columns) || []
    },
    tableLayout () {
      return (this.table && this.table.layout) || {}
    },
    hasGutter () {
      return !this.fixed && this.tableLayout.gutterWidth
    },
    bodyWidth () {
      return this.table && this.table.layout.bodyWidth + 'px'
    }
  }
}
</script>
