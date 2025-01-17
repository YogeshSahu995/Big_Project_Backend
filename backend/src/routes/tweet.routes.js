import { Router } from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { createTweet, deleteTweet, updateTweets, getUserTweets } from "../controllers/tweet.controller.js"

const router = Router()

router.use(verifyJWT);

router.route("/").post(createTweet)
router.route("/user/:userId").get(getUserTweets)
router.route("/:tweetId").patch(updateTweets).delete(deleteTweet)

export default router