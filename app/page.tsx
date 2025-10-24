import { Home, Users, MapPin, Calendar, Mail, Phone, Utensils, Users2 } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-900/60 to-rose-950/80 z-10"></div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-24%20at%2023.55.10-EYeJ30ubKsqq2DHp0vhtlVZkx6IByB.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4">
          <Home className="w-20 h-20 mb-6 text-rose-200" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center tracking-tight">Ungdomshuset</h1>
          <p className="text-xl md:text-2xl mb-2 text-rose-100 text-center max-w-2xl leading-relaxed">
            Et sted der alle tilhører
          </p>
          <p className="text-lg text-rose-200 text-center">Bøfjordvegen 23, Hyllestad Kommune</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-rose-900 mb-8 text-center">Vår Visjon</h2>
          <div className="prose prose-lg max-w-none text-gray-700 text-center leading-relaxed">
            <p className="text-xl">
              Ungdomshuset skal være et inkluderende møtested hvor alle kan bli med, uansett hvem de er. Her skaper vi
              et trygt og varmt miljø for aktiviteter, opplevelser og fellesskap.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Users2 className="w-16 h-16 mx-auto mb-4 text-rose-600" />
            <h2 className="text-4xl font-bold text-rose-900 mb-4">Tilrettelagte Aktiviteter</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Vi tilbyr spesialtilpassede aktiviteter for personer med diverse utfordringer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industrial Kitchen */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <img src="/images/kitchen.jpeg" alt="Industrikjøkken" className="w-full h-48 object-cover" />
              <div className="p-6">
                <Utensils className="w-10 h-10 text-rose-600 mb-3" />
                <h3 className="text-2xl font-bold text-rose-900 mb-2">Industrikjøkken</h3>
                <p className="text-gray-600 leading-relaxed">
                  Moderne kjøkkenfasiliteter for matlaging og læring i hyggelig atmosfære
                </p>
              </div>
            </div>

            {/* Hall and Stage */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <img src="/images/nesje-fort.jpeg" alt="Sal og scene" className="w-full h-48 object-cover" />
              <div className="p-6">
                <Users className="w-10 h-10 text-rose-600 mb-3" />
                <h3 className="text-2xl font-bold text-rose-900 mb-2">Sal og Scene</h3>
                <p className="text-gray-600 leading-relaxed">
                  Stor sal med scene for fremvisninger, teater og andre aktiviteter
                </p>
              </div>
            </div>

            {/* Common Areas */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <img src="/images/common-room.jpg" alt="Oppholdsrom" className="w-full h-48 object-cover" />
              <div className="p-6">
                <Home className="w-10 h-10 text-rose-600 mb-3" />
                <h3 className="text-2xl font-bold text-rose-900 mb-2">Oppholdsrom</h3>
                <p className="text-gray-600 leading-relaxed">
                  Koselige fellesområder for sosialt samvær og hyggestunder
                </p>
              </div>
            </div>

            {/* Dining Hall */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <img src="/images/dining-hall.png" alt="Spisesal" className="w-full h-48 object-cover" />
              <div className="p-6">
                <Utensils className="w-10 h-10 text-rose-600 mb-3" />
                <h3 className="text-2xl font-bold text-rose-900 mb-2">Spisesal</h3>
                <p className="text-gray-600 leading-relaxed">Romslig spisesal for måltider og sosiale sammenkomster</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Activities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-rose-600" />
            <h2 className="text-4xl font-bold text-rose-900 mb-4">Aktiviteter i Nærområdet</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hyllestad kommune byr på fantastiske naturopplevelser og spennende steder
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Hiking Areas */}
            <div className="bg-rose-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img
                src="/images/swimming-spots.jpeg"
                alt="Turområder"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-rose-900 mb-3">Turområder</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vakre turstier og fjellområder perfekt for turgåing og naturopplevelser. Nyt den spektakulære naturen
                  i Sogn og Fjordane.
                </p>
              </div>
            </div>

            {/* Swimming Spots */}
            <div className="bg-rose-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img
                src="/images/hiking-areas.jpeg"
                alt="Badeplasser"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-rose-900 mb-3">Badeplasser</h3>
                <p className="text-gray-700 leading-relaxed">
                  Fine badeplasser i nærområdet, perfekt for varme sommerdager ved sjøen med krystallklart vann.
                </p>
              </div>
            </div>

            {/* Nesje Fort */}
            <div className="bg-rose-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img src="/images/hall-stage.jpeg" alt="Nesje Fort" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-rose-900 mb-3">Nesje Fort</h3>
                <p className="text-gray-700 leading-relaxed">
                  Flott feriested med fisking og båtutleie. Perfekt for en dag på sjøen eller en lenger fisketur med
                  venner og familie.
                </p>
              </div>
            </div>

            {/* Kvernsteinsparken */}
            <div className="bg-rose-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <img src="/images/kvernsteinsparken.jpeg" alt="Kvernsteinsparken" className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-rose-900 mb-3">Kvernsteinsparken</h3>
                <p className="text-gray-700 leading-relaxed">
                  Historisk park med fascinerende kvernsteiner som forteller historien om områdets rike kulturarv og
                  steinbruddshistorie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Section */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-rose-600" />
            <h2 className="text-4xl font-bold text-rose-900 mb-4">Utleie til Arrangementer</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Vi leier ut lokaler til alle typer arrangementer</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">💍</div>
              <h3 className="text-xl font-bold text-rose-900">Bryllup</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">✝️</div>
              <h3 className="text-xl font-bold text-rose-900">Konfirmasjon</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">🏕️</div>
              <h3 className="text-xl font-bold text-rose-900">Leirskole</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-bold text-rose-900">Fester</h3>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 text-center">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Har du et arrangement du ønsker å feire hos oss? Ta kontakt for å høre om tilgjengelighet og priser.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-rose-900 mb-12 text-center">Kontakt Oss</h2>

          <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl shadow-xl p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Mail className="w-8 h-8 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">E-post</h3>
                  <a
                    href="mailto:mikael.niane@gmail.com"
                    className="text-lg text-gray-700 hover:text-rose-600 transition-colors duration-200"
                  >
                    mikael.niane@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-8 h-8 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">Telefon</h3>
                  <a
                    href="tel:94171766"
                    className="text-lg text-gray-700 hover:text-rose-600 transition-colors duration-200"
                  >
                    941 71 766
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 md:col-span-2">
                <MapPin className="w-8 h-8 text-rose-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-rose-900 mb-2">Adresse</h3>
                  <p className="text-lg text-gray-700">
                    Bøfjordvegen 23
                    <br />
                    Hyllestad Kommune
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Home className="w-10 h-10 mx-auto mb-3 text-rose-200" />
          <h3 className="text-2xl font-bold mb-2">Ungdomshuset</h3>
          <p className="text-rose-200">Et sted der alle tilhører</p>
        </div>
      </footer>
    </div>
  )
}
