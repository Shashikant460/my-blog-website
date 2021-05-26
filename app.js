//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "If COVID-19 is spreading in your community, stay safe by taking some simple precautions, such as physical distancing, wearing a mask, keeping rooms well ventilated, avoiding crowds, cleaning your hands, and coughing into a bent elbow or tissue. Check local advice where you live and work. Do it all!"+
" Maintain at least a 1-metre distance between yourself and others to reduce your risk of infection when they cough, sneeze or speak. Maintain an even greater distance between yourself and others when indoors. The further away, the better."+
" Make wearing a mask a normal part of being around other people. The appropriate use, storage and cleaning or disposal are essential to make masks as effective as possible.";
const aboutContent = "this is just testing Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "this is just testing Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// var fetchArticleTitle;
// var fetchArticleContent;

var posts=[];

app.get("/",function(req,res){
  // res.write("<h1>yo-yo-yo</h1>")
  // res.send();
  //console.log(fetchArticleTitle);
  //console.log(fetchArticleContent);

  res.render("home",{
    startingContent:homeStartingContent,
    posts:posts
  });



})

app.get("/about",function(req,res){
  res.render("about",{
    about:aboutContent
  })
})

app.get("/contact",function(req,res){
  res.render("contact",{
    contact:contactContent
  })
})

app.get("/compose",function(req,res){
  res.render("compose")
})

app.post("/compose",function(req,res){
  // fetchArticleTitle=req.body.articleTitle;
  // fetchArticleContent=req.body.articleContent;

  var post={
    fetchArticleTitle:req.body.articleTitle,
    fetchArticleContent:req.body.articleContent
  }
  posts.push(post);

  res.redirect("/");
})

app.get("/posts/:postName",function(req,res){
  var requestedTitle=req.params.postName;
  for(var i=0;i<posts.length;i++){
    if(posts[i].fetchArticleTitle==requestedTitle){
      //console.log(posts[i]);

      res.render("post",{
        sendTitle:requestedTitle,
        sendContent:posts[i].fetchArticleContent,
      })

    }
    else{
      console.log("not found");
    }
  }


})

app.post("/form2",function(req,res){
  res.redirect("/compose")
})












app.listen(3000, function() {
  console.log("Server started on port 3000");
});
