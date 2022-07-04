import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Alert=({ alerts })=>{
console.log(alerts);

return(
    alerts.map((alert)=>(
        <div key={alert.id} className={`alert alert-${alert.alertType}`}>
    {alert.msg}

        </div>
    ))
)
}

Alert.prototype={
    alerts:PropTypes.array.isRequired
}
const mapStateToProps=(state)=>({
    alerts:state.alert,
})



export default connect(mapStateToProps)(Alert);