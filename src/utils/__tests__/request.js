import request from '../request';
import sinon from 'sinon';

describe('request', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    sinon.stub(window, 'fetch');
  });

  // After each test, restore the fetch function
  afterEach(() => {
    window.fetch.restore();
  });

  describe('stubbing successful response', () => {
    // Before each test, pretend we got a successful response
    beforeEach(() => {
      const res = new Response('{"hello":"world"}', {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      });

      window.fetch.returns(Promise.resolve(res));
    });

    it('should format the response correctly', async () => {
      const res = await request('/thisurliscorrect');
      expect(res.hello).toEqual('world');
    });
  });

  describe('stubbing error response', () => {
    // Before each test, pretend we got an unsuccessful response
    beforeEach(() => {
      const res = new Response('', {
        status: 404,
        statusText: 'Not Found',
        headers: {
          'Content-type': 'application/json',
        },
      });

      window.fetch.returns(Promise.resolve(res));
    });

    it('should catch errors', async () => {
      try {
        const res = await request('/thisdoesntexist');
      } catch (err) {
        expect(err.response.status).toEqual(404);
        expect(err.response.statusText).toEqual('Not Found');
      }
    });
  });
});
