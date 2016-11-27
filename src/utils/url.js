import {
  join,
  filter,
} from 'lodash';


export function composedURL(urlElements) {
  const removedFalsyelemets = filter(urlElements, (o) => o);
  return join(removedFalsyelemets, '/');
}
