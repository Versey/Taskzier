import './MyCard.css'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const MyCard = props=>
{

    return(
        <Card className="card" variant="elevated">
            <div className= "card-header">
                <h3> {props.title}</h3>
            </div>
            <CardContent>
                <div className="card-description">
                    <h4> Description: </h4> 
                </div> 
                <div className="card-content">
                    {props.content}
                </div> 
            </CardContent>
            <div className="card-points">
                {"+"+props.points}
            </div>
            <CardActions>

            <ButtonGroup variant="contained" color="primary" aria-label="text primary button group">

                <Button size="Large" color="secondary" >
                Delete
                </Button>
                <Button size="Large" color="primary">
                Edit
                </Button>
                <Button size="Large" color="default">
                Fufill
                </Button>
            </ButtonGroup>

      </CardActions>

        </Card>

    );
}

export default MyCard;