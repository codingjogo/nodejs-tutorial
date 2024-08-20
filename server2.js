import { createServer } from "http";

const posts = [
	{
		id: 1,
		title: "Post 1",
	},
	{
		id: 2,
		title: "Post 2",
	},
];

const loggerMiddleware = (req, res, next) => {
	console.log(`URL: ${req.url} METHOD: ${req.method}`);
	next();
};

const jsonMiddleware = (req, res, next) => {
	res.setHeader("Content-Type", "application/json");
	next();
};

const handleGetUsers = (req, res) => {
	res.write(JSON.stringify(posts));
	res.end();
};

const handleGetUserById = (req, res) => {
	const id = req.url.split("/")[3];
	const post = posts.find((post) => post.id === parseInt(id));
	if (post) {
		res.write(JSON.stringify(post));
		res.end();
	} else {
		res.write(JSON.stringify({ message: "No user found" }));
		res.end();
	}
};

const handleInvalidMethodRequest = (req, res) => {
	res.statusCode = 404;
	res.write(JSON.stringify({ message: "METHOD not VALID" }));
	res.end();
};

const handleCreateUser = (req, res) => {
	let body = '';

	req.on('data', (chunk) => {
		body += chunk.toString();
	})

	req.on('end', () => {
		const newUser = JSON.parse(body);
		posts.push(newUser);
		res.statusCode = 201; // successful response code
		res.write(JSON.stringify(newUser));
		res.end();
	})

}

const server = createServer((req, res) => {
	loggerMiddleware(req, res, () => {
		jsonMiddleware(req, res, () => {
			if (req.url === "/api/posts" && req.method === "GET") {
				handleGetUsers(req, res);
			} else if (
				req.url.match(/\/api\/posts\/([0-9]+)/) &&
				req.method === "GET"
			) {
				handleGetUserById(req, res);
			} else if (req.url === '/api/posts' && req.method === 'POST') {
				handleCreateUser(req, res);
			} else {
				handleInvalidMethodRequest(req, res);
			}
		})
	});
});

server.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
