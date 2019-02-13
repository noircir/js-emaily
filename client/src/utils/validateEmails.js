const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
	// _.trimEnd()
	emails = emails.replace(/,\s*$/, '');
	const invalidEmails = emails.split(',').map((email) => email.trim()).filter((email) => re.test(email) === false);

	if (invalidEmails.length >= 1) {
		return `These emails are invalid: ${invalidEmails}`;
	}

	return;
};
