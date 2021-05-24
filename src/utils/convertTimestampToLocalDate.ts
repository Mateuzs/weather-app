const convertTimestampToLocalDate = (timestamp: number | null, timezone: number | null) => {
  if ([timestamp, timezone].some((e) => e === null)) return "";

  // Multiplication is needed to represent timestamp in miliseconds
  return new Date(timestamp! * 1000).toDateString();
};

export default convertTimestampToLocalDate;
