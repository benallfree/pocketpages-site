import { PageDataLoaderFunc } from 'pocketpages'

export const load: PageDataLoaderFunc = (context) => {
  return {
    version: require(`${__hooks}/../package.json`).version,
  }
}
