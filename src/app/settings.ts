export const settings = {
  pagination: true,
  enableSorting: true,
  enableFilter: true,
  enableColResize: true,
  rowHeight: 50,
  enableRangeSelection: true,
  statusBar:  {
    statusPanels: [
      { statusPanel: 'statusBarComponent', align: 'center' },
      { statusPanel: 'agTotalRowCountComponent', align: 'left', key: 'statusBarCompKeyRowCount' }, // Total row count,
      { statusPanel: 'agFilteredRowCountComponent' }, // Count after filtering
      { statusPanel: 'agSelectedRowCountComponent' }, // Selected row count
      {
        statusPanel: 'agAggregationComponent', // Summary information Average, Count, Min, Max and Sum
        key: 'statusBarCompKey',
        statusPanelParams: {
          aggFuncs: ['sum', 'count', 'min', 'max', 'avg']
        }
      }
    ]
  },
  columnDefs : [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' }
      ],
      rowData :[
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 }
    ],
   defaultColDef: {
    enableValue: true,
    sortable:true,
    enableRowGroup: true,
    enablePivot: true,
    rowSelection: 'multiple',
    groupSelectsChildren: true,
    // editable: true
  }
};
