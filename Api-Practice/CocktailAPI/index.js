import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req,res) => {
    try{
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        res.render('index.ejs',{content: result.data});
    }
    catch(error){
        console.log(error);
    }
    
});



app.listen(port, () => {
    console.log('Port open')
});