import React, { Component } from "react";

class Topics extends Component {
    render() {
        const { toMainPage, toLivelihoods, toFoodSecurity, toCrops, toLivestock, toOffFarmIncome } =
            this.props;
        return (
            <div>
                <div>
                    <button
                        className=""
                        onClick={toMainPage}
                    >
                        Main Page
                        <i/>
                    </button>
                    <button
                        className=""
                        onClick={toLivelihoods}
                    >
                        Livelihoods
                        <i/>
                    </button>
                    <button
                        className=""
                        onClick={toFoodSecurity}
                    >
                        Food Security
                        <i/>
                    </button>
                    <button
                        className=""
                        onClick={toCrops}
                    >
                        Crops
                        <i/>
                    </button>
                    <button
                        className=""
                        onClick={toLivestock}
                    >
                        Livestock
                        <i/>
                    </button>
                    <button
                        className=""
                        onClick={toOffFarmIncome}
                    >
                        Off Farm Income
                        <i/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Topics;