import JWT from 'jsonwebtoken'

export const requireSignIn = async (req, res, next) => {
    try {
        const decode = await JWT.verify(req.headers.authorization, process.env.JSON_SECRET_KEY)
        req.user = decode;
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error
        })
    }
} 