import moment from "moment";

export const formatData = (name, newState) =>
  newState &&
  newState.map((item) => {
    return {
      x: moment(item.from).format("MM/DD/YYYY h:mm"),
      y: item.intensity[name],
    };
  });
