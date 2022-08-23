//Database
let users = [];
let id = 0;

export const getAllUsers = (request, response) => {
	return response.json(users);
};

export const getOneUser = (request, response) => {
	return response.json(users.filter((user) => user.id == request.params.id));
};

export const createUser = (request, response) => {
	const { firstName, lastName } = request.body;

	users.push({ id, firstName, lastName });
	id++;
	return response.json(users);
};

export const deleteUser = (request, response) => {
	users = users.filter((user) => user.id != request.params.id);

	return response.json(users);
};

export const updateUser = (request, response) => {
	const { firstName, lastName } = request.body;

	users = users.map((user) => {
		if (user.id == request.params.id) {
			user.firstName = firstName;
			user.lastName = lastName;

			return user;
		}
		return user;
	});

	return response.json(users);
};
