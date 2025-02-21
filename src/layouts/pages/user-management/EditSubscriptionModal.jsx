import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

function EditSubscriptionModal({ open, handleClose, user }) {
  const [loading, setLoading] = useState(false);

  const handleSubscriptionAction = async (action) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/payment/subscriptions/manage`,
        { subscriptionId: user.subscriptions[0].id, action },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      );
      console.log(res);
      Swal.fire("Success", `Subscription ${action} successfully`, "success");
      handleClose();
    } catch (error) {
      console.log(error);
      Swal.fire("Error", `Failed to ${action} subscription`, "error");
    } finally {
      setLoading(false);
    }
  };

  const renderActionButton = () => {
    console.log(user);
    const subscriptionStatus = user.subscriptionStatus || "unknown";
    switch (subscriptionStatus) {
      case "active":
      case "trialing":
        return (
          <>
            <Button
              variant="contained"
              color="warning"
              onClick={() => handleSubscriptionAction("pause")}
              disabled={loading}
              sx={{ mr: 2, boxShadow: 3 }}
            >
              {loading ? "Pausing..." : "Pause Subscription"}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleSubscriptionAction("cancel")}
              disabled={loading}
              sx={{ boxShadow: 3 }}
            >
              {loading ? "Cancelling..." : "Cancel Subscription"}
            </Button>
          </>
        );
      case "canceled":
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSubscriptionAction("start")}
            disabled={loading}
            sx={{ boxShadow: 3 }}
          >
            {loading ? "Starting..." : "Start Subscription"}
          </Button>
        );
      case "paused":
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleSubscriptionAction("resume")}
            disabled={loading}
            sx={{ boxShadow: 3 }}
          >
            {loading ? "Resuming..." : "Resume Subscription"}
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2">
          Edit Subscription
        </Typography>
        <Typography variant="body1" mt={2}>
          <strong>Name:</strong> {user.name}
        </Typography>
        <Typography variant="body1" mt={1}>
          <strong>Subscription Status:</strong> {user.subscriptions[0]?.status || "unknown"}
        </Typography>
        <Box mt={3} display="flex" justifyContent="flex-end">
          {renderActionButton()}
        </Box>
      </Box>
    </Modal>
  );
}

EditSubscriptionModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default EditSubscriptionModal;
