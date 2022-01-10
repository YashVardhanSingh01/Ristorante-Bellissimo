import React, {Component} from 'react';
import { Card, CardImg,  CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    renderDish(selectedDish){
        if(selectedDish!=null)
            return(
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                      <CardTitle>{selectedDish.name}</CardTitle>
                      <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(comments){
        if(comments!=null)
        {
            const reviews = comments.map((dish) => {
            return (
                    <li key={dish.id}>
                        {dish.comment}
                        <br/>
                        --{dish.author}, {(dish.date.substr(0,10))}
                        <br/><br/>
                    </li>
                );
            });
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                    {reviews}
                </ul>
            </div>
            )}  
        else
            return(
            <div></div>
            )
    }
    render() { 
        const dish= this.props.selectedDish
        if(dish!=null)
        return ( 
        <div className='row'>
            <div className='col-12 col-md-5 m-1'>
                {this.renderDish(dish)}
            </div>
            <div className='col-12 col-md-5 m-1'>
                {this.renderComments(dish.comments)}
            </div>
        </div>  
        );
        else
        return(
        <div></div>)
        ;
    }
}
 
export default DishDetail;