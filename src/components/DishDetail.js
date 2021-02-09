import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
  } from 'reactstrap';
const DishDetail = props => {
    const dish = props.dish;
    const renderComments = dish => {
        if (dish.comments != null) {
            return (
                <ul className="list-unstyled">
                    {dish.comments.map(item => {
                        const options = { year: "numeric", month: "long", day: "numeric" };
                        const date = new Date(item.date).toLocaleDateString(undefined, options);
                        return (
                            <li key={item.id}>
                                <p>{item.comment}</p>
                                <p>-- {item.author} {date}</p>
                            </li>
                        )
                    })}
                </ul>
            );
        } else {

        }
    };
    if (dish != null) {
        return (
            <>
                <div className="col-12 col-md-5 m-md-1">
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
                </div>
                <div className="col-12 col-md-5 m-md-1">
                    <h4>Comments</h4>
                    {renderComments(dish)}
                </div>
            </>
        )
    } else {
        return (
            <div></div>
        );
    }
};
export default DishDetail;