const fetchData = async url => {
  const res = await fetch(`https://api.tech.redventures.com.br/${url}`, {
    headers: { 'x-api-key': import.meta.env.VITE_API_KEY }
  })
  return await res.json()
}

export default fetchData
