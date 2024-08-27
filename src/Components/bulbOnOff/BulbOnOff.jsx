import { Component } from "react";
// import CustomCard from "../Cards/Card";
import Card from "react-bootstrap/Card";
import image1 from "../../assets/bulbOn.jpg";
import image from "../../assets/bulbOff.jpg";

class Bulb extends Component {
  state = {
    bulb: [ {imge:image,status:"OFF"} ],
    bulbonoff:[],
    
  };
  addBulb = () => {
    let newAdd = {imge:image,status:"OFF"};
    this.setState({
      bulb: [...this.state.bulb, newAdd],
    });
  };
  handleBulb=(x,index)=>{
    // console.log(index)
    if(x==image){
        this.setState({
            
            bulb:this.state.bulb.map((a,b)=>{
                if(b==index){
                    a.imge=image1
                    a.status="ON"
                    return a
                }
                else{
                    // a=image
                    return a
                }
            })
        })
    }
    else{
        this.setState({
           
            bulb:this.state.bulb.map((a,b)=>{
                if(b==index){
                    a.imge=image
                    a.status="OFF"
                    return a
                }
                else{
                    
                    return a
                }
            })
        })
    }
  }
  render() {
    return (
      <>
        <button onClick={this.addBulb}>Add Bulb</button>
        <p>Number of Bulbs {this.state.bulb.length}</p>
        <div style={{ display: "flex", gap: "10px" ,flexWrap:"wrap"}}>
          {this.state.bulb.map((each,ind) => {
            return(
            <Card key={ind} style={{ width: "18rem", height: "500px" }}>
              <Card.Img onClick={()=>this.handleBulb(each.imge,ind)}
                variant="top"
                src={each.imge}
                style={{ height: "100%", width: "100%",  }}
              />
              <Card.Body>
                {/* <Card.Title>{title}</Card.Title> */}
                <Card.Text style={{textAlign:"center"}}>
                  {each.status}
                  {/* <p>Price:{price}</p> */}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            )
          })}
        </div>
      </>
    );
  }
}
export default Bulb;
