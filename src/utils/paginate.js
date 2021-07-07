import _ from "lodash";

export const paginate = (item, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize;

  return _.slice(item, startIndex, startIndex + pageSize);
};
