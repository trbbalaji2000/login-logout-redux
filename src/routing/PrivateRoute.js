import React from "react";
import { Navigate, } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const PrivateRoute=({auth: { isAuthenticated, loading }})=>{
	return isAuthenticated?<Dashboard/>:<Navigate to={"/login"}/>
}
PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	
});

export default connect(mapStateToProps)(PrivateRoute);