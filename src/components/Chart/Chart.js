
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart=(props) =>{
    const dataPointsValues=props.dataPoints.map((dataPoint) =>dataPoint.value);
    const maximumValue=Math.max(...dataPointsValues);
    return (
        <div className="chart">
            { props.dataPoints.map((datapoint) =>{
                return <ChartBar key={Math.random()} value={datapoint.value} maxValue={maximumValue} label={datapoint.label} />
            })}
        </div>
    )
}

export default Chart;    