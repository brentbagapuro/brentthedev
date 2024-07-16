import axios from 'axios'

const ButterTestPage = () => {
  const getAQuote = async () => {
    const res = await axios.get('/api/getAQuote')
    window.open(res.data.url)
  }

  return (
    <div className="bg-gradient-to-r from-background to-secondary h-screen flex items-center justify-center">
      <button
        className="bg-background border-2 border-secondary px-4 py-2 text-[#c1d4cd] hover:scale-125 hover:text-white hover:border-white ease-in-out duration-300"
        onClick={getAQuote}
      >
        Get a quote
      </button>
    </div>
  )
}

export default ButterTestPage
