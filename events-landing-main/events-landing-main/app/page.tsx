"use client";

import Image from "next/image";

export default function Home() {
  const handleComingSoon = () => {
    alert("Coming Soon 🚀");
  };

  return (
    <div className="w-full font-sans text-gray-800 overflow-x-hidden">
      <section className="relative min-h-screen flex items-center justify-center py-10 text-white px-4 sm:px-6 md:px-10 lg:px-16 sm:py-0 overflow-hidden">
        <Image
          src="/event-bg.jpg"
          alt="Event Background"
          fill
          priority
          className="object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#007DFD]/40 to-[#7B61FF]/40"></div>

        <div className="absolute top-16 sm:top-24 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#007DFD]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-16 right-4 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-[#7B61FF]/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white/90">
              WON Events
            </h1>

            <h2 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              The Complete Event Ecosystem
            </h2>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-xl mx-auto md:mx-0">
              Transform the way you manage events. From seamless ticket booking
              and secure online payments to job postings, stall bookings,
              partner collaborations and live revenue tracking.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start text-xs sm:text-sm text-white/80">
              <span className="bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur">
                ⚡ High Performance
              </span>

              <span className="bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur">
                🔐 Bank-Level Security
              </span>

              <span className="bg-white/10 px-3 sm:px-4 py-2 rounded-full backdrop-blur">
                📱 Multi-Device Ready
              </span>
            </div>

            <div className="mt-8 sm:mt-10 flex gap-4 sm:gap-5 flex-wrap justify-center md:justify-start">
              <button
                onClick={handleComingSoon}
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[#007DFD] to-[#7B61FF] text-white text-sm sm:text-base font-medium shadow-lg hover:scale-105 transition duration-300"
              >
                <Image
                  src="/playstore.png"
                  alt="Playstore"
                  width={20}
                  height={20}
                />
                Google Play
              </button>

              <button
                onClick={handleComingSoon}
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-[#007DFD] to-[#7B61FF] text-white text-sm sm:text-base font-medium shadow-lg hover:scale-105 transition duration-300"
              >
                <Image
                  src="/app-store.png"
                  alt="Appstore"
                  width={20}
                  height={20}
                />
                App Store
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-[380px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
            <Image
              src="/hero.png"
              alt="Home Screen"
              width={260}
              height={550}
              className="
        absolute
        left-2 sm:left-6
        top-5
        w-[150px] sm:w-[160px] md:w-[200px] lg:w-[260px]
        h-auto
        rounded-2xl sm:rounded-3xl
        shadow-2xl
        border-4 sm:border-6 md:border-8 border-white/10
        hover:scale-105 transition duration-500"
            />

            <Image
              src="/hero2.png"
              alt="Dashboard Screen"
              width={260}
              height={550}
              className="
        absolute
        right-2 sm:right-6
        bottom-5
        w-[150px] sm:w-[160px] md:w-[200px] lg:w-[260px]
        h-auto
        rounded-2xl sm:rounded-3xl
        shadow-2xl
        border-4 sm:border-6 md:border-8 border-white/10
        hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Built for Security, Speed & Reliability
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            Events demand real-time coordination, instant transactions and
            flawless execution. Our infrastructure ensures encrypted payments,
            fast response times, secure settlements and uninterrupted
            performance — even during high traffic.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#0F172A] hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                🔐 Advanced Payment Security
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All transactions are encrypted and securely processed.
                Organisers receive smooth settlements while attendees enjoy
                worry-free bookings.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#0F172A] hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                ⚡ High Performance System
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized backend architecture ensures fast event loading,
                instant booking confirmations and real-time dashboard updates.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#0F172A] hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                📲 Simple & Intuitive
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you are an attendee, organiser or partner, our interface
                makes navigation effortless and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F172A] text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            One Platform. Multiple Roles. Endless Possibilities.
          </h2>
          <p className="max-w-3xl mx-auto text-white/90 mb-16">
            Our ecosystem connects attendees, organisers and partners in a
            unified environment built specifically for event businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">🎟 Attendees</h3>
              <p className="text-white/80 mb-4">
                Discover events, book tickets instantly and receive real-time
                alerts.
              </p>
              <ul className="text-left space-y-2 text-white/90">
                <li>• Seamless ticket booking</li>
                <li>• Secure online payment</li>
                <li>• Instant confirmation</li>
                <li>• Regular notifications</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">📊 Organisers</h3>
              <p className="text-white/80 mb-4">
                Manage your event business from a powerful live dashboard.
              </p>
              <ul className="text-left space-y-2 text-white/90">
                <li>• Create & manage events</li>
                <li>• Post jobs & stalls</li>
                <li>• Track revenue & sales</li>
                <li>• Chat with partners</li>
                <li>• Smooth settlements</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">🤝 Partners</h3>
              <p className="text-white/80 mb-4">
                Grow your opportunities by collaborating with organisers.
              </p>
              <ul className="text-left space-y-2 text-white/90">
                <li>• Apply for event jobs</li>
                <li>• Book stalls easily</li>
                <li>• Direct communication</li>
                <li>• Transparent workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20 bg-gray-50 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Explore The Experience
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
            Every screen is crafted for clarity, speed and powerful event
            management.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:hidden">
            {[
              "/screen1.png",
              "/screen2.png",
              "/screen3.png",
              "/screen4.png",
              "/screen5.png",
              "/screen6.png",
            ].map((src, index) => (
              <div key={index} className="relative group flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-[#007DFD]/20 to-[#7B61FF]/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div
                  className="
            relative
            w-[150px] sm:w-[150px]
            rounded-[22px]
            overflow-hidden
            border border-gray-200
            shadow-md
            group-hover:scale-105
            transition duration-500
            bg-black
          "
                >
                  <Image
                    src={src}
                    alt=""
                    width={400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:flex flex-wrap justify-center gap-5">
            {[
              { src: "/screen1.png", offset: "mt-0" },
              { src: "/screen2.png", offset: "mt-10" },
              { src: "/screen7.png", offset: "mt-20" },
              { src: "/screen4.png", offset: "mt-0" },
              { src: "/screen5.png", offset: "mt-10" },
            ].map((item, index) => (
              <div key={index} className={`relative ${item.offset} group`}>
                <div className="absolute inset-0 bg-gradient-to-b from-[#007DFD]/20 to-[#7B61FF]/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div
                  className="
            relative
            w-[170px] lg:w-[190px] xl:w-[210px]
            rounded-[28px]
            overflow-hidden
            border border-gray-200
            shadow-xl
            group-hover:scale-105
            transition duration-500
            bg-black
          "
                >
                  <Image
                    src={item.src}
                    alt=""
                    width={400}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-4xl font-bold mb-6">
          24/7 Support & Multi-Device Compatibility
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Our dedicated support team is available round the clock. Access the
          platform seamlessly from iPhones, Android devices and tablets. Whether
          you are hosting a corporate summit or a music festival, our system
          adapts to your scale.
        </p>
      </section>

      <section className="bg-[#0F172A] text-gray-300 py-15 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-14">
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">
                📬 Contact Us
              </h4>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:contact.us@nowitservices.com"
                  className="flex items-center gap-3 hover:text-[#007DFD] transition"
                >
                  📧 contact.us@nowitservices.com
                </a>

                <a
                  href="tel:+917893536373"
                  className="flex items-center gap-3 hover:text-[#7B61FF] transition"
                >
                  📞 +91 78935 36373
                </a>

                <a
                  href="https://nowitservices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#007DFD] transition"
                >
                  🌐 nowitservices.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-6">
                🚀 Our Applications
              </h4>

              <div className="space-y-4 text-sm">
                {[
                  {
                    name: "WON Digi",
                    desc: "School Management",
                    link: "https://wondigi.com",
                  },
                  {
                    name: "WON Pulse",
                    desc: "Hospital Management",
                    link: "https://wonpulse.com",
                  },
                  {
                    name: "WON Bridge",
                    desc: "Weigh Bridge System",
                    link: "https://wonbridge.com",
                  },
                  {
                    name: "WON Bills",
                    desc: "Finance & Billing",
                    link: "https://wonbills.com",
                  },
                ].map((app, i) => (
                  <a
                    key={i}
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 transition"
                  >
                    <p className="text-white font-medium">{app.name}</p>
                    <p className="text-gray-400 text-xs">{app.desc}</p>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-6">
                💻 Custom Development
              </h4>

              <p className="text-sm leading-relaxed text-gray-400">
                We design and develop scalable, secure and high-performance web
                & mobile applications across industries. From idea validation to
                deployment — we deliver complete digital ecosystems tailored for
                growth.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 my-14"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>
              © {new Date().getFullYear()} NOWIT Services Pvt. Ltd. All Rights
              Reserved.
            </p>

            <p className="text-gray-600">
              Built with ❤️ for scalable event ecosystems
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
