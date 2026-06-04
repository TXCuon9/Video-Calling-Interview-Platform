import express from 'express';
import {ENV} from './lib/env.js';
import path from "path";
import { connectDB } from './lib/db.js';
import dns from 'dns';
import cors from 'cors';
import {serve} from "inngest/express";
import { inngest } from './lib/inngest.js';

// Optional DNS override (set DNS_SERVERS=1.1.1.1,8.8.8.8)
const dnsServers = process.env.DNS_SERVERS?.split(',').map((server) => server.trim()).filter(Boolean);
if (dnsServers?.length) {
    dns.setServers(dnsServers);
}

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(cors({origin:ENV.CLIENT_URL, credentials:true}));

app.use("/api/inngest", serve({client:inngest}))

app.get("/health", (req, res) => {
    res.status(200).json({msg: "api is up and running"});
});

app.get("/books", (req, res) => {
    res.status(200).json({msg: "this is the books endpoint"});
})

// make ready for deploy
if(ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("/*splat", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}

const port = ENV.PORT || 3000;


const startServer = async() => {
    try {
        await connectDB();
        app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        });
    }
    catch(error) {
        console.error("Error starting the server:", error);
    }
}

startServer();