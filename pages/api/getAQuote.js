import NextCors from 'nextjs-cors'

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200,
  })

  try {
    const data = {
      destination: ['BS'],
      startDate: '2024-07-22',
      endDate: '2024-07-19',
      travellers: [
        {
          isMain: true,
          firstName: '',
          lastName: '',
          middleName: '',
          age: 28,
          tripCost: 250,
        },
        {
          isMain: false,
          firstName: '',
          lastName: '',
          middleName: '',
          age: 25,
          tripCost: 250,
        },
      ],
    }
    const jsonString = JSON.stringify(data)
    const encodedString = encodeURIComponent(jsonString)
    const url = new URL('http://localhost:3000/quote/travel/display')
    url.searchParams.append('calculate', true)
    url.searchParams.append('quote', encodedString)
    const finalUrl = url.toString()

    return res.status(200).json({ url: finalUrl })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
