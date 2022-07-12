import React from "react";

// Stateless Component - to display the dashboard

const Display = ({ allDashboards }) => {
    return (
        <nav>
            <div>
                <i>
                    <div style={{width: 600, height: 400, fontSize: "24px"}}>
                        {allDashboards}
                    </div>
                    Hello Rhomis!
                </i>
            </div>
        </nav>
        /*<div>
           Hello Rhomis~ Here is where we display dashboard
        </div>*/
    );
};

export default Display;