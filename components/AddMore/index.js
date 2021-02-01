import React, { useState } from "react";
import {
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  useMediaQuery,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import Router from "next/router";

const useStyles = makeStyles((theme) =>
  createStyles({
    addMore: {
      margin: theme.spacing(1),
      position: "fixed",
      bottom: theme.spacing(2),
      left: theme.spacing(2),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })
);
export default function AddMore() {
  const classes = useStyles();
  const theme = useTheme();

  const [openForm, setOpenForm] = useState(false);
  const [values, setValues] = useState({ url: "", text: "", title: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleFormSubmit = async () => {
    setOpenForm(false);

    let d = new Date();
    let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    let data = {
      title: values.title,
      text: values.text,
      image_url: values.url,
      date: `${mo} ${da}, ${ye}`,
    };
    const res = await fetch(`http://localhost:3000/api/articles`, {
      method: "post",
      body: JSON.stringify(data),
    });

    setValues({ url: "", text: "", title: "" });
    Router.push("/");
  };

  const handleFormOpen = () => {
    setOpenForm(true);
  };

  const handleFormClose = () => {
    setOpenForm(false);
    setValues({ url: "", text: "", title: "" });
  };

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.addMore}>
      <div>
        <Fab
          size="medium"
          color="secondary"
          aria-label="add"
          onClick={handleFormOpen}
        >
          <AddIcon />
        </Fab>
      </div>
      <Dialog open={openForm} fullScreen={fullScreen}>
        <DialogTitle>Add new article</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type="url"
            name="url"
            label="Image URL"
            type="text"
            fullWidth
            value={values.url}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Article Title"
            type="text"
            fullWidth
            value={values.title}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="text"
            label="Article text"
            type="text"
            fullWidth
            multiline
            rows={6}
            value={values.text}
            onChange={handleInputChange}
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            autoFocus
            onClick={handleFormClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
