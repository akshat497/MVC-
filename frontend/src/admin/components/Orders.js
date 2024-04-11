// import React, { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { FetchOrder } from "../../services/services";
// export const Orders = () => {
//   const [data, setData] = useState([]);
//   const fetchData = async () => {
//     const resp = await FetchOrder();
   
//     setData(resp.data);
//   };
//   useEffect(() => {
//     fetchData();
//   }, []);
  
//   const columns = [
//     {
//       name: "Customer name",
//       selector: (row) => row.name,
//     },
//     {
//       name: "Phone",
//       selector: (row) => row.phone,
//     },
//     {
//       name: "Email",
//       selector: (row) => row.email,
//     },
//     {
//       name: "Status",
//       selector: (row) => (row?.orders?.isActive === true ? "New" : "completed"),
//     },
//   ];
//   //   const data = [
//   //     {
//   //       id: 1,
//   //       title: "Beetlejuice",
//   //       year: "1988",
//   //     },
//   //     {
//   //       id: 2,
//   //       title: "Ghostbusters",
//   //       year: "1984",
//   //     },
//   //   ];
//   const expandableRowsComponent = ({ data }) => {
//     const itemColumns = [
//       {
//         name: "Product ID",
//         selector: (row) => row.productId,
//       },
//       {
//         name: "Quantity",
//         selector: (row) => row.quantity,
//       },
//     ];
//   console.log(data.orders[0].items)
//     return (
//       <DataTable
//         columns={itemColumns}
//         data={data.orders[0].items}
//         highlightOnHover
//         pagination
//       />
//     );
//   };
  
  
  
//   return (
//     <div className="content" style={{ marginLeft: "20%" }}>
//       <DataTable 
//       columns={columns} 
//       data={data} 
//       highlightOnHover
//        pagination
//        expandableRows
//        expandableRowsComponent={expandableRowsComponent}
//         />
//     </div>
//   );
// };
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { FetchOrder } from '../../services/services';

export const Orders = () => {
    const [data, setData] = useState([]);
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Email',
            selector: row => row.email,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
        },
        {
            name: 'Status',
            selector: (row) => row.orders[0].isActive===true?<p>active</p>:<p>inActive</p>,
        },
    ];
//     const data = [
//         {
//           id: 1,
//           title: 'Beetlejuice',
//           year: '1988',
//       },
//       {
//           id: 2,
//           title: 'Ghostbusters',
//           year: '1984',
//       },
//   ]

const ExpandedComponent=({data})=>{
    // console.log("data",data.data.orders[0].items)
    const columns = [
        {
            name: 'productId',
            selector: row => row.productId,
        },
        {
            name: 'quantity',
            selector: row => row.quantity,
        },
       
    ];
    return (<>
        <DataTable
            columns={columns}
            data={data.orders[0].items}
        />
    </>)
}
const fetchData=async()=>{
    debugger;
    const response=await FetchOrder()
    if(response.success===true){
        setData(response.data)
    }
}
useEffect(()=>{
    fetchData()
},[])
  return (
   <>
   <div className='content'>
   <DataTable
			columns={columns}
			data={data}
            pagination
            selectableRows
            highlightOnHover
            expandableRows
            expandableRowsComponent={ExpandedComponent}
		/>
   </div>
   </>
  )
}
