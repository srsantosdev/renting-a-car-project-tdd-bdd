const fs = require('fs/promises');

class BaseRepository {
  constructor ({ file }) {
    this.file = file;
  }

  async find(itemId) {
    const content = JSON.parse(await fs.readFile(this.file))

    if (!itemId) {
      return content
    }

    const item = content.find(({ id }) => id === itemId)

    return item
  }
}

module.exports = BaseRepository;