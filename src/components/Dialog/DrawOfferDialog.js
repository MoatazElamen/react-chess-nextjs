import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Wording from "../../utils/Wording.js";
import { useDispatch, useSelector } from "react-redux";
import { wsMssgDraw } from "../../actions/serverActions";
import drawOfferDialogActionTypes from "../../constants/dialog/drawOfferDialogActionTypes";
import modeActionTypes from "../../constants/modeActionTypes";

const DrawOfferDialog = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDrawOffer = (event) => {
    event.preventDefault();
    wsMssgDraw(state, Wording.verb.PROPOSE.toLowerCase()).then((data) => {
      dispatch({ type: modeActionTypes.DRAW_PROPOSE });
      dispatch({ type: drawOfferDialogActionTypes.CLOSE });
    });
  };

  return (
    <Dialog open={state.drawOfferDialog.open} maxWidth="sm" fullWidth={true}>
      <DialogTitle>Offer draw</DialogTitle>
      <DialogContent>
        <form onSubmit={handleDrawOffer}>
          <DialogActions>
            <Button type="submit">Accept</Button>
            <Button
              onClick={() =>
                dispatch({ type: drawOfferDialogActionTypes.CLOSE })
              }
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DrawOfferDialog;
