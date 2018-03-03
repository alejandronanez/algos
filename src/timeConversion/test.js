const timeConversion = require('./index');

describe('timeConversion OK', () => {
  it('should return the correct format', () => {
    expect(timeConversion('11:59:59AM')).toEqual('11:59:59');
    expect(timeConversion('12:59:59PM')).toEqual('12:59:59');
    expect(timeConversion('01:00:00PM')).toEqual('13:00:00');
    expect(timeConversion('11:59:59PM')).toEqual('23:59:59');
    expect(timeConversion('12:00:00AM')).toEqual('00:00:00');
    expect(timeConversion('01:00:00AM')).toEqual('01:00:00');
    expect(timeConversion('12:00:00PM')).toEqual('12:00:00');
    expect(timeConversion('12:01:00PM')).toEqual('12:01:00');
  });
});
