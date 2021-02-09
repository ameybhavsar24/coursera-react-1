import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from 'reactstrap';

const Menu = props => {
  const [state, setState] = useState({
    selectedDish: null,
  });
  const onDishSelect = dish => {
    setState({selectedDish: dish});
  };
  const renderDish = dish => {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              {dish.name}
            </CardTitle>
            <CardText>
              {dish.description}
            </CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <div></div>
      );
    }
  };
  
  const menu = props.dishes.map(dish => (
    <div key={dish.id} className="col-11 col-md-4 m-1">
       <Card onClick={() => onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    </div>
  ));
  return (
  <div className="container">
    <div className="row">
        {menu}
    </div>
    <div className="row justify-content-center">
      <div className="col-12 col-md-6">
        {renderDish(state.selectedDish)}
      </div>
    </div>
  </div>    
  );
};
export default Menu;
