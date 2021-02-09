import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from 'reactstrap';
import DishDetail from './DishDetail';
const Menu = props => {
  const [state, setState] = useState({
    selectedDish: null,
  });
  const onDishSelect = dish => {
    setState({selectedDish: dish});
  };
  const menu = props.dishes.map(dish => (
    <div key={dish.id} className="col-12 col-md-5 mb-1 m-md-1">
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
    <div className="row">
        <DishDetail dish={state.selectedDish} />
    </div>
  </div>    
  );
};
export default Menu;
