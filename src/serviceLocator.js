module.exports = () => {
  const dependencies = {}
  const factories = {}

  const factory = (name, factory) => {
    factories[name] = factory
  }

  const register = (name, dependency) => {
    dependencies[name] = dependency
  }

  const get = name => {
    if (!dependencies[name]) {
      const factory = factories[name]
      dependencies[name] = factory && factory(serviceLocator)

      if (!dependencies[name]) {
        throw new Error('module not found')
      }
    }
    return dependencies[name]
  }

  return {
    factory,
    register,
    get
  }
}
