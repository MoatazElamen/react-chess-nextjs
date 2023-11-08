import { useState } from 'react';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Dialog,
  FormControlLabel,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Slide
} from '@mui/material/';
import CloseIcon from '@mui/icons-material/Close';
import * as nav from 'features/nav/navSlice';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PricingDialog = () => {
  const state = useSelector(state => state.nav);

  const [newsletterRequest, setNewsletterRequest] = useState(true);

  const [managerRequest, setManagerRequest] = useState(true);

  const [sponsorRequest, setSponsorRequest] = useState(true);

  const dispatch = useDispatch();

  return (
    <Dialog
      fullScreen
      open={state.dialogs.pricing.open}
      onClose={() => dispatch(nav.pricingDialog({ open: false }))}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => dispatch(nav.pricingDialog({ open: false }))}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Pricing
          </Typography>
          <Button autoFocus color="inherit" onClick={() => dispatch(nav.pricingDialog({ open: false }))}>
            Close
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} sx={{ p: 3 }}>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', mt: 2 }} variant="h4" align="center">
            Subscription Plans
          </Typography>
          <Typography variant="h6" align="center">
            Choose a monthly plan
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#ffeddb' }}>
            <CardContent>
              <Typography sx={{ color: '#d18b47', fontWeight: 'bold' }} variant="h5" component="div" align="center" gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center" gutterBottom>
                Subscribe to the newsletter and get exclusive content! Don't be
                shy, and ask questions. Be the first to know about updates while
                supporting ChesslaBlab open source repos.
              </Typography>
              <Typography sx={{ m: 3 }} variant="h4" component="div" align="center">
                €15 <Chip label="Month" />
              </Typography>
              <FormControlLabel
                control={<Checkbox onClick={() => setNewsletterRequest(!newsletterRequest)} />}
                label="I have read the privacy policy and agree to be kept up to date with this promotion."
                componentsProps={{ typography: { variant: 'body2' } }}
              />
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                href={`mailto:${process.env.REACT_APP_LEGAL_INFO_EMAIL}?subject=Newsletter subscription request`}
                disabled={newsletterRequest}
              >
                Request Info
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#ffe9d2' }}>
            <CardContent>
              <Typography sx={{ color: '#d18b47', fontWeight: 'bold' }} variant="h5" component="div" align="center" gutterBottom>
                Manager
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center" gutterBottom>
                Aimed at chess companies and entrepreneurial individuals taking
                on open source business opportunities in the online chess industry.
              </Typography>
              <Typography sx={{ m: 3 }} variant="h4" component="div" align="center">
                €295 <Chip label="Month" />
              </Typography>
              <FormControlLabel
                control={<Checkbox onClick={() => setManagerRequest(!managerRequest)} />}
                label="I have read the privacy policy and agree to be kept up to date with this promotion."
                componentsProps={{ typography: { variant: 'body2' } }}
              />
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                href={`mailto:${process.env.REACT_APP_LEGAL_INFO_EMAIL}?subject=Manager subscription request`}
                disabled={managerRequest}
              >
                Request Info
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: '#ffe4ca' }}>
            <CardContent>
              <Typography sx={{ color: '#d18b47', fontWeight: 'bold' }} variant="h5" component="div" align="center" gutterBottom>
                Sponsor
              </Typography>
              <Typography variant="body1" color="text.secondary" align="center" gutterBottom>
                Display your logo on this website as well as in the GitHub
                repos while supporting open source chess. Shout-out on social
                media recognizing your sponsorship.
              </Typography>
              <Typography sx={{ m: 3 }} variant="h4" component="div" align="center">
                €495 <Chip label="Month" />
              </Typography>
              <FormControlLabel
                control={<Checkbox onClick={() => setSponsorRequest(!sponsorRequest)} />}
                label="I have read the privacy policy and agree to be kept up to date with this promotion."
                componentsProps={{ typography: { variant: 'body2' } }}
              />
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                href={`mailto:${process.env.REACT_APP_LEGAL_INFO_EMAIL}?subject=Sponsor subscription request`}
                disabled={sponsorRequest}
              >
                Request Info
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default PricingDialog;