export const getDatesInRange = (startDate="", endDate) => {
    const start = new Date(startDate.slice(0, 10));
    const end = new Date(endDate.slice(0, 10));

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
};