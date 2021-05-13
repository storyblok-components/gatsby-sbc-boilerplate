import { parse, parseUrl } from "query-string";
const isServer = typeof window === "undefined";

const useQueryParams = location => {
  const queryParams = isServer
    ? parseUrl(location.pathname).query
    : parse(location.search);

  return queryParams;
};

export default useQueryParams;
