import Nav from "react-bootstrap/Nav";

function CustomNav(props) {
    const{...data}=props
    // console.log(data)
  return (
    <Nav>
      {data.map((each) => {
        return (
            <>
            
            <Nav.Item>
            <Nav.Link eventKey="link-1">{each}</Nav.Link>
          </Nav.Item>
        </>
        )
          
      })
    }
    </Nav>
  );
}

export default CustomNav;
