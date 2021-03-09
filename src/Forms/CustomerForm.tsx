import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
        <div>
        <TextField
          required
          id="filled-required"
          label="First Name"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        

<TextField
          required
          id="filled-required"
          label="Last Name"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        </div>
        <div>
        <TextField
          required
          id="filled-required"
          label="Phone"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        
        <TextField
          id="filled"
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        </div>
        <div>
        <TextField
          id="filled-number"
          label="Vehicle Make"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Vehicle Model"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <div>
        <TextField
          id="filled-number"
          label="Year"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

<TextField
          id="filled-number"
          label="Insurance"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        </div>
        </div>
      </div>
      
    </form>
  );
}
