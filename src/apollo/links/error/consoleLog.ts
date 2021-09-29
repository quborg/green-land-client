/* eslint-disable no-console */
import { GraphQLError } from 'graphql';

const [{ error, log, group, groupEnd }, { stringify }] = [console, JSON];

const s = {
  h: 'background-color: #5d3434; color: white; font-weight: bold;',
  m: 'color: red; border: 1px solid grey;',
  t: 'background-color: #3A3A3A; padding: 0 3px; border: 1px solid grey;',
};

const consoleLogGroupError = {
  header: (): void => group('%c======= start [GraphQL error] =======', s.h),
  body: ({ message, path, locations, extensions }: GraphQLError): void => {
    group('%c%s', s.m, message);
    if (extensions?.errors) log('errors: ', extensions.errors);
    log('%cPath: %OLocations:%O', s.t, path, locations);
    log('%cPath: %OLocations:%O', s.t, stringify(path), stringify(locations));
    error('-- system --');
    groupEnd();
  },
  footer: (): void => {
    groupEnd();
    log('%c============== end ==============', s.h);
  },
};

export default consoleLogGroupError;
