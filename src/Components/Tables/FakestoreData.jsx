import Table from 'react-bootstrap/Table';

function CustomTable(props) {
    const{title,text,image,price}=props
  return (
    <Table striped bordered hover>
      
        <tr>
          <td>{title}</td>
          <td>{text}</td>
          <td>{price}</td>
          <td>{image}</td>
        </tr>
      
      
    </Table>
  );
}

export default CustomTable;