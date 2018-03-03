/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
  Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 * @param {string} string
 */
function timeConversion(string) {
  const isAfternoon = string.includes('PM');
	const clearString = isAfternoon ? string.replace('PM', '') : string.replace('AM', '');
	const splitData = clearString.split(':');
	const hourAsNumber = parseInt(splitData[0]);
	let newHour = '';

	if (isAfternoon) {
		newHour = hourAsNumber === 12 ? hourAsNumber : `${hourAsNumber + 12}`;
	} else {
		const hour = hourAsNumber < 10 ? `0${hourAsNumber}` : hourAsNumber;
		newHour = hourAsNumber === 12 ? '00' : hour;
	}

	return [newHour, splitData.slice(1).join(':')].join(':');
}

module.exports = timeConversion;
