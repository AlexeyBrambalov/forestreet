import moment from "moment";

export const formatData = (name, newState) =>
  newState &&
  newState.map((item) => {
    return {
      x: moment(item.from).format("MM/DD/YYYY HH:mm"),
      y: item.intensity[name],
    };
  });

export const getLabelData = (newState) =>
  newState.map((item) => {
    return moment(item.to).format("MM/DD/YYYY HH:mm");
  });

export const getValueData = (newState, name) =>
  newState.map((item) => {
    return item.intensity[name];
  });

export const dateFormat = (date) =>
  `${moment(date).format("YYYY-MM-DD")}T${moment(date).format("HH:mm")}Z`;
