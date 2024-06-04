const submitData = async data => {
  const res = await fetch(`https://api.tech.redventures.com.br/orders`, {
    method: 'POST',
    headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
    body: JSON.stringify(data)
  })
  return await res
}

export default submitData
