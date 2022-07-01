import React, { Component } from "react";
import { GroupingData } from "../tmpSample/tmpGrouping";

/* TODO - 从json文件里面读取选项，并渲染出来*/
class Groupings extends Component {
    render() {
        return (
            <div>
                <div>
                    <form>
                        <label>Countries</label>
                        <select name = "Countries">
                            <option value = "all">All</option>
                            {GroupingData.map((data, key) => {
                                return (
                                    <option key = {key}>
                                        {
                                            data.countries
                                        }
                                    </option>
                                );
                            })}
                        </select>
                    </form>
                    <form>
                        <label>Sub-national regions</label>
                        <select name = "Sub-national_regions">
                            <option value = "all">All</option>
                            {GroupingData.map((data, key) => {
                                return (
                                    <option key = {key}>
                                        {
                                            data.subRegions
                                        }
                                    </option>
                                );
                            })}
                        </select>
                    </form>
                    <form>
                        <label>Projects</label>
                        <select name = "Projects">
                            <option value = "all">All</option>
                            {GroupingData.map((data, key) => {
                                return (
                                    <option key = {key}>
                                        {
                                            data.projects
                                        }
                                    </option>
                                );
                            })}
                        </select>
                    </form>
                    <form>
                        <label>Income categories</label>
                        <select name = "Income_categories">
                            <option value = "all">All</option>
                            <option value = "<1USD">&lt;1USD</option>
                            <option value = "1-1.9USD">1-1.9USD</option>
                            <option value = ">1.9USD">&gt;1.9USD</option>
                        </select>
                    </form>
                    <button
                        className=""
                        onClick={() => this.props.resetDashboard()}
                    >
                        Global/Reset
                        <i/>
                    </button>
                </div>
            </div>
        )
    }
}

export default Groupings;