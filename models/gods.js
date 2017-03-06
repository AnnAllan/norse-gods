class God {
  constructor(name, ...domains) {
    this.name = name
    this.domains = domains
  }
}

const gods = [
  new God("Baldur", "Beauty", "Innocence", "Peace"),
  new God("Bragi", "Poetry", "Music", "Harp"),
  new God("Dagr", "Daytime", "Talkshows"),
  new God("Freyja", "Love", "Fertility", "Battle"),
  new God("Loki", "Trickery", "Mischief"),
  new God("Mimir", "Object Oriented Programming", "Agile", "Scrum"),
  new God("Odin", "War", "Wisdow", "Magic"),
  new God("Thor", "Thunder", "Battle"),
]

module.exports = {
  God,
  gods
}
