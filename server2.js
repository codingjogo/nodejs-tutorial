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
	console.log(`URL: ${req.url} METHOD: ${req.method}`)
	next();
}

const server = createServer((req, res) => {
	loggerMiddleware(req, res, () => {
		if (req.url === "/api/posts" && req.method === "GET") {
			res.setHeader("Content-Type", "application/json");
			res.write(JSON.stringify(posts));
			res.end();
		} else if (req.url.match(/\/api\/posts\/([0-9]+)/) && req.method === "GET") {
			const id = req.url.split("/")[3];
			const post = posts.find((post) => post.id === parseInt(id));
			if (post) {
				res.setHeader("Content-Type", "application/json");
				res.write(JSON.stringify(post));
				res.end();
			}  else {
				res.setHeader("Content-Type", "application/json");
				res.write(JSON.stringify({message: "No user found"}));
				res.end();
			}
		} else {
			res.setHeader("Content-Type", "application/json");
			res.statusCode = 404;
			res.write(JSON.stringify({ message: "METHOD not VALID" }));
			res.end();
		}
	})
});

server.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
