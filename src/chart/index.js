function isCorporateEmail(email) {
  return !!email.match(/@(gmail|googlemail).com/);
}

function isAutoReplyEmail(email) {
  return !!email.match(/(reply-)/g);
}

function isEmailLengthValid(email) {
  return email.split('@')[0].length <= 40;
}

function isValidHour(eventHour) {
  return 0 <= eventHour && eventHour <= 23;
}

function isValidEmail(email) {
  return (
    !isCorporateEmail(email) &&
    !isAutoReplyEmail(email) &&
    isEmailLengthValid(email)
  );
}

function getChartData(data) {
  const frequencies = data
    .filter(
      ({ hour, recipientEmail }) =>
        isValidHour(hour) && isValidEmail(recipientEmail)
    )
    .reduce(
      (data, currentHour) => ({
        ...data,
        [currentHour.hour]: !data[currentHour.hour]
          ? 1
          : data[currentHour.hour] + 1
      }),
      {}
    );

  const maxFrequency = Math.max(...Object.values(frequencies));

  return Object.entries(frequencies).reduce(
    (frequencyHashMap, [frequencyKey, frequencyValue]) => ({
      ...frequencyHashMap,
      [frequencyKey]: frequencyValue / maxFrequency
    }),
    {}
  );

  return result;
}

module.exports = {
  isCorporateEmail,
  isAutoReplyEmail,
  isEmailLengthValid,
  isValidHour,
  isValidEmail,
  getChartData
};
