# Rhomis Dashboard Front-End
The back-end of this project is [GitHub Repository](https://github.com/Patanga/GroupK_CGIAR_Farm_Datasets_BackEnd).

# Getting Started with Front-End

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Setup for Local Development

1. Download the back-end of this project and run it, for detail please visit this [GitHub Repository](https://github.com/Patanga/GroupK_CGIAR_Farm_Datasets_BackEnd).
2. Clone this  front -end repository
3. Install npm dependencies: `npm install`
4. Run the app : `npm start`
   - By default, it will run on localhost:8081. This is the default for projects created with [Create React App](https://github.com/facebook/create-react-app).
   - You can change the default port by overwriting the .env file:
     - `npm start` will use the `.env.development` file. You can overwrite this locally by copying the file to `.env.development.local`.
     - To update the port, add a new "PORT" variable.
     - For more information on how Create React App handles .env files, see the documentation [here](https://create-react-app.dev/docs/adding-custom-environment-variables/#adding-development-environment-variables-in-env)

# Web Page Function Reference

1. The switch bar on the top right can be clicked to switch pages, a total of 6 pages.

2. In the filter box on the left, you can select countries, regions, projects, and per capita income. The filtering is linked, and only the content of the corresponding range will appear under the influence of the content selected by the previous level.

3. Some dashboards have a zoom box on the right or below, use the mouse wheel or drag the start and end points to view the data within the range you need.

4. ![](pics/downloadbutton.png)

   Two buttons in the upper right corner of each dashboard. The function corresponding to the first button is to convert the chart into the form of data so that the original data can be read directly. The second button is the download function, which can download the chart in png format.

# Code Parts Reference

In the folder called `GroupK_CGIAR_Farm_Datasets_FrontEnd/src`,  there are five main parts which are calculators, components, css, pages and plotOptions. The followings are the instructions of each parts.

### calculators

It is divided into six files, corresponding to the pages selected by the top button. This part is called as a function in the pages file, and the data read from the back-end API selects the part needed by each dashboard according to the key value for further calculation. Calculations serve two purposes. The first is to perform statistical calculation on the data. The data output in the back-end API is JSON in units of each household (livelihood). The calculation module needs to process and count all households as a whole. The second is to serve the output of each chart part in the plotOption file, try to use a data format that meets the requirements of Echarts (such as two-dimensional arrays or specially placed key-value pairs, etc.)

### components



### css



### pages



### plotOptions

It is divided into six folders according to different pages. Each folder contains the configuration content required by Echarts of each dashboards, and will return a JSON file, which is the JSON required by the options of Echarts. These options will be standardized according to the type and readability of the chart, including but not limited to parameters such as color, font, grid position, and axis units. At the same time, the data will be further adjusted, such as sorting or capitalization, etc., and adjusted in the formatter. This  [Chart Configuration link](https://echarts.apache.org/en/option.html#title) is the configuration instructions for Echarts.

Some special config of options :

##### Pie Chart

```javascript
formatter: function(name) {
            var data = option.series[0].data;
            var total = 0;
            var tarValue;
            for (var i = 0; i < data.length; i++) {
              total += data[i].value;
              if (data[i].name === name) {
                tarValue = data[i].value;
              }
            }
            var p = Math.round(((tarValue / total) * 100)); //choose by situation
            //var p=parseFloat((((tarValue / total) * 100)).toFixed(3))
            return `${name} (${p}%)`;
          }
```

This section can attach the percentage of the corresponding content to the name behind the legend displayed by the pie chart. The number of decimal places required to be reserved before the percent sign, or the method of rounding, can be changed by replacing the comment line.

##### Box-whisker

```javascript
          {
            text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
            borderColor: '#999',
            borderWidth: 1,
            textStyle: {
              fontWeight: 'normal',
              fontSize: 10,
              lineHeight: 20
            },
          }
```

This part is the data calculation standard of the box-and-whisker plot selected by this webpage, which is the default calculation standard formula of Echarts.

##### Box and Bar

```javascript
legend: {
          data: [{ name: "Zero Count" }, { name: "Box" },{name:'Outlier'}],
          top: "12%",
          textStyle: {
            color: "black" //legend color
          },
          selected: { Outlier: false },
        }
```

This section allows the user to choose to display different types of charts by clicking on the content in the legend box.

In this code, you can choose which types of charts are loaded by default by changing the parameters in the 'selected'.

```javascript
 series: [
          {
            name: "Zero Count",
            type: "bar",
            data: boxData.count,
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: "orange"
              }
            },
          },
          {
            name: 'Box',
            type: 'boxplot',
            datasetIndex: 1,
            yAxisIndex: 1, 
            xAxisIndex: 1,  
          },
          {
            name: 'Outlier',
            type: 'scatter',
            yAxisIndex: 1, 
            datasetIndex: 2,
            xAxisIndex: 1, 
          }
        ]
```

The data required for each chart needs to be provided in the series configuration.
