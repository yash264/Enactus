import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import exphbs from "express-handlebars";
import moment from "moment";
import { fileURLToPath } from "url";
import connectDB from './connection.js';

import orderRoutes from './routes/order.routes.js';
import newsRoutes from './routes/news.routes.js';

const PORT = process.env.PORT
dotenv.config();
const app = express();
connectDB();

const corsOptions = {
  origin: 'https://enactus-mnnit2k25.netlify.app',
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });


app.engine("hbs", exphbs.engine({
  extname: ".hbs",
  defaultLayout: false,
  helpers: {
    multiply: (a, b) => a * b,
    formatDate: (date) => moment(date).format("DD MMM YYYY, hh:mm A"),
    formatMethod: (method) => method === "cod" ? "Cash on Delivery" : "Online Payment (via Razorpay)"
  }
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


app.use(express.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', orderRoutes);
app.use('/', newsRoutes);


app.get("/", (req, res) => {
  res.render("home", { layout: false });
});


//  to start the server
app.get("/startServer", async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Server started Successfully",
    });
  }
  catch (error) {
    console.log(error);
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

