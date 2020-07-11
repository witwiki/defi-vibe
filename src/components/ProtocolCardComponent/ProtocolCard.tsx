import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IProtocolCardProps {
  ImageUrl: string | undefined;   // Asset Logo
  AssetName: string | undefined;  
  RoiValue: number | undefined;   //  APR for borrow; APY for lend in percentage
  DailyDelta: number | undefined; //  Daily Change in percentage

}

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight: 345
  },
});

export default function ProtocolCard(props: IProtocolCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          // image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <br/>
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {props.AssetName}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            {props.RoiValue} % APR
          </Typography>
          <br/>
          <Typography variant="h5" color="textSecondary" component="p">
            {props.DailyDelta}% (24hr)
          </Typography>          
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
