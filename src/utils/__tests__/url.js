import {
  composedURL,
} from '../url';

describe('composedURL', () => {
  it('should return an URL', () => {
    const urlElements = ['http://base.io', 'users', 'tester', ''];
    const expectedReturl = 'http://base.io/users/tester';
    expect(composedURL(urlElements)).toEqual(expectedReturl);
  });
});
