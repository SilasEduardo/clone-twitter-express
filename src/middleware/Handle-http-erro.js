exports.HandleHttoError = (req, res, next) => {
 res.handleHttpEroor = ({message}) => {
    res.status(500).send({erro: true, "msg": message})
 }
 next()
}