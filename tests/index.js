import APIS from '../src';

let apis

describe('sdk', () => {
  beforeEach(() => apis = new APIS());

  it('should get the apis library\'s version', () => {
    console.log(apis)
    expect(apis.version).toBeTruhy();
  });

});
