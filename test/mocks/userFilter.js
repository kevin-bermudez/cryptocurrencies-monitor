const userFilterMock = () => {
  const self = this

  this.get = jest.fn().mockResolvedValue([
    {
      id: 1,
      name: 'test',
      lastName: 'test',
      username: 'test',
      password: '$2a$10$mYmAMQOQJJQ04L6Mx1vfZu2sN8zYoXgTw3hQcMA7C1EWq3lyuF0gS',
      favoriteCurrency: 'EUR'
    }
  ])

  this.and = (label, value) => self

  this.limit = value => self

  this.offset = value => self

  return self
}

module.exports = userFilterMock
