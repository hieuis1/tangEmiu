import Table from 'react-bootstrap/Table';

function TableProduct({data}) {
    console.log(data);
  return (
    <Table className='container' striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Category</th>
          <th>Year</th>
          <th>Prince</th>
        </tr>
      </thead>
      <tbody>
       {data.map((item,index) =>{
            return(
                <tr>
                    <td>{index +1}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.year}</td>
                </tr>
            )
       })}
      </tbody>
    </Table>
  );
}

export default TableProduct;