const validateSchemas = (schema,serviceLocator) => (req,res,next) => {
  let payload;
  const config = {
    abortEarly: false, // include all errors
    allowUnknown: true, // ignore unknown props
    stripUnknown: true, // remove unknown props
  }
  const customError = serviceLocator.get('exceptions.customError')
  if(req.method === 'get'){}
  else{
    payload = req.body
  }

  const {error} = schema.validate(payload,config);
  if(error){
    return next(new customError(serviceLocator.get('exceptions.codeErrors').PAYLOAD,'Errors in payload',error))
  }
  return next()
}

module.exports = validateSchemas