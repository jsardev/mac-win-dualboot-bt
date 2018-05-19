export default macLinkKey =>
  macLinkKey
    .match(/[a-z0-9]{2}/g)
    .reverse()
    .reduce((linkKey, chunk, index) => {
      if (index !== 0 && index % 4 === 0) {
        linkKey = linkKey.concat(' ');
      }
      return linkKey.concat(chunk);
    }, '');
