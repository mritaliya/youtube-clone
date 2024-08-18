export const value_converter = (value) => {
  if (value >= 1000000) return Math.floor(value / 1000000) + "M";
  else if (value >= 1000) return Math.floor(value / 1000) + "K";
  else return value;
};

export const time_converter = (time) => {
  let new_time = String(time);
  let finall_time1 = new_time.replace("PT", "");
 return finall_time1
};
