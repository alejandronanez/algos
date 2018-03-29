const {
  isCorporateEmail,
  isAutoReplyEmail,
  isEmailLengthValid,
  isValidHour,
  getChartData
} = require('./index');

describe('email validator', () => {
  it('should not allow gmail/googlemail accounts', () => {
    expect(isCorporateEmail('foo@gmail.com')).toEqual(true);
    expect(isCorporateEmail('foo@googlemail.com')).toEqual(true);
    expect(isCorporateEmail('foo@yahoo.com')).toEqual(false);
  });

  it('should not allow "reply-@foo.com" type emails', () => {
    expect(isAutoReplyEmail('reply-123@gmail.com')).toEqual(true);
    expect(isAutoReplyEmail('reply-@gmail.com')).toEqual(true);
    expect(isAutoReplyEmail('foo@gmail.com')).toEqual(false);
  });

  it('should not allow emails where length > 40', () => {
    const emailWith40Chars = '1234567890123456789012345678901234567890';

    expect(isEmailLengthValid(`${emailWith40Chars}@gmail.com`)).toEqual(true);
    expect(isEmailLengthValid(`${emailWith40Chars}1@gmail.com`)).toEqual(false);
  });

  it('should allow hours between 0-23 inclusive', () => {
    expect(isValidHour(0)).toEqual(true);
    expect(isValidHour(23)).toEqual(true);
    expect(isValidHour(24)).toEqual(false);
    expect(isValidHour(-1)).toEqual(false);
  });

  it('should return correct chart data', () => {
    const base = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 0,
      16: 0,
      17: 0,
      18: 0,
      19: 0,
      20: 0,
      21: 0,
      22: 0,
      23: 0
    };
    const data = [
      {
        hour: 1,
        recipientEmail: 'foo@bar.com'
      },
      {
        hour: 1,
        recipientEmail: 'foo@baz.com'
      },
      {
        hour: 2,
        recipientEmail: 'bar@bax.com'
      },
      {
        hour: 2,
        recipientEmail: 'bar@bazbar.com'
      },
      {
        hour: 3,
        recipientEmail: 'baz@fooman.com'
      }
    ];

    const expectedResult = Object.assign({}, base, { 1: 1, 2: 1, 3: 0.5 });
    const result = Object.assign({}, base, getChartData(data));

    expect(result).toEqual(expectedResult);
  });
});
