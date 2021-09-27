export const getData = async <T>() => {
  // pretending to fetch data from external Api
    const res = await fetch('src/data.json')
    const result: T = await res.json()
    return result;
}