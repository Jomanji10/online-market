import React from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

const ProductCard = (props) => {
  return (
    <Grid item>
      <Paper>
        <Grid item container>
          <Typography>{props.product.title}</Typography>
          <Button onClick={props.setProducts}>setUsers</Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
