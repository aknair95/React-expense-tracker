
import ChartBar from "./ChartBar";

const Chart=(props) =>{
    const dataPointsValues=props.dataPoints.map((dataPoint) =>dataPoint.value);
    let maxvalue=0;
    for(const value in dataPointsValues)
    {
        if(value>maxvalue){
           maxvalue=value;
        }
    } 
    return (
        <div className="chart">
            { props.dataPoints.map((datapoint) =>{
                return <ChartBar key={Math.random()} value={datapoint.value} maxValue={maxvalue} label={datapoint.label} />
            })}
        </div>
    )
}

export default Chart;    