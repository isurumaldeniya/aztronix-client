import GaugeComponent from 'react-gauge-component';

export const GaugeChart = ({title, label, leftTitle, rightTitle, leftValue, rightValue, gaugeValue, valueUnit}) => {
  return (
    <main className="w-full h-4/5">
      <h1 className="text-xl font-mono font-bold text-start p-3">
        {title}
      </h1>
      <GaugeComponent
        className="h-50 text-gray-400"
        arc={{
          colorArray: [
            "#6366f1",
          ],
        }}
        value={gaugeValue}
        labels={{
          valueLabel: {
            formatTextValue: (value) => value + ` ${label}`,
            style: {
              fontSize: '50px',
              fill: "black",
              textShadow: 'none',
              fontWeight: 'bold'
            }
          },
        }}
      />
      <div className="flex justify-between px-5">
        <div className="flex flex-col p-2">
          <p className="text-md font-bold">{leftTitle}</p>
          <p className="text-xl font-bold font-mono">
            {leftValue} <small className="font-bold">{valueUnit}</small>
          </p>
        </div>
        <div className="flex flex-col p-2">
          <p className="text-md font-bold">{rightTitle}</p>
          <p className="text-xl font-bold font-mono">
            {rightValue} <small className="font-bold">{valueUnit}</small>
          </p>
        </div>
      </div>
    </main>
  );
};
