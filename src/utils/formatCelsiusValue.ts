const formatCelsiusValue = (temperature: number | null) => {
  if (temperature === null) return "";

  return temperature.toString().split(".")[0];
};

export default formatCelsiusValue;
