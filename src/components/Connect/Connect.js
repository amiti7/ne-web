import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Chip from '@mui/material/Chip';


const Connect = () => {
  const [name, setname] = useState('');
  const [mobile, setMobile] = useState('');
  const [type, setType] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('Uttar Pradesh');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [mandatoryError, setMandatoryError] = useState(false);
  const [apiFail, setApiFail] = useState(false)

  const handleSendMessage = async()=>{
    setApiFail(false)
    if(!name || !mobile || !type || !city){
        setMandatoryError(true)
        return;
    }
    setMandatoryError(false)
    const data = {
        name,mobile,type,address,city,message,region
    }
    try{
        await axios.post('https://api.nirmaneasy.in/api/users-permissions/users/newUserFromWebsite',data,
       { headers: { 
            'Content-Type': 'application/json'
          },
        },)
        setSuccess(true);
        
    }catch(err){
        setApiFail(true)

    }
  }
  return (
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
      Share your details, we will contact you.
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="firstName"
          name="firstName"
          label="Full name"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          onChange={(e)=>setname(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="mobile"
          name="mobile"
          type="tel"
          label="Mobile number"
          fullWidth
          autoComplete="given-name"
          variant="standard"
          onChange={(e)=>setMobile(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">About you</InputLabel>
        <Select autoWidth native defaultValue="" id="grouped-native-select-standard" label="Grouping"
        onChange={(e)=>setType(e.target.value)}
        >
          <option aria-label="None" value="" />
          <optgroup label="Professional">
            <option value={1}>Engineer</option>
            <option value={2}>Contractor</option>
            <option value={3}>Architect</option>
            <option value={4}>Mistri</option>
          </optgroup>
          <optgroup label="Business">
            <option value={5}>Individual Shop</option>
            <option value={6}>Builder</option>
          </optgroup>
          <optgroup label="Home owner">
            <option value={7}>Home owner</option>
          </optgroup>
          <optgroup label="Other">
            <option value={7}>Other</option>
          </optgroup>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="address1"
          name="address1"
          label="Address line"
          fullWidth
          autoComplete="shipping address-line1"
          variant="standard"
          onChange={(e)=>setAddress(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          id="city"
          name="city"
          label="City"
          fullWidth
          autoComplete="shipping address-level2"
          variant="standard"
          onChange={(e)=>setCity(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="state"
          name="state"
          label="State/Province/Region"
          fullWidth
          defaultValue="Uttar Pradesh"
          variant="standard"
          onChange={(e)=>setRegion(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="notes"
          name="notes"
          label="Your comments"
          fullWidth
          multiline
          autoComplete="shipping address-line1"
          rows={4}
          variant="filled"
          onChange={(e)=>setMessage(e.target.value)}
        />
      </Grid>
    </Grid>
    <div style={{marginTop:'2em'}}>
    <Button onClick={handleSendMessage} variant="contained" endIcon={<SendIcon />}>Send</Button>
    {success?<span style={{margin:'0 2em'}}>
    <Chip label="Message sent. We will connect back shortly." color="success" />
    </span>:null}
    {mandatoryError?<span style={{margin:'0 2em'}}>
    <Chip label="Please fill all mandatory fields." color="error" />
    </span>:null}
    {apiFail?<span style={{margin:'0 2em'}}>
    <Chip label="Something went wrong. Please try after sometime" color="error" />
    </span>:null}
    
    </div>
    <div>
    
    </div>
  </React.Fragment>
  )
}

export default Connect

