import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import PartnerForm from "../Forms/PartnerForm";
import "./../CSS/ContactComp.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

type AcceptedProps = {};

type ContactCompState = {};

export default class PartnerComp extends Component<
  AcceptedProps,
  ContactCompState
> {
  constructor(props: AcceptedProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ContactComp">
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={6}>
          <Card className={"FormCard"}>

              <PartnerForm />

              <h1>Submit a Claim</h1>
          </Card>
          </Grid>

          <Grid item xs={6}>

          {/* <Card className={"FormCard"}>
            <Paper>
              Locally owned 
            </Paper>
              

            
          </Card> */}

          <div>Locally owned
          other info
          some things in addition
          </div>
          <div>
          Phone Number Large
          </div>
          
          <div>Send a text or whatever</div>

          </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
