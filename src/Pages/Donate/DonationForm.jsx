import Lumicash from "../../assets/lumicash.png"
import Ecocash from "../../assets/ecocash.png"
function DonationForm() {
  return (
    <div className="max-w-md mx-auto bg-white rounded p-8">
      <h2 className="text-2xl font-semibold mb-4">Faire un Don</h2>
      <form action="#">
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-primary"
          >
            Montant(en Dollars)
          </label>
          <input
            required
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-primary"
          >
            Votre Nom Et Prenoms
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-primary"
          >
            Address Email
          </label>
          <input
            required
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-primary"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm"
            placeholder="Leave a message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-secondary/80 text-white py-2 px-4 rounded-md hover:bg-secondary focus:outline-none focus:bg-indigo-600"
        >
          Envoyer
        </button>
      </form>

      <div className="flex flex-col gap-5 mt-10">
        <div>
          <p>Ou Via :</p>
        </div>
        <div className="flex gap-5 items-center">
          <img src={Lumicash} alt="lumicash" className="w-12 h-12" />
          <p>+257 61 962 947</p>
        </div>
        <div className="flex gap-5 items-center">
          <img src={Ecocash} alt="lumicash" className="w-12 h-12" />
          <p>+257 79 962 947</p>
        </div>
      </div>
    </div>
  )
}

export default DonationForm
