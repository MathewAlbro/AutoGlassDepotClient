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

export default function PartnerForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
        <div>
        <TextField
          required
          id="filled-required"
          label="Insurance Company"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        

<TextField
          required
          id="filled-required"
          label="Agency Name"
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
          label="Policyholder"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        
        <TextField
          id="filled"
          label="Policy Number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        </div>
        <div>
        <TextField
          id="filled-number"
          label="Date of Loss"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Policyholder Phone"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <div>
        <TextField
          id="filled-number"
          label="Policyholder Home Zip Code"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

<TextField
          id="filled-number"
          label="Deductible"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

<TextField
          id="filled-number"
          label="Year/Make/Model"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

<TextField
          id="filled-number"
          label="Full VIN #"
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
