import { Chart } from "react-google-charts";
interface IOptions {
  title: string;
  pieHole: number;
  is3D: boolean;
}
const CartPasien = () => {
  const options: IOptions = {
    title: "Keseluruhan Pasien",
    pieHole: 0.4,
    is3D: false,
  };
  const data = [
    ["Task", "Hours per Day"],
    ["Pasien Baru", 5],
    ["Pasien Lama", 2],
  ];
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
  );
};
export default CartPasien;
