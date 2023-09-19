import moment from "moment/moment";

export const timezoneDate = (date) => {
  if (!moment(date).isValid()) {
    return null;
  }
  const newDate = moment(date).format("DD/MM/YYYY HH:mm");
  return newDate;
};

export const convertDate = (date) => {
  if (!moment(date).isValid()) {
    return null;
  }
  const newDate = moment(date).format("DD/MM/YYYY");
  return newDate;
};
