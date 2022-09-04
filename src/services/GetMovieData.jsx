const getMovieData = async (url, hook) => {
    const response = await fetch(url)
    const data = await response.json()

    hook(data.results)
}

export { getMovieData }