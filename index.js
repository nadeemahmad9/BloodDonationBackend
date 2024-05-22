// // 


// const express = require('express');
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require('mongoose');
// const cookieParser = require("cookie-parser");

// const app = express();
// const port = 3177;

// dotenv.config();

// app.use(cookieParser());
// app.use(express.json());
// app.use(
//     cors({
//         origin: [
//             "http://localhost:3001",
//         ],
//         credentials: true,
//     })
// );

// mongoose.connect(process.env.MONGODB_URI, {}, (err) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//     } else {
//         console.log('Connected successfully to database');
//         // Start the server after successful database connection
//         app.listen(port, (err) => {
//             if (err) {
//                 console.error('Error starting server:', err);
//             } else {
//                 console.log(`Server running at http://localhost:${port}`);
//             }
//         });
//     }
// });

// app.use("/auth", require("./routers/authRouter"));
// app.use("/user", require("./routers/userRouter"));
// app.use("/bank", require("./routers/bankRouter"));
// app.use("/camps", require("./routers/campRouter"));


// const express = require('express');
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require('mongoose');
// const cookieParser = require("cookie-parser");

// const app = express();
// const port = process.env.PORT || 3177;

// dotenv.config();

// app.use(cookieParser());
// app.use(express.json());
// app.use(
//     cors({
//         origin: [
//             "http://localhost:3000",
//         ],
//         credentials: true,
//     })
// );

// mongoose.connect("mongodb://localhost:27017/bloodlink", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// })
// .then(() => {
//     console.log("Connected successfully to database");
// })
// .catch((error) => {
//     console.error("Error connecting to database:", error);
// });

// app.use("/auth", require("./routers/authRouter"));
// app.use("/user", require("./routers/userRouter"));
// app.use("/bank", require("./routers/bankRouter"));
// app.use("/camps", require("./routers/campRouter"));

// app.listen(port, () =>
//     console.log(`Server running at http://localhost:${port}`)
// );


// const express = require('express');
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require('mongoose');
// const cookieParser = require("cookie-parser");

// const app = express();
// const port = process.env.PORT || 3177;

// dotenv.config();

// app.use(cookieParser());
// app.use(express.json());
// app.use(
//     cors({
//         origin: [
//             "http://localhost:3002",
//         ],
//         credentials: true,
//     })
// );

// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log("Connected successfully to database"))
//     .catch((error) => console.error("Error connecting to database:", error));

// app.use("/auth", require("./routers/authRouter"));
// app.use("/user", require("./routers/userRouter"));
// app.use("/bank", require("./routers/bankRouter"));
// app.use("/camps", require("./routers/campRouter"));

// app.listen(port, () =>
//     console.log(`Server running at http://localhost:${port}`)
// );

// const express = require('express');
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require('mongoose');
// const cookieParser = require("cookie-parser");

// const app = express();
// const PORT = 3177;

// dotenv.config();

// app.use(cookieParser());
// app.use(express.json());
// app.use(
//     cors({
//         origin: [
//             "http://localhost:3001",
//         ],
//         credentials: true,
//     })
// );


// mongoose.connect(process.env.CONNECT, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (e) => {
//     console.log(e ? e : "Connected successfully to database");
// });

// app.use("/auth", require("./routers/authRouter"));
// app.use("/user", require("./routers/userRouter"));
// app.use("/bank", require("./routers/bankRouter"));
// app.use("/camps", require("./routers/campRouter"));

// app.listen(PORT, () =>
//     console.log(`Server running at http://localhost:${PORT}`)
// );

const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3177;

dotenv.config();


app.use(cookieParser());
app.use(express.json());

app.use(
    cors({
        origin: 'http://blooddonationn.netlify.app', // Your frontend URL
        methods: 'GET,POST,PUT,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type,Authorization',
        credentials: false,
    })
);

// Use async/await for mongoose connection
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected successfully to database");

        // Start the server after successful database connection
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
}

connectToDatabase();

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));


// const express = require('express');
// const cors = require('cors');
// const authRoutes = require('./routers/authRouter'); // Example route file
// const app = express();

// // Allow all origins (for development only)
// app.use(cors());

// // Or configure specific origins
// app.use(cors({
//     origin: 'https://blooddonationn.netlify.app', // Your frontend URL
//     methods: 'GET,POST,PUT,DELETE,OPTIONS',
//     allowedHeaders: 'Content-Type,Authorization'
// }));

// // Enable preflight requests
// app.options('*', cors());

// app.use(express.json());

// app.use('/authRouter', authRoutes); // Your route setup

// const PORT = process.env.PORT || 3177;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
