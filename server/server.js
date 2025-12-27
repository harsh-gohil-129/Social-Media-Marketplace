import express from "express";
import "dotenv/config";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import listingRouter from "./routes/listingRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import { stripeWebhook } from "./controllers/stripeWebhooks.js";

const app = express();

app.use(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

app.use(cors());
app.use(clerkMiddleware());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is live!"));
app.use("/api/inngest", serve({ client: inngest, functions }));

app.use("/api/listing", listingRouter);
app.use("/api/chat", chatRouter);
app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
