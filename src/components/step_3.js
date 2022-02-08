import React, { useState, useEffect } from 'react';

//FOR API
import axios from "axios";

//FOR UI

import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function Step3({ nomographic, setNomographic, shape, setProperty }) {

  const handleChange = (event, value) => {
    setNomographic(value);
  };

  const changeProperty = () => {
    setProperty({
      shape,
      nomographic,
    });
  };

  return (
    <Container className="Step3">
      <h3>3. Create Nomographic</h3>
      <FormControl component="fieldset">
        <RadioGroup
          row aria-label="gender" name="row-radio-buttons-group" align="center"
          value={nomographic}
          onChange={handleChange}
        >
          <FormControlLabel value="0" control={<Radio />} label="ALLOW VERTICAL" />
          <FormControlLabel value="90" control={<Radio />} label="REPEAT WORDS" />
        </RadioGroup>
        <Button variant="contained" onClick={changeProperty}>Create</Button>
      </FormControl>
    </Container>
  );
}

export default Step3;
