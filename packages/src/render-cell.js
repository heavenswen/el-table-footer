export default {
  functional: true,
  render (h, { props: {row, column: { property, labelClassName }, cellIndex, cell}}) {
    const cellValue = (row.data || [])[property]
    const cellTag = 'div'
    const cellProps = {
      class: [labelClassName],
      staticClass: 'cell'
    }
    console.log(row)

    if (cellIndex === 0) {
      return h(cellTag, cellProps, [row.label])
    } else if (cell) {
      return h(cellTag, cellProps, [cell({row})])
    } else {
      return h(cellTag, cellProps, [cellValue])
    }
  }
}