const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./src/routes/task.manager.api.routes');


const app = express();
const PORT = process.env.PORT || 3000;

/** middleware */
app.use(bodyParser.json());


/** routes */
app.use(taskRoutes);

/** sample endpoint */
app.get("/", (req, res) => {
    res.send("Endpoint")
})



app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}.`)
    console.log(`TIMESTAMP :: ${new Date().toISOString()}`);
}
)

