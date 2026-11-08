import express from "express";
import urlMetadata from "url-metadata";
import { rateLimit } from "express-rate-limit";


const app = express();
env.config();
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5
})


// Loop through an object Function - Start
function loopObject(object, initialLetters) {
    let keys = Object.keys(object);
    let tag = [];
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].startsWith(initialLetters) && object[keys[i])!=="") {
            tag.push({
                [keys[i]]: object[keys[i]]
            });
        }
    };
    return tag;
}
// Loop through an object Function - End




app.use(express.static("public"));
// app.use(rateLimiter); //Request Rate Limiter


app.get("/meta_data", async (req, res) => {
    const url = req.query.url;


        try {
            const metaData = await urlMetadata(url);


            const outputOfApi = {
                title: metaData.title,
                description: metaData.description,
                language: metaData.lang,
                author: metaData.author,
                lastModified: metaData.responseHeaders['last-modified'],
                imageTags: metaData.imgTags,
                favicons: metaData.favicons,
                canonical: metaData.canonical,
                keywords: metaData.keywords,
                ogTags: loopObject(metaData, "og:"),
                twitterTags: loopObject(metaData, "twitter:"),
            }


            res.json(JSON.stringify(outputOfApi));


        } catch (err) {
            console.log(err);
            res.send(err);
        }
});


app.listen(4000, () => {
    console.log("Server running on port 4000");
});
