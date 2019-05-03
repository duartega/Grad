
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    width: "100%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="divColor">
      <div >
      <br />
        <Card className={classes.card}  >
          <CardContent>
            <Typography align="center" variant="h5" component="h1">
              What time is commencement?
        </Typography>

            <Typography align="center" component="p"> <br />
              Commencement starts at 1pm.
          <br />
              {'"THIS IS THE MOST ANTICIPATED EVENT OF THE YEAR. YOU BETTER NOT BE LATE - NY Times Magazine"'}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <br />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              Where is the entrance?
                </Typography>

            <Typography align="center" component="p"> <br />
              If you do not have a ticket, the entrance will be labeled as "Entry Outdoor". Look at the map of the GMC (under the parking tab) to find out where you are supposed to go.
                <br />
              {"Only two people have tickets. AKA mom and dad"}
              <br />

              <video width="100%" loop controls>
                <source src="https://y.yarn.co/b95a56e1-efa3-4c85-8fa9-6961f0ba870c.mp4?1556358525861" type="video/mp4" />
                Your browser does not support HTML5 video.
                </video>

            </Typography>
          </CardContent>
        </Card>
      </div>

      <br />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              Where do I sit?
                </Typography>

            <Typography align="center" component="p"> <br />
              You will be out on the lawn where it is open seating. If you would like to bring a camping chair or blanket, feel free to take bring one.
                <br />
              {'"Whatever floats your goat"'}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <br />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              Will I be able to see you?
                </Typography>

            <Typography align="center" component="p"> <br />
              There will be a megatron screen outdoor so you will be able to see me from any spot you wish to pick.
                <br />
              <img width="100%" src={require("./Pictures/gmc.PNG")} />
            </Typography>
          </CardContent>
        </Card>
      </div>

      <br />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              What time will commencement end?
                </Typography>

            <Typography align="center" component="p"> <br />
              Commencement will end around 3pm.
                <br />
              {'"Finally right? All these other people made us tired having to wait for you"'}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <br />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              What time is dinner?
                </Typography>

            <Typography align="center" component="p"> <br />
              Dinner will be at 6pm. The address and directions will be in the directions tab at the top of this page.
                <br />
              {'"I know you are starving. But more importantly, so am I. I starved myself so I can pigout later"'}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <br />
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography align="center" variant="h5" component="h2">
              Okay, so you are finished graduating at 3pm. Dinner isn't until 6pm. What gives?
                </Typography>

            <Typography align="center" component="p"> <br />
              Right after graduation, I plan to say hi to everyone and receive the proper thanks I deserve lol. (I am writing this website at 3am, so I am sleep deprived).
              I do not have specific plans but some people have asked to be shown around campus if anyone wants to join. Feel free to go back
               to your hotel and rest since some of you are driving up the day of.
                <br />
              {'"Dont be an old fart. Come join us in walking around campus"'}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <br />

    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);

