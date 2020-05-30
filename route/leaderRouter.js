const express = require('express');
const bodyparser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyparser.json());

leaderRouter.route('/').get((req, res, next)=>{
    res.end("Will send all the leaders profile to you!");
})
.post((req, res, next)=>{
    res.end("Will add the leader after reviewing!");
})
.put((req, res, next)=>{
    res.statusCode = 403;
    res.end("Operation not supported!");
})
.delete((req, res, next)=>{
    res.end("Deleting all the records of leaders!");
})

leaderRouter.route('/:leaderId')
.get((req, res, next)=>{
    res.end("Will end the details of the leaderId: "+req.params.leaderId+" to you!");
})
.post((req, res, next)=>{
    res.end("Post operation not supported on promotionId: "+ req.params.leaderId);
})
.put((req, res, next)=>{
    res.write("Updating the leaderId : " + req.params.leaderId+"\n");
    res.end("Will update the leader: "+req.body.name + " with details: "+req.body.description);
})
.delete((req, res, next)=>{
    res.end("Deleting the record of leaderId: "+req.params.leaderId);
})

module.exports=leaderRouter;