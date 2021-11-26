import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { Switch, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import DashboardHome from "../DashboardHome/DashboardHome";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageAllOrders from "../../Login/Order/ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import "./Dashboard.css";
import Payment from "../Payment/Payment";
import PrivateRoute from "../../Login/PrivateRoute/PrivateRoute";
import AddReview from "../AddReview/AddReview";

const drawerWidth = 225;

function Dashboard(props) {
  const { admin, logOut, user } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const drawer = (
    <div>
      <Toolbar>
        <h5 className="fw-bold text-center ">
          DREAM <span className="text-danger"> CAR</span>
        </h5>
      </Toolbar>
      <Divider />

      <List>
        <Link
          style={{ textDecoration: "none", color: "darkviolet" }}
          to="/home"
        >
          <Button variant="outlined" color="info">
            <span className="text-dark">
              <i className="fas fa-home"> </i>
              {"  "}HOME
            </span>
          </Button>
        </Link>
        <br />
        <Link style={{ textDecoration: "none" }} to={`${url}`}>
          <Button variant="outlined" color="info" sx={{ marginTop: "1rem" }}>
            <span className="text-dark">
              <i className="far fa-handshake"></i>
              {"  "}
              {admin ? "DASHBOARD" : "MY ORDER"}
            </span>
          </Button>
        </Link>

        {!admin && (
          <>
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/paymentSystem`}
            >
              <Button
                variant="outlined"
                color="info"
                sx={{ marginTop: "1rem" }}
              >
                <span className="text-dark">
                  <i className="far fa-money-bill-alt"></i>
                  {"  "}PAYMENT
                </span>
              </Button>
            </Link>

            <Link style={{ textDecoration: "none" }} to={`${url}/addReview`}>
              <Button
                variant="outlined"
                color="info"
                sx={{ marginTop: "1rem" }}
              >
                <span className="text-dark">
                  <i className="fas fa-comments"></i>
                  {"  "}GIVE A REVIEW
                </span>
              </Button>
            </Link>
          </>
        )}
        {admin && (
          <Box>
            <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
              <Button
                variant="outlined"
                color="info"
                sx={{ marginTop: "1rem" }}
              >
                <span className="text-dark ">
                  <i className="fas fa-user-shield"></i>
                  {"    "} MAKE ADMIN
                </span>
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to={`${url}/addProduct`}>
              <Button
                variant="outlined"
                color="info"
                sx={{ marginTop: "1rem" }}
              >
                <span className="text-dark">
                  <i className="fas fa-plus-circle"></i>
                  {"  "}ADD PRODUCT
                </span>
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/manageAllOrders`}
            >
              <Button
                variant="outlined"
                color="info"
                sx={{ marginTop: "1rem" }}
              >
                <span className="text-dark">
                  <i className="fab fa-jedi-order"></i>
                  {"  "}MANAGE ALL ORDER
                </span>
              </Button>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/manageAllProducts`}
            >
              <Button
                variant="outlined"
                color="info"
                sx={{ marginTop: "1rem" }}
              >
                <span className="text-dark">
                  <i className="fas fa-tasks"></i>
                  {"  "}MANAGE ALL PRODUCT
                </span>
              </Button>
            </Link>
          </Box>
        )}
        {user.email && (
          <Link
            style={{ textDecoration: "none", color: "darkviolet" }}
            to="/home"
          >
            <br />
            <Button
              onClick={logOut}
              variant="outlined"
              color="info"
              sx={{ marginTop: "1rem" }}
            >
              <span className="text-dark">
                <i className="fas fa-sign-out-alt"></i>
                {"  "} EXIT
              </span>
            </Button>
          </Link>
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "darkcyan",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5 dashboard" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
          <Typography sx={{ mr: 2 }} variant=" user" noWrap component="div">
            {user.displayName}
          </Typography>
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <PrivateRoute exact path={path}>
            <DashboardHome />
          </PrivateRoute>
          <PrivateRoute path={`${path}/paymentSystem`}>
            <Payment />
          </PrivateRoute>
          <PrivateRoute path={`${path}/addReview`}>
            <AddReview />
          </PrivateRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders />
          </AdminRoute>

          <AdminRoute path={`${path}/manageAllProducts`}>
            <ManageAllProducts />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
