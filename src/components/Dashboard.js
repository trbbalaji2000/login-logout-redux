import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

const Dashboard = ({ auth: { user } }) => {
  
	return (
		<div style={{ marginTop: "5rem", textAlign: "center" }}>
			<h1>Welcome, {user && user.Name}</h1>
		</div>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
