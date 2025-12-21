export default function Footer() {
  return (
    <footer className="bg-black  px-10 py-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo & copyright */}
        <div className="md:col-span-2">
          <h1 className="text-white text-2xl font-bold tracking-widest">
            MAKETA
          </h1>
          <p className="mt-4 text-sm">Copyright © 2025 | All Rights Reserved</p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Story</li>
            <li>Our Team</li>
            <li>Our Clients</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Marketing</li>
            <li>Branding & Design</li>
            <li>Media Production</li>
            <li>Web & App Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
